import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ContentNav from "../../components/content/navigation";
import { Kblock } from "../../../public/utils/k-block";
import Summary from "./summary";
import Design from "./design";

export default function KBLOCK() {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionIds = ["1", "2", "3"];
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
      } else {
        console.warn(`Element with ID ${id} not found`);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const PrivateContent = () => (
    <div className="space-y-20">
      <div id="1">
        <Summary />
      </div>
      <div id="2">
        <Design />
      </div>
      <div id="3">
        <h2>Solutions</h2>
      </div>
    </div>
  );

  const ProjectDetails = () => (
    <div className="space-y-10 md:space-y-0 md:flex md:items-start justify-center md:gap-2 my-0 md:my-20">
      <div className="flex md:space-x-10 gap-5 md:gap-0 md:mx-8 mx-5 text-gray-900 dark:text-gray-100">
        <p className="font-bold">My Role</p>
        <p>Web Designer</p>
      </div>
      <div className="flex space-x-10 mx-5 text-gray-900 dark:text-gray-100">
        <p className="font-bold">Team</p>
        <ul>
          <li>5 UX Designers</li>
          <li>4 UX Researchers</li>
          <li>5 Web Designers</li>
          <li>3 Product Strategists</li>
          <li>2 Project Managers</li>
        </ul>
      </div>
      <div className="flex space-x-5 mx-5 text-gray-900 dark:text-gray-100">
        <p className="font-bold">Tools</p>
        <ul>
          <li>Figma</li>
          <li>FigJam</li>
          <li>Miro</li>
          <li>Slack</li>
        </ul>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Vercel</li>
        </ul>
      </div>
      <div className="flex space-x-10 mx-5 text-gray-900 dark:text-gray-100">
        <p className="font-bold">Timeline</p>
        <div className="text-center">
          <p>August 2023 ~ October 2023</p>
          <span>(13 weeks)</span>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <section>
        <div className="bg-gradient-to-b from-slate-500 to-transparent my-10 rounded-xl mx-auto px-10 justify-center items-center">
          <div className="md:grid md:grid-cols-2 md:py-20 py-5 gap-10 items-center max-w-7xl">
            <div className="w-full md:my-20 my-10 space-y-5 text-center md:m-5">
              <h1 className="md:text-4xl text-xl text-white">
                Reaching brand awareness by
              </h1>
              <h1 className="md:text-4xl text-xl underline p-3 md:w-5/6 w-full mx-auto bg-white text-green-500 rounded-2xl">
                15%
              </h1>
            </div>
            <div className="space-y-5">
              <Image
                src={Kblock.KBlock}
                alt="Demo showcase"
                className="rounded-xl mx-auto w-full"
                layout="responsive"
                width={1200}
              />
            </div>
          </div>
          <ProjectDetails />
        </div>
      </section>
      <section className="md:flex md:flex-1">
        <div className="md:w-[15vw]">
          <ContentNav
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            pathname={router.pathname}
          />
        </div>
        <section className="md:w-4/6 mx-10 my-5 md:my-28">
          <PrivateContent />
        </section>
      </section>
    </div>
  );
}
