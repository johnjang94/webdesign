import React from "react";

export default function Opportunity() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold md:text-xl">Opportunity</p>
          <p className="text-center font-medium py-10">
            What did we decide to provide the market?
          </p>
          <div className="py-5 md:px-8">
            <ul className="space-y-3">
              <li className="font-semibold">clear and simple guidance</li>
              <p className="md:mx-8">
                pop-up tips were added to explain what each part does to make
                the platform beginner-friendly
              </p>
              <li className="font-semibold">
                detailed information on each NFT
              </li>
              <p className="md:mx-8">
                every NFT icon leads into detailed page that explains all the
                information about the particular NFT
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
