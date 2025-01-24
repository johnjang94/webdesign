import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { home } from "../../public/utils/home";
import { useTheme } from "../components/theme/mode";

const data = [
  {
    id: 1,
    imgSrc: home.Operate,
    imgAlt: "Operate",
    icon: "🔒",
    title: "Transforming inventory management with 40% faster workflow",
    subtitle:
      "Implemented new system for onboarding, room management, and catering services",
    category: ["Web Application", "B2B SaaS", "Start-up Enterprise"],
    // percentage: ["", ""],
    // highlight: ["", ""],
    link: "/operate/home",
  },
  {
    id: 2,
    imgSrc: home.Ruminate,
    imgAlt: "Ruminate",
    icon: "🔒",
    title: "Offering qualified, real-life feedback across 16.5K venues",
    subtitle:
      "Developed onboarding experience to promote transparency and reliability of Ruminate as a food-feedback platform",
    category: ["Web Application", "Non-profit"],
    percentage: ["80%"],
    highlight: ["intuitive UI"],
    link: "/ruminate/home",
  },
  {
    id: 3,
    imgSrc: home.KBlock,
    imgAlt: "K-Block",
    icon: "",
    title: "Reaching brand awareness by 15%",
    subtitle: "Low effort solution to deepen users' trust on NFT inspection",
    category: ["Web Application", "Blockchain", "NFT Explorer"],
    percentage: ["15s", "80%"],
    highlight: ["to scan everything", "thumbs-up for aesthetic UI"],
    link: "/kblock/k-block",
  },
];

export default function Home() {
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header className="lg:my-24 mx-auto px-5 md:px-0 lg:w-[80vw] w-11/12 mt-20 mb-82 2xl:my-28">
        <div className="p-10">
          <h1 className="md:text-5xl text-2xl md:py-5 text-blue-500 font-bold">
            John Jang
          </h1>
          <div className="md:mb-0">
            <div className="md:text-5xl text-2xl text-blue-500 font-bold">
              <p>Web Designer & UX Engineer</p>
            </div>
            <div className="space-y-5 md:my-5">
              <p className="md:text-2xl text-lg font-semibold">
                A curious-minded data-lover with a drive for elegance and
                simplicity
              </p>
              <p>
                I deliver meaningful results with inspiring designs that
                consider the business goals, the user needs, and the technical
                feasibility.
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className="md:my-20 my-10 md:mx-36">
        <div className="space-y-10">
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                router.push({
                  pathname: item.link,
                  query: { fromId: item.id },
                })
              }
              className={`rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer space-y-3 p-2 w-full hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] ${
                theme === "light" ? "bg-[#d3d2d2]" : ""
              }`}
            >
              <div className="p-3 rounded-xl bg-[#f6f6f6]">
                <Image
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  className={`rounded-xl mx-auto ${
                    item.id === 1 || item.id === 2
                      ? "h-[75vh] object-cover object-top"
                      : ""
                  }`}
                  width={1200}
                />
              </div>
              <div
                className={`${
                  theme === "light" ? "bg-white" : "border-white border-2"
                } rounded-xl p-2`}
              >
                <div className="p-2">
                  <p className="font-bold">
                    {item?.icon} {item.title}
                  </p>
                  <p className="font-normal">{item.subtitle}</p>
                </div>
                <div className="md:space-x-5 space-x-1 hidden md:flex">
                  {item.category.map((category, index) => (
                    <span
                      key={index}
                      className="bg-slate-400 rounded-lg md:px-2 px-1 py-1 text-white text-xs md:text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="md:grid grid-cols-2 text-center py-3 hidden">
                  {item.percentage?.map((percentage, index) => (
                    <span key={index} className="md:text-2xl text-lg">
                      {percentage}
                    </span>
                  ))}
                </div>
                <div className="md:grid grid-cols-2 text-center hidden">
                  {item.highlight?.map((highlight, index) => (
                    <span key={index}>{highlight}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
