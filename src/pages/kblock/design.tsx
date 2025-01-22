import React from "react";
import Image from "next/image";
import { Kblock } from "../../../public/utils/k-block";

export default function Design() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <p className="font-semibold md:text-xl">Translating Designs</p>
        <div className="py-5 space-y-3 md:px-8">
          <ul className="space-y-3 md:px-8">
            <li className="font-bold">Visuals</li>
            <p>
              A spectrum of blue colors was chosen as the primary color because
              blue is typically associated with trust, loyalty, and commitment.
            </p>
            <Image
              src={Kblock.Visuals}
              alt="Visuals"
              width={1200}
              className="rounded-2xl"
            />
            <Image
              src={Kblock.Label}
              alt="Label"
              width={1200}
              className="rounded-2xl"
            />
          </ul>
          {/*  */}
          <ul className="space-y-3 md:px-8 py-10">
            <p>Green was used to indicate the rise in the market.</p>
            <Image
              src={Kblock.Green}
              alt="Greens"
              width={280}
              className="rounded-2xl"
            />
            <Image
              src={Kblock.GLabel}
              alt="Green label"
              width={280}
              className="rounded-2xl"
            />
            <Image
              src={Kblock.Rise}
              alt="Rise"
              width={1200}
              className="rounded-2xl"
            />
          </ul>
          {/*  */}
          <ul className="space-y-3 md:px-8">
            <p>
              Inter is one of the most common fonts that is used in the industry
              today. I worked with the design team and created a typography
              hierarchy depending on the title, the body, or indicators.
            </p>
            <Image
              src={Kblock.Inter}
              alt="Inter"
              width={1200}
              className="rounded-2xl"
            />
            <Image
              src={Kblock.Typography}
              alt="Typography"
              width={1200}
              className="rounded-2xl"
            />
          </ul>
          {/*  */}
          <ul className="space-y-3 md:px-8 py-10">
            <p>
              Along with the designers, I considered the spacing of 4 pixels for
              every indicator. I considered the responsiveness of the elements,
              too.
            </p>
            <Image
              src={Kblock.Spacing}
              alt="Spacing"
              width={1200}
              className="rounded-2xl bg-white p-2"
            />
            <Image
              src={Kblock.SpacingExample}
              alt="Spacing"
              width={1200}
              className="rounded-2xl bg-white p-2"
            />
          </ul>
          {/*  */}
          <ul className="space-y-3 md:px-8 py-10">
            <p>
              After all the above steps were completed, I created specific
              design annotation notes for the process of development.
            </p>
            <Image
              src={Kblock.Annotation}
              alt="Annotation"
              width={1200}
              className="rounded-2xl"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
