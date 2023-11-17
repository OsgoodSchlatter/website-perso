import { HeaderCategory } from "../../../Single/HeaderCategory";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import React from "react";
import "katex/dist/katex.min.css";

const UO2 = <Latex>{"$UO_2$"}</Latex>;
const CO2 = <Latex>{"$CO_2$"}</Latex>;
const D2O = <Latex>{"$D_2O$"}</Latex>;
const H2O = <Latex>{"$H_2O$"}</Latex>;
const H2O_b = <Latex>{"$H_2O$ (boiling)"}</Latex>;
const U3Si2 = <Latex>{"$U_3Si_2$ "}</Latex>;




type ArrayItem = [
    string | JSX.Element,
    string | JSX.Element,
    string | JSX.Element,
    string | JSX.Element,
    string | JSX.Element,
];

const fuelData: ArrayItem[] = [
    [
        "U (Metal)",
        "0.72 (nat)",
        "Graphite",
        CO2,
        "AGR,UNGG",
    ],
    [
        UO2,
        "0.72 (nat)",
        "Graphite",
        CO2,
        "HTR",
    ],
    [
        UO2,
        "0.72 (nat)",
        D2O,
        D2O,
        "CANDU",
    ],
    [
        UO2,
        "3-4%",
        H2O,
        H2O,
        "PWR",
    ],
    [
        UO2,
        "2%",
        "Graphite",
        H2O_b,
        "RBMK",
    ],
    [
        UO2,
        "3%",
        H2O,
        H2O_b,
        "BWR",
    ],
    [
        U3Si2,
        "20%",
        H2O,
        H2O,
        "OSIRIS",
    ],
    [
        "U (metal)",
        "90%",
        H2O,
        H2O,
        "ORPHEE",
    ],
    [
        "UO2 and PuO2",
        "15%",
        " /",
        "Sodium",
        "SFR",
    ],
];

const Neutronics = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center m-2">
                <div className="w-full sm:w-2/3 md:w-2/3 lg:max-w-4xl xl:max-w-5xl mx-4">
                    <HeaderCategory
                        name={"Neutronics"}
                        date={"16/10/2023"}
                        back={`/physics/`}
                    />
                    <div className="my-20 justify-center">
                        <div className="font-bold text-xl mb-3 underline">Fuel management</div>
                        <div className="overflow-x-auto">
                            <div className="grid grid-cols-14 gap-2 ">
                                <div className="font-bold text-1xl text-center w-28 col-start-1 col-end-3 col-span-2 ">
                                    Fuel{" "}
                                </div>
                                <div className="font-bold text-1xl text-center w-28  col-start-3 col-end-5 col-span-2">
                                    Enrichment
                                </div>
                                <div className="font-bold text-1xl text-center w-20 col-start-5 col-end-7 col-span-2">
                                    Moderator
                                </div>
                                <div className="font-bold text-1xl text-center w-20 col-start-7 col-end-9 col-span-2">
                                    Collant
                                </div>
                                <div className="font-bold text-1xl text-center w-20 col-start-9 col-end-10 col-span-1">
                                    System
                                </div>

                            </div>
                            {fuelData.map(
                                (
                                    [text1, text2, text3, text4, text5],
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

export default Neutronics;
