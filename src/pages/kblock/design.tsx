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
              In terms of color, a spectrum of blue colors was chosen as the
              primary color because blue is typically associated with trust,
              loyalty, and commitment. Besides the blue colors, red and green
              colors were used to indicate the price rise and fall.
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
            <div className="md: grid md:grid-cols-2 gap-20">
              <div>
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
              </div>
              <div>
                <Image
                  src={Kblock.Red}
                  alt="Red"
                  width={280}
                  className="rounded-2xl"
                />
                <Image
                  src={Kblock.RLabel}
                  alt="Red label"
                  width={280}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </ul>
          {/*  */}
          <ul className="space-y-3 md:px-8 py-10">
            <p>
              For font, Inter was chosen to follow the industry-standard and I
              created a detailed annotation note for the reference in the future
              development.
            </p>
            <Image
              src={Kblock.Inter}
              alt="Inter"
              width={1200}
              className="rounded-2xl"
            />
            <Image
              src={Kblock.Annotation}
              alt="Annotation"
              width={1200}
              className="rounded-2xl"
            />
          </ul>
        </div>
        <p className="font-semibold md:text-xl">Into Development Language</p>
        <p className="md:mx-16">
          I converted all the information listed above into computer-oriented
          language such as Next.js, React, and Tailwind CSS.
        </p>
        <Image
          src={Kblock.Development}
          alt="Development"
          width={1200}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
