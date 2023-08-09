import { HeaderCategory } from "../../../Single/HeaderCategory";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { useState } from "react";
import "katex/dist/katex.min.css";
import classNames from "classnames";

type ArrayItem = [string, number, string];

type OOMProps = {
  postID: string;
  dataArray: ArrayItem[];
};

const OOM = ({ postID, dataArray }: OOMProps) => {
  const [myArray, setMyArray] = useState<ArrayItem[]>(dataArray);
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
      <div className="flex justify-center p-4">
        <div className="max-w-4xl">
          <HeaderCategory
            name={"Order of magnitudes"}
            date={"17/07/2023"}
            back={`/climate/`}
          />
          <div className="my-20 justify-center">
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
              <div className="font-bold text-1xl text-center col-start-1 col-end-3 cold-span-2">
                Origin{" "}
                <button onClick={handleSortName}>
                  {sortOrder === "asc2" ? "▲" : "▼"}
                </button>
              </div>

              <div className="font-bold text-1xl col-start-3 col-end-5 col-span-2 text-center">
                gC02eq/kWh{" "}
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
