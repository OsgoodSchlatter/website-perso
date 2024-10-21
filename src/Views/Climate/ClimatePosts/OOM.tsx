import { HeaderCategory } from "../../../Single/HeaderCategory";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { useState } from "react";
import "katex/dist/katex.min.css";
import classNames from "classnames";


type ElecArray = [string, number, string];
type GHGArray = [string, number, number, number];

const electricalArray: ElecArray[] = [
  ["France 🇫🇷", 80, "70% nuclear, 20% renewable, 10% carbon"],
  ["Germany 🇩🇪", 400, "40% carbon, 40% renewable,  20% others"],
  ["UK 🇬🇧", 250, "15% nuclear, 30% renewable, 40% gas"],
  ["Spain 🇪🇸", 200, "20% nuclear, 45% renewable, 30% carbon, 5% others"],
  ["Italy 🇮🇹", 400, "20% renewable, 50% carbon, 30% others"],
  ["Poland 🇵🇱", 900, "65% coal, 15% renewable, 20% others"],
  ["Switzerland 🇨🇭", 60, "30% nuclear, 40% renewable, almost no carbon"],
  ["Sweden 🇸🇪", 22, "20% nuclear, 60% renewable, 100% low-carbon"],
  ["Danemark 🇩🇰", 224, "15% carbon, 60% renewable, 25% others"],
  ["USA 🇺🇸", 400, "20% coal, 20% nuclear, 20% renewable, 40% gas"],
  ["China 🇨🇳 ", 600, "N/A"],
  ["India 🇮🇳 ", 600, "N/A"],
  ["Australia 🇦🇺", 500, "70% carbon, 30% renewable"],
  ["Japan 🇯🇵", 500, "45% carbon, 15% renewable, 5% nuclear, 35% N/A"],
];


const GHGArray: GHGArray[] = [
  ["Coal", 955, 11.8, 4.3],
  ["Oil", 818, 14.2, 4.0],
  ["Natural Gas", 430, -1, 0.3],
  ["Small Hydro", 9, 0.03, 0.07],
  ["Large Hydro", 7, 0.01, 0.01],
  ["Wind", 7, 0.06, 0.1],
  ["PV", 125, 0.2, 0.2],
  ["Solar heat", 30, 0.2, 0.1],
  ["Geothermal", 79, 0.02, 0.28],
  ["Nuclear", 12, -1, -1],
];

