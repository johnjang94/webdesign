import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Home } from "../../../public/utils/home";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function Navigation() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", !prev);
      return !prev;
    });
  };

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-background text-foreground">
      <button onClick={() => handleRedirect("/")}>
        {isDarkMode ? (
          <Image
            src={Home.LogoWhite}
            alt="Logo for dark mode"
            width={32}
            height={32}
          />
        ) : (
          <Image
            src={Home.Logo}
            alt="Logo for light mode"
            width={32}
            height={32}
          />
        )}
      </button>
      <div className="space-x-10 text-xl items-center">
        <button onClick={() => handleRedirect("/about")}>about</button>
        <button onClick={() => handleRedirect("/resume")}>resume</button>
        <button onClick={() => handleRedirect("/contact")}>contact</button>
        <button onClick={toggleDarkMode} className="ml-4">
          {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  );
}
