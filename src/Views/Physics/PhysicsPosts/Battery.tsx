import { HeaderCategory } from "../../../Single/HeaderCategory";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import React from "react";
import "katex/dist/katex.min.css";

import "katex/dist/katex.min.css";

type ArrayItem = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

const batteryData: ArrayItem[] = [
  [
    "LCO",
    "Li Co Oxide",
    "Graphite",
    "3,6V",
    "Medium",
    "500Wh/L",
    "Short",
    "Up to 3C",
  ],
  [
    "LFP",
    "Li Fe Phosphate",
    "Graphite",
    "3,2V",
    "Low",
    "180Wh/L",
    "Medium",
    "Up to 25C",
  ],
  [
    "Li-NCA",
    "Li Ni Co Alumine",
    "Graphite",
    "3,6V",
    "Low",
    "500Wh/L",
    "Short",
    "Up to 3C",
  ],
  [
    "Li-NMC",
    "Li Ni Mn Co",
    "Graphite",
    "3,7V",
    "Medium",
    "500Wh/L",
    "Medium",
    "Up to 3C",
  ],
  [
    "LTO",
    "Ni Co Alumine",
    "Li Ti Oxide",
    "2.4V",
    "High",
    "120Wh/L",
    "Long",
    "Up to 10C",
  ],
];

const Battery = ({ postID }: { postID: string }) => {
  return (
    <>
      <div className="flex justify-center m-2">
        <div className="w-full sm:w-2/3 md:w-2/3 lg:max-w-4xl xl:max-w-5xl mx-4">
          <HeaderCategory
            name={"Battery"}
            date={"16/10/2023"}
            back={`/physics/`}
          />
          <div className="my-20 justify-center">
            <div className="font-bold text-xl mb-3 underline">Battery: Lithium-ion technologies</div>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-14 gap-2 ">
                <div className="font-bold text-1xl text-center w-28 col-start-1 col-end-3 col-span-2 ">
                  Battery type{" "}
                </div>
                <div className="font-bold text-1xl text-center w-28  col-start-3 col-end-5 col-span-2">
                  Cathode
                </div>
                <div className="font-bold text-1xl text-center w-20 col-start-5 col-end-7 col-span-2">
                  Anode
                </div>
                <div className="font-bold text-1xl text-center w-20 col-start-7 col-end-9 col-span-2">
                  Cell Voltage
                </div>
                <div className="font-bold text-1xl text-center w-20 col-start-9 col-end-10 col-span-1">
                  Cost
                </div>
                <div className="font-bold text-1xl text-center w-20 col-start-10 col-end-11 col-span-1">
                  Energy density
                </div>
                <div className="font-bold text-1xl text-center w-20 col-start-11 col-end-12 col-span-1">
                  Cycle life
                </div>
                <div className="font-bold text-1xl text-center w-20 col-start-12 col-end-14 col-span-2">
                  Discharge Rate
                </div>
              </div>
              {batteryData.map(
                (
                  [text1, text2, text3, text4, text5, text6, text7, text8],
                  index
                ) => (
                  <div className="grid grid-cols-14 gap-2" key={index}>
                    <div className=" text-1xl text-center w-28 col-start-1 col-end-3 col-span-2 ">
                      {text1}
                    </div>
                    <div className=" text-1xl text-center w-28  col-start-3 col-end-5 col-span-2">
                      {text2}
                    </div>
                    <div className=" text-1xl text-center w-20 col-start-5 col-end-7 col-span-2">
                      {text3}
                    </div>
                    <div className=" text-1xl text-center w-20 col-start-7 col-end-9 col-span-2">
                      {text4}
                    </div>
                    <div className=" text-1xl text-center w-20 col-start-9 col-end-10 col-span-1">
                      {text5}
                    </div>
                    <div className=" text-1xl text-center w-20 col-start-10 col-end-11 col-span-1">
                      {text6}
                    </div>
                    <div className=" text-1xl text-center w-20 col-start-11 col-end-12 col-span-1">
                      {text7}
                    </div>
                    <div className=" text-1xl text-center w-20 col-start-12 col-end-14 col-span-2">
                      {text8}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Battery;
