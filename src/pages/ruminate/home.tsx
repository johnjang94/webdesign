import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ruminate } from "../../../public/utils/ruminate";
import ContentNav from "../../components/content/navigation";
import Password from "../../components/lock/password";
import ProjectDetails from "./project-detail";
import Redirect from "@/components/redirect/to-home";

// Import Parts
import Summary from "./synopsis";
import Solutions from "./showcase";

export default function Home() {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState(1);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  useEffect(() => {
    if (!isPasswordCorrect || typeof window === "undefined") return;

    const sectionIds = ["2", "3"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(parseInt(entry.target.id, 10));
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [isPasswordCorrect]);

  const handleCorrectPassword = () => {
    setIsPasswordCorrect(true);
  };

  const PublicContent = () => (
    <div>
      <div>
        <Summary />
      </div>
      <div>
        <Solutions isLocked={!isPasswordCorrect} />
      </div>
    </div>
  );

  const PrivateContent = () => (
    <div className="space-y-20">
      <div id="3">
        <Redirect />
      </div>
    </div>
  );

  return (
    <div>
      <section className="my-10 mx-auto">
        <div className="bg-gradient-to-b from-slate-500 to-transparent mx-10 rounded-xl text-white flex flex-col items-center justify-center">
          <div className="md:grid md:grid-cols-2 md:py-20 py-10 items-center gap-8 max-w-6xl">
            <div className="w-full md:my-20 my-5 space-y-5 text-center">
              <h1 className="md:text-4xl text-xl font-bold md:font-normal text-white">
                Offering qualified, real-life feedback across
              </h1>
              <h1 className="md:text-4xl text-xl underline p-3 w-5/6 mx-auto bg-white text-green-500 rounded-2xl">
                16.5K
              </h1>
              <h1 className="md:text-4xl text-xl font-bold md:font-normal text-white">
                venues in Michigan
              </h1>
            </div>
            <div className="space-y-5 w-full flex justify-center p-9">
              <Image
                src={ruminate.Ruminate}
                alt="Ruminate"
                className="rounded-xl mx-auto h-96 object-cover object-top"
              />
            </div>
          </div>
          <div>
            <ProjectDetails />
          </div>
        </div>
      </section>
      <section className="md:flex md:flex-1">
        <div className={isPasswordCorrect ? "" : "hidden"}>
          {isPasswordCorrect && (
            <ContentNav
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
              pathname={router.pathname}
            />
          )}
        </div>
        <section className="md:w-4/6 mx-10 my-5 md:my-28">
          {isPasswordCorrect ? (
            <PrivateContent />
          ) : (
            <div className="md:ml-52 w-full">
              <PublicContent />
            </div>
          )}
        </section>
      </section>
      {!isPasswordCorrect && (
        <section className="w-full">
          <Password onCorrectPassword={handleCorrectPassword} />
        </section>
      )}
    </div>
  );
}
