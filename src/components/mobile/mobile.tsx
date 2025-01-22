import { useRouter } from "next/router";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useTheme } from "../theme/mode";

export default function Mobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    closeMenu();
    setTimeout(() => {
      router.push(path);
    }, 1000);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        <RxHamburgerMenu className="text-2xl" />
      </button>

      <div
        className={`fixed inset-y-0 left-0 w-[80vw] max-h-screen bg-slate-100 dark:bg-gray-800 shadow overflow-y-scroll z-50 transition-transform duration-300 ease-in-out rounded-2xl ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="float-right px-10 pt-10" onClick={closeMenu}>
          <RxCross1 className="text-2xl" />
        </button>

        <ul className="py-24 px-10 space-y-5">
          <li
            className={`text-xl sm:text-base transition-transform duration-500 ease-in-out ${
              isMenuOpen
                ? "translate-x-0 delay-400"
                : "-translate-x-full delay-[800ms]"
            }`}
          >
            <button onClick={() => handleNavigation("/")} className="p-2">
              home
            </button>
          </li>
          <li
            className={`text-xl sm:text-base transition-transform duration-500 ease-in-out ${
              isMenuOpen
                ? "translate-x-0 delay-[400ms]"
                : "-translate-x-full delay-[600ms]"
            }`}
          >
            <button onClick={() => handleNavigation("/about")} className="p-2">
              about
            </button>
          </li>
          <li
            className={`text-xl sm:text-base transition-transform duration-500 ease-in-out ${
              isMenuOpen
                ? "translate-x-0 delay-[600ms]"
                : "-translate-x-full delay-[400ms]"
            }`}
          >
            <button
              onClick={() => handleNavigation("/contact")}
              className="p-2"
            >
              contact
            </button>
          </li>
          <li
            className={`text-xl sm:text-sm transition-transform duration-500 ease-in-out ml-2 ${
              isMenuOpen
                ? "translate-x-0 delay-[800ms]"
                : "-translate-x-full delay-[200ms]"
            } mt-5`}
          >
            <button onClick={toggleTheme}>
              {theme === "dark" ? "light mode" : "dark mode"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
