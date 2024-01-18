import { HeaderCategory } from "../../../Single/HeaderCategory";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import React from "react";
import "katex/dist/katex.min.css";

import "katex/dist/katex.min.css";

const batteryData: (string)[][] = [
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

const H3PO4 = <Latex>{"$H_3PO_4$"}</Latex>;
const KOH = <Latex>{"$KOH$"}</Latex>;
const H2 = <Latex>{"$H2$"}</Latex>;
const Li2CO3 = <Latex>{"$Li_2CO_3$"}</Latex>;
const K2CO3 = <Latex>{"$K_2CO_3$"}</Latex>;
const Na2CO3 = <Latex>{"$Na_2CO_3$"}</Latex>;
const Zr02 = <Latex>{"$ZrO_2$"}</Latex>;
const Y2O3 = <Latex>{"$Y_2O_3$"}</Latex>;
const CO2 = <Latex>{"$CO_2$"}</Latex>;
const CH4 = <Latex>{"$CH_4$"}</Latex>;

const combinedLatex = [Li2CO3, K2CO3, Na2CO3];
const combinedLatex2 = [Zr02, Y2O3];
const combinedLatex3 = [H2, CO2, CH4];





const fuelCellData: (string | JSX.Element | JSX.Element[])[][] = [[
  "Alcaline",
  KOH,
  "50-200",
  "industrial H2",
  "65%",
  "10-100 kW",
  "Mature",
],
[
  "Phosphoric Acid",
  H3PO4,
  "180-220",
  H2,
  "35-40%",
  "10 MW",
  "Commercial",
],
[
  "Proton Exchange Membrane",
  "Solid polymer",
  "30-100",
  H2,
  "35-40%",
  "100 W - 500 kW",
  "Commercial",
],
[
  "Molten Carbonate",
  combinedLatex,
  "600-700",
  H2,
  "50-60%",
  "100 MW",
  "Development",
],
[
  "Solid Oxide",
  combinedLatex2,
  "800-1050",
  combinedLatex3,
  "50-65%",
  "100 MW",
  "Development",
]];



const Battery_Fuel_Cell = ({ postID }: { postID: string }) => {
  return (
    <>
      <div className="flex justify-center m-2">
        <div className="w-full sm:w-2/3 md:w-2/3 lg:max-w-4xl xl:max-w-5xl mx-4">
          <HeaderCategory
            name={"Battery and Fuel Cell"}
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
          <div className="my-20 justify-center">
            <div className="font-bold text-xl mb-3 underline">Main H2 fuel cell technology</div>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-14 gap-2 ">
                <div className="font-bold text-1xl text-center w-28 col-start-1 col-end-3 col-span-2 ">
                  Type of Fuel cell{" "}
                </div>
                <div className="font-bold text-1xl text-center w-28  col-start-3 col-end-5 col-span-2">
                  Electrolyte
                </div>
                <div className="font-bold text-1xl text-center w-20 col-start-5 col-end-7 col-span-2">
                  T°C
                </div>
                <div className="font-bold text-1xl text-center w-20 col-start-7 col-end-9 col-span-2">
                  Fuel
                </div>
                <div className="font-bold text-1xl text-center w-20 col-start-9 col-end-10 col-span-1">
                  Efficiency
                </div>
                <div className="font-bold text-1xl text-center w-20 col-start-10 col-end-11 col-span-1">
                  Applications
                </div>
                <div className="font-bold text-1xl text-center w-20 col-start-11 col-end-12 col-span-1">
                  Maturity
                </div>
              </div>
              {fuelCellData.map(
                (
                  [text1, text2, text3, text4, text5, text6, text7],
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

export default Battery_Fuel_Cell;