const OOM = ({ title, date }: { title: string, date: string }) => {
  const [myElecArray, setMyElecArray] = useState<ElecArray[]>(electricalArray);
  const [myGHGArray, setMyGHGArray] = useState<GHGArray[]>(GHGArray);


  const [sortOrder, setSortOrder] = useState<
    "ascending" | "descending" | "asc2" | "desc2"
  >("ascending");

  const [sortOrderGHG, setSortOrderGHG] = useState<
    "ascGHGCO2" | "descGHGCO2" | "ascNameGHGCO2" | "descNameGHGCO2"
  >("ascGHGCO2");


  const handleSortElec = () => {
    const sortedElecArray = [...myElecArray].sort((a, b) => {
      if (sortOrder === "ascending") {
        return a[1] - b[1];
      } else {
        return b[1] - a[1];
      }
    })
    setMyElecArray(sortedElecArray);
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
  };



  const handleSortElecName = () => {
    const sortedElecArray = [...myElecArray].sort((a, b) => {
      const nameA = a[0].toLowerCase();
      const nameB = b[0].toLowerCase();

      if (sortOrder === "asc2") {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      } else {
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      }
    });

    setMyElecArray(sortedElecArray);
    setSortOrder(sortOrder === "asc2" ? "desc2" : "asc2");
  };

  const handleSortGHG = (index: number) => {
    const sortedGHGArray = [...myGHGArray].sort((a, b) => {
      if (sortOrderGHG === "ascGHGCO2" && index >= 1) {
        return (a[index] as number) - (b[index] as number); // Use type assertion
      } else {
        return (b[index] as number) - (a[index] as number); // Use type assertion
      }
    });
    setMyGHGArray(sortedGHGArray);
    setSortOrderGHG(sortOrderGHG === "ascGHGCO2" ? "descGHGCO2" : "ascGHGCO2");
  };

  const handleSortGHGName = () => {
    const sortedGHGArray = [...myGHGArray].sort((a, b) => {
      const nameA = a[0].toLowerCase();
      const nameB = b[0].toLowerCase();

      if (sortOrderGHG === "ascNameGHGCO2") {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      } else {
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      }
    });

    setMyGHGArray(sortedGHGArray);
    setSortOrderGHG(sortOrderGHG === "ascNameGHGCO2" ? "descNameGHGCO2" : "ascNameGHGCO2");
  };

  return (
    <>
      <div className="flex justify-center p-4">
        <div className="max-w-4xl md:w-1/2">
          <div className="my-8 justify-center">
            <div className="font-bold text-2xl mb-4">
              Carbon intensity of electricity production (gC02eq/kWh) (2023)
            </div>
            <div className="text-l mb-4 underline">
              {" "}
              sources:{" "}
              <a href="https://app.electricitymaps.com/">
                electricity mapper
              </a>,{" "}
              <a href="https://ourworldindata.org/grapher/carbon-intensity-electricity">
                {" "}
                ourworldindata
              </a>
            </div>
            <div className="grid grid-cols-8 gap-2">
              <div className="font-bold text-1xl text-center col-start-1 col-end-3 cold-span-2 ">
                Origin{" "}
                <button onClick={handleSortElecName}>
                  {sortOrder === "asc2" ? "▲" : "▼"}
                </button>
              </div>

              <div className="font-bold text-1xl col-start-3 col-end-5 col-span-2 text-center">
                gC02eq/kWh{" "}
                <button onClick={handleSortElec}>
                  {sortOrder === "ascending" ? "▲" : "▼"}
                </button>
              </div>
              <div className="font-bold text-1xl text-center col-start-5 cold-end-9 col-span-3">
                Comment
              </div>
            </div>
            {myElecArray.map(([text1, number1, text2], index) => (
              <div className="grid grid-cols-8 gap-2" key={index}>
                <div className="text-left col-start-1 col-end-3 cold-span-2">
                  {text1}
                </div>
                <div
                  className={classNames(
                    "col-start-3 col-end-4 col-span-1 text-right",
                    number1 <= 100
                      ? "text-green-400 "
                      : number1 <= 300
                        ? "text-orange-400"
                        : number1 <= 700
                          ? "text-red-400"
                          : "-400"
                  )}
                >
                  {number1}
                </div>
                <div className="text-center col-start-5 cold-end-9 col-span-3">
                  {text2}
                </div>
              </div>
            ))}
            <div className="font-bold text-2xl mb-8 mt-8">
              Green House Gases (GHG) emissions of the main energy technologies (g/kWh)
            </div>
            <div className="grid grid-cols-8 gap-2 ">
              <div className="font-bold text-1xl text-center col-start-1 col-end-3 cold-span-2 ">
                Energy source{" "}
                <button onClick={handleSortGHGName}>
                  {sortOrderGHG === "ascNameGHGCO2" ? "▲" : "▼"}
                </button>
              </div>
              <div className="font-bold text-1xl col-start-3 col-end-5 col-span-2 text-center">
                <Latex>{"$CO^{}_2$"}</Latex>{" "}
                <button onClick={() => handleSortGHG(1)}>
                  {sortOrderGHG === "ascGHGCO2" ? "▲" : "▼"}
                </button>
              </div>
              <div className="font-bold text-1xl text-center col-start-5 cold-end-7 col-span-2">
                <Latex>{"$SO^{}_2$"}</Latex>
              </div>
              <div className="font-bold text-1xl text-center col-start-7 cold-end-9 col-span-2">
                <Latex>{"$NO^{}_x$"}</Latex>
              </div>
            </div>
            {myGHGArray.map(([text1, number1, number2, number3], index) => (
              <div className="grid grid-cols-8 gap-2" key={index}>
                <div className="text-center col-start-1 col-end-3 cold-span-2">
                  {text1}
                </div>

                <div
                  className={classNames(
                    "col-start-3 col-end-5 col-span-2 text-center",
                    number1 <= 100
                      ? "text-green-400 "
                      : number1 <= 300
                        ? "text-orange-400"
                        : number1 <= 700
                          ? "text-red-400"
                          : "-400"
                  )}
                >
                  {number1}
                </div>


                <div className={"col-start-5 col-end-7 col-span-2 text-center"}>
                  {number2}
                </div>
                <div className={"col-start-7 col-end-9 col-span-2 text-center"}>
                  {number3}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </>
  );
};

export default OOM;
