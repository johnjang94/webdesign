import { AppProps } from "next/app";
import Navigation from "@/components/desktop/navigation";
import "@/styles/globals.css";
import Mobile from "@/components/mobile/mobile";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-5 my-5">
      <div className="hidden md:block">
        <Navigation />
      </div>
      <div className="block md:hidden">
        <Mobile />
      </div>
      <Component {...pageProps} />
    </div>
  );
}
