import Image from "next/image";
import { Kblock } from "../../../public/utils/k-block";

export default function Research() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <p className="font-semibold md:text-xl">Research</p>
        <div className="py-5 space-y-3 md:px-8">
          <p>
            According to the market analysis, there are many types of digital
            assets that the public can trade today. Among them, NFT is projected
            to grow fastest.
          </p>
          <Image
            src={Kblock.Assets}
            alt="Digital Assets"
            className="rounded-xl mx-auto w-full"
            layout="responsive"
            width={1200}
          />
        </div>
        {/*  */}
        <p>
          According to market analysis and user interviews, I learned the
          following facts:
        </p>
        <ul className="py-3 mx-8 space-y-3">
          <li>
            most of the existing NFT applications are friendly to experienced
            traders
          </li>
          <li>most common reasons to use NFT web application is</li>
          <li className="md:mx-5">A&#41; to explore NFTs</li>
          <li className="md:mx-5">B&#41; to evaluate rarity of each NFT</li>
          <li className="md:mx-5">C&#41; to look up certain NFT properties</li>
        </ul>
      </div>
    </div>
  );
}
