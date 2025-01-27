import { useRouter } from "next/router";
import Image from "next/image";
import { Navbar } from "../../../public/utils/navigation";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../theme/mode";
import { useEffect, useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const allowedReferrers = [
      "linkedin.com",
      "indeed.com",
      "webdesign-bay.vercel.app",
    ];

    const referrer = document.referrer;
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (
      token === "secure-token" ||
      (referrer && allowedReferrers.some((url) => referrer.includes(url)))
    ) {
      setShowResume(true);
    }
  }, []);

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex items-center justify-between p-4">
      <button onClick={() => handleRedirect("/")}>
        {theme === "dark" ? (
          <Image
            src={Navbar.LogoWhite}
            alt="Logo for dark mode"
            width={32}
            height={32}
          />
        ) : (
          <Image
            src={Navbar.Logo}
            alt="Logo for light mode"
            width={32}
            height={32}
          />
        )}
      </button>
      <div className="space-x-10 text-xl items-center">
        <button onClick={() => handleRedirect("/about-me")}>about</button>
        {showResume && (
          <button onClick={() => handleRedirect("/resume")}>resume</button>
        )}
        <button onClick={() => handleRedirect("/contact-copy")}>contact</button>
        <button className="ml-4" onClick={toggleTheme}>
          {theme === "dark" ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  );
}
