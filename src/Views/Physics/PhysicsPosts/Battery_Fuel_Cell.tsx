import { HeaderCategory } from "../../../Single/HeaderCategory";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { Tableau } from "../../../Single/Tableau";
import pem from "./pem.png"
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
const H2 = <Latex>{"$H_2$"}</Latex>;
const O2 = <Latex>{"$O_2$"}</Latex>;

const Li2CO3 = <Latex>{"$Li_2CO_3$"}</Latex>;
const K2CO3 = <Latex>{"$K_2CO_3$"}</Latex>;
const Na2CO3 = <Latex>{"$Na_2CO_3$"}</Latex>;
const Zr02 = <Latex>{"$ZrO_2$"}</Latex>;
const Y2O3 = <Latex>{"$Y_2O_3$"}</Latex>;
const CO2 = <Latex>{"$CO_2$"}</Latex>;
const CH4 = <Latex>{"$CH_4$"}</Latex>;

const reaction = <Latex>{"$2H_2 + O_2 \\rightarrow 2H_2O + heat + electrical \\ energy $"}</Latex>;

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

const Battery_Fuel_Cell = () => {
  return (
    <>
      <div className="flex justify-center m-2">
        <div className="w-full sm:w-2/3 md:w-2/3 lg:max-w-4xl xl:max-w-5xl mx-4">
          <HeaderCategory
            name={"Battery and Fuel Cell"}
            date={"16/10/2023"}
            back={`/physics/`}
          />
          <Tableau content={fuelCellData} headers={["Type", "Electrolyte", "Temp°C", "Fuel", "Efficiency", "Power", "Maturity"]} title={"Main H2 fuel cell technologies"} />
          <Tableau content={batteryData} headers={["Battery type", "Cathode", "Anode", "Cell Voltage", "Cost", "Energy Density", "Cycle Life", "Discharge Rate"]} title={"Battery: Lithium-ion technologies"} />
          <div className="font-bold text-xl mb-3 underline">Hydrogen today: </div>
          <div className="font-bold text-l ">Data</div>
          <div className="mt-1 flex"> World production: <div className="font-bold px-1">75 Mt</div></div>
          <div className="mt-1 flex"> % produced by reforming of fossil fuel: <div className="font-bold px-1">95 %</div></div>
          <div className="mt-1 flex"> Energy equivalent of the <div className="px-1"> {H2} </div> production: <div className="font-bold px-1">0.2 Gtoe/year</div>. For oil: <div className="font-bold px-1">4.4 Gt/year</div></div>
          <div className="mt-1 flex"> World primary energy consumption: <div className="font-bold px-1">14,5 Gtoe/year</div></div>
          <div className="font-bold text-l mt-2">Main current utilization of {H2}</div>
          <div className="mt-1 flex"> Oil refining: <div className="font-bold px-1">44%</div></div>
          <div className="mt-1 flex"> Ammonia for fertilizers: <div className="font-bold px-1">38%</div></div>
          <div className="mt-1 flex"> Food industry: <div className="font-bold px-1">9%</div></div>
          <div className="mt-1 flex"> Methanol, chemicals: <div className="font-bold px-1">8%</div></div>
          <div className="mt-1 flex"> Space propulsion: <div className="font-bold px-1">1%</div></div>





          <div className="font-bold text-xl mb-3 underline">Proton Exchange Membrane </div>
          <div className="mt-2"> A proton exchange membrane is a semipermeable membrane designed to let protons go through but block reactants (for example {H2} and {O2}). It can be used as a fuel cell following this reaction: {reaction} </div>
          <div className="mt-4">
            <img src={pem} className="px-2 border-b-2" width="200" alt="Image" />
            <div className="text-sm">source: wikipédia</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Battery_Fuel_Cell;
