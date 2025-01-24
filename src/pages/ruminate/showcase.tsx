import Image from "next/image";
import { FaLongArrowAltDown } from "react-icons/fa";
import { ruminate } from "../../../public/utils/ruminate";

export default function Solutions({ isLocked }: { isLocked: boolean }) {
  return (
    <div>
      {isLocked ? (
        <div className="space-y-3 py-20" id="product-showcase">
          <h1 className="font-semibold md:text-3xl text-center">
            Product Showcase
          </h1>
          <div>
            <button
              onClick={() =>
                window.open(
                  "https://ruminate-frontend.netlify.app/",
                  "_blank",
                  "noopener noreferrer"
                )
              }
              className="focus:outline-none space-y-3"
            >
              <div className="flex items-center justify-center">
                <p>
                  Check out the live demo: Receive the new Feedback in action!{" "}
                </p>
                <FaLongArrowAltDown />
              </div>
              <div className="p-3 bg-white rounded-2xl md:ml-12">
                <Image
                  src={ruminate.Ruminate}
                  alt="Demo showcase of Ruminate"
                  className="rounded-xl mx-auto hover:cursor-pointer hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] h-96 object-cover object-top"
                  width={800}
                  height={450}
                  priority
                />
              </div>
            </button>
          </div>
        </div>
      ) : (
        // Show everything when unlocked
        <div className="md:mx-20 my-3 space-y-5">
          <p className="font-semibold md:text-xl">Solutions</p>
          <div className="space-y-10">
            <div className="space-y-3">
              <p className="md:mx-16">
                <span className="font-bold">Home page</span> contains
                information on the most traded NFT, amount of transactions,
                transaction history, number of active miners, etc.
              </p>
              <div className="p-2 bg-white rounded-2xl">
                {/* <Image
                  src={Kblock.KBlock}
                  alt="K-Block"
                  width={1200}
                  className="rounded-2xl"
                /> */}
              </div>
            </div>
            <div className="space-y-3">
              <p className="md:mx-16">
                <span className="font-bold">NFT Dashboard</span> contains
                information on the total amount of collected NFTs by users in
                the public.
              </p>
              <div className="p-2 bg-white rounded-2xl">
                {/* <Image
                  src={Kblock.NFTDashboard}
                  alt="K-Block"
                  width={1200}
                  className="rounded-2xl"
                /> */}
              </div>
            </div>
          </div>
          <div className="space-y-3 py-20" id="product-showcase">
            <h1 className="font-semibold md:text-3xl text-center">
              Product Showcase
            </h1>
            <div>
              <button
                onClick={() =>
                  window.open(
                    "https://ruminate-frontend.netlify.app/",
                    "_blank",
                    "noopener noreferrer"
                  )
                }
                className="focus:outline-none space-y-3"
              >
                <div className="flex items-center justify-center">
                  <p>
                    Check out the live demo: Receive the new Feedback in action!{" "}
                  </p>
                  <FaLongArrowAltDown />
                </div>
                <div className="p-3 bg-white rounded-2xl">
                  <Image
                    src={ruminate.Ruminate}
                    alt="Demo showcase of Ruminate"
                    className="rounded-xl mx-auto hover:cursor-pointer hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]"
                    width={800}
                    height={450}
                    priority
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
