import { useState, useEffect } from "react";
import { useTheme } from "../theme/mode";

type Section = {
  id: string;
  label: string;
};

type ContentNavProps = {
  currentSection: number;
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>;
  pathname: string;
};

const initialSections: Section[] = [
  { id: "1", label: "Summary" },
  { id: "2", label: "Problem Statement" },
  { id: "3", label: "Solutions" },
];

export default function ContentNav({
  currentSection,
  setCurrentSection,
  pathname,
}: ContentNavProps) {
  const { theme } = useTheme();
  const [sections, setSections] = useState<Section[]>(initialSections);
  const [selectedSection, setSelectedSection] = useState<string>(
    currentSection.toString()
  );

  useEffect(() => {
    const updateSections = (pathname: string): Section[] => {
      switch (pathname) {
        case "/operate":
          return [
            { id: "1", label: "Summary" },
            { id: "2", label: "Insight" },
            { id: "3", label: "Impact" },
          ];
        case "/kblock/k-block":
          return [
            { id: "1", label: "Overview" },
            { id: "2", label: "Progress" },
            { id: "3", label: "Reflection" },
          ];
        default:
          return initialSections;
      }
    };

    setSections(updateSections(pathname));
  }, [pathname]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSelectedSection(id);
    }
  };

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
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [setCurrentSection]);

  useEffect(() => {
    setSelectedSection(currentSection.toString());
  }, [currentSection]);

  return (
    <nav className="sticky top-10 z-10">
      <div className="mx-10 mt-28 space-y-5 p-2 border-l-4 border-l-zinc-200 dark:border-l-white hidden md:block">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`rounded-xl p-2 ${
              selectedSection === section.id
                ? theme === "light"
                  ? "bg-gray-300"
                  : "border border-gray-300"
                : ""
            }`}
          >
            <button
              onClick={() => handleScroll(section.id)}
              className={`text-left ${
                selectedSection === section.id ? "font-bold" : ""
              }`}
              aria-label={`Navigate to ${section.label}`}
            >
              {section.label}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
}
