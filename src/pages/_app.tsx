import { AppProps } from "next/app";
import Navigation from "@/components/desktop/navigation";
import Mobile from "@/components/mobile/mobile";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import "@/styles/globals.css";
import { ThemeProvider } from "../components/theme/mode";
import Footer from "@/components/watermark/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="mx-5 my-5">
        <GoogleAnalytics />
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="block md:hidden">
          <Mobile />
        </div>
        <Component {...pageProps} />
      </div>
      <div className="flex justify-center items-center text-center py-4">
        <Footer />
      </div>
    </ThemeProvider>
  );
}
