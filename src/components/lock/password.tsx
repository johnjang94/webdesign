import { useState } from "react";
import { useRouter } from "next/router";

interface PasswordProps {
  onCorrectPassword: () => void;
}

export default function Password({ onCorrectPassword }: PasswordProps) {
  const { pathname } = useRouter();
  const PASSWORD = process.env.NEXT_PUBLIC_PASSCODE;
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.trim() === PASSWORD) {
      onCorrectPassword();
    } else {
      setErrorMessage("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center transform translate-x-[12px]">
      <div className="py-10 md:w-[55vw] w-5/6 bg-slate-300 rounded-3xl">
        <h1 className="text-center text-3xl mt-10">
          {pathname === "/operate/home" ? "NDA" : "Want to know more?"}
        </h1>
        <div className="py-5 text-center">
          <p>The project is currently in-progress.</p>
          <p>Please make an inquiry to get the latest update!</p>
        </div>
        <form
          className="flex items-center mb-3 w-4/6 mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="password"
            className="p-2 w-full rounded-l-lg bg-gray-200 hover:bg-slate-100 text-black"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            aria-label="Password Input"
          />
          <button type="submit" className="p-2 rounded-r-lg bg-cyan-400">
            OK
          </button>
        </form>
        {errorMessage && (
          <p className="text-[#FF00FF] text-center">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}
