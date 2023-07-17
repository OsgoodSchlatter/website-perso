import { HeaderPost } from "../../../Single/HeaderPost";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { useState } from "react";
import classNames from "classnames";

type ArrayItem = [string, number, string];

const OOM = ({ postID }: { postID: string }) => {
  const initialArray: ArrayItem[] = [
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
  const [myArray, setMyArray] = useState<ArrayItem[]>(initialArray);
  const [sortOrder, setSortOrder] = useState<
    "ascending" | "descending" | "asc2" | "desc2"
  >("ascending");

  const handleSort = () => {
    const sortedArray = [...myArray].sort((a, b) => {
      if (sortOrder === "ascending") {
        return a[1] - b[1];
      } else {
        return b[1] - a[1];
      }
    });

    setMyArray(sortedArray);
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
  };
  const handleSortName = () => {
    const sortedArray = [...myArray].sort((a, b) => {
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

    setMyArray(sortedArray);
    setSortOrder(sortOrder === "asc2" ? "desc2" : "asc2");
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className="max-w-4xl">
          <HeaderPost
            name={"Order of magnitudes"}
            date={"17/07/2023"}
            back={`/climate/`}
          />
          <div className="my-20 justify-center">
            <div className="font-bold text-1xl underline mb-4">
              table 1: Carbon intensity of electricity production (gC02eq/kWh)
              (2023)
            </div>
            <div className="grid grid-cols-8 gap-2">
              <div className="font-bold text-1xl text-center col-start-1 col-end-3 cold-span-2">
                Origin{" "}
                <button onClick={handleSortName}>
                  {sortOrder === "asc2" ? "▲" : "▼"}
                </button>
              </div>
              <div className="font-bold text-1xl col-start-3 col-end-4 col-span-1 text-center">
                kgCO2eq{" "}
                <button onClick={handleSort}>
                  {sortOrder === "ascending" ? "▲" : "▼"}
                </button>
              </div>
              <div className="font-bold text-1xl text-center col-start-5 cold-end-9 col-span-3">
                Comment
              </div>
            </div>
            {myArray.map(([text1, number1, text2], index) => (
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
                      : "text-black-400"
                  )}
                >
                  {number1}
                </div>

                <div className="text-center col-start-5 cold-end-9 col-span-3">
                  {text2}
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
