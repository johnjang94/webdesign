import { useEffect, useState } from "react";

export default function Navigation() {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const allowedReferrers = ["indeed.com", "webdesign-bay.vercel.app"];

    const referrer = document.referrer;
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    console.log("Referrer:", referrer);

    if (
      token === "secure-token" ||
      (referrer && allowedReferrers.some((url) => referrer.includes(url)))
    ) {
      setShowResume(true);
    }
  }, []);

  return (
    <div>
      <button>About</button>
      {showResume && <button>Resume</button>}
      <button>Contact</button>
    </div>
  );
}
