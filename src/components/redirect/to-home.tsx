import { useRouter } from "next/router";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Redirect() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center space-x-5 justify-between w-3/6 mx-auto">
      <button
        className="flex items-center px-5 py-2 rounded-2xl space-x-3 hover:bg-gradient-to-br hover:from-blue-400 hover:to-transparent transition-all"
        onClick={navigateToHome}
      >
        <FaLongArrowAltLeft />
        <p>Home</p>
      </button>
      <button className="flex items-center px-5 py-2 rounded-2xl space-x-3 hover:bg-gradient-to-br hover:from-blue-400 hover:to-transparent transition-all">
        <p>Next Project</p>
        <FaLongArrowAltRight />
      </button>
    </div>
  );
}
