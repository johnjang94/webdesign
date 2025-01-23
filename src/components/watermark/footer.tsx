import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Navbar } from "../../../public/utils/navigation";
import { useRouter } from "next/router";
import { useTheme } from "../theme/mode";

export default function Footer() {
  const router = useRouter();
  const { theme } = useTheme();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <footer className="flex items-center w-full space-y-4 p-4 justify-between mx-5 bg-gray-100 dark:bg-gray-800">
      <button
        onClick={() => handleRedirect("/")}
        className="focus:outline-none"
      >
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

      <div className="flex items-center space-y-1 space-x-2 text-center">
        <span className="text-blue-500">&copy;</span>
        <div className="flex flex-col md:flex-row md:space-x-2 text-xs md:text-base">
          <p>Designed & Built by John Jang.</p>
          <p>All Rights Reserved. 2024</p>
        </div>
      </div>

      <div className="flex space-x-4 text-2xl">
        <Link
          href="https://github.com/johnjang94"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-gray-600 dark:hover:text-gray-400" />
        </Link>
        <Link
          href="http://www.linkedin.com/in/johnjang94"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-blue-500 hover:text-blue-600" />
        </Link>
      </div>
    </footer>
  );
}
