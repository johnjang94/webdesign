import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (event: string, config?: Record<string, unknown>) => void;
  }
}

const GoogleAnalytics: React.FC = () => {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  useEffect(() => {
    if (!GA_ID) {
      console.warn("Google Analytics ID is not defined");
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(
        event: string,
        config?: Record<string, unknown>
      ) {
        window.dataLayer.push({ event, ...(config || {}) });
      };
      window.gtag("js", { timestamp: new Date().toISOString() });
      window.gtag("config", { id: GA_ID });
    };
  }, [GA_ID]);

  return null;
};

export default GoogleAnalytics;
