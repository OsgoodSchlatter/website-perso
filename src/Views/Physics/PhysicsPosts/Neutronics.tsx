import { HeaderCategory } from "../../../Single/HeaderCategory";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import Tooltip2 from "../../../Single/Tooltip_chatgpt"
import React from "react";

const UO2 = <Latex>{"$UO_2$"}</Latex>;
const CO2 = <Latex>{"$CO_2$"}</Latex>;
const D2O = <Latex>{"$D_2O$"}</Latex>;
const H2O = <Latex>{"$H_2O$"}</Latex>;
const H2O_b = <Latex>{"$H_2O$ (boiling)"}</Latex>;
const U3Si2 = <Latex>{"$U_3Si_2$ "}</Latex>;

export type Content_Tooltip = { content: string | JSX.Element, tooltip: string }

const fuelData: Content_Tooltip[][] = [
    [
        { content: "U (Metal)", tooltip: "Uranium alloys that have been used include uranium aluminum, uranium zirconium, uranium silicon" },
        { content: "0.72 (nat)", tooltip: "" },
        { content: "Graphite", tooltip: "Graphite" },
        { content: CO2, tooltip: "Carbon dioxyde" },
        { content: "AGR,UNGG", tooltip: "Advanced cooled gas reactor" },
    ],
    [
        { content: UO2, tooltip: "Dioxyde d'uranium" },
        { content: "0.72 (nat)", tooltip: "" },
        { content: "Graphite", tooltip: "graphite" },
        { content: "CO2", tooltip: "Carbon Dioxyde" },
        { content: "HTR", tooltip: "High temperature reactor" },
    ],
    [
        { content: UO2, tooltip: "Dioxyde d'uranium" },
        { content: "0.72 (nat)", tooltip: "" },
        { content: D2O, tooltip: "Deuterium oxyde, heavy water" },
        { content: D2O, tooltip: "Deuterium oxyde, heavy water" },
        { content: "CANDU", tooltip: "The CANDU (Canada Deuterium Uranium) is a Canadian pressurized heavy-water reactor design used to generate electric power" },
    ],
    [
        { content: UO2, tooltip: "Dioxyde d'uranium" },
        { content: "3-4%", tooltip: "" },
        { content: H2O, tooltip: "water" },
        { content: H2O, tooltip: "water" },
        { content: "PWR", tooltip: "Pressurized water reactor" },
    ],
    [
        { content: UO2, tooltip: "Dioxyde d'uranium" },
        { content: "2%", tooltip: "" },
        { content: "Graphite", tooltip: "Graphite" },
        { content: H2O_b, tooltip: "boiling water" },
        { content: "RBMK", tooltip: "Reaktor Bolshoy Moshchnosti Kanalny" },
    ],
    [
        { content: UO2, tooltip: "Dioxyde d'uranium" },
        { content: "3%", tooltip: "" },
        { content: H2O, tooltip: "water" },
        { content: H2O_b, tooltip: "boiling water" },
        { content: "BWR", tooltip: "Boiling water reactor" },
    ],
    [
        { content: U3Si2, tooltip: "Uranium disilicide" },
        { content: "20%", tooltip: "tooltip" },
        { content: H2O, tooltip: "water" },
        { content: H2O, tooltip: "water" },
        { content: "OSIRIS", tooltip: "Osiris was a research nuclear reactor of the CEA" },
    ],
    [
        { content: "U (metal)", tooltip: "Uranium alloys that have been used include uranium aluminum, uranium zirconium, uranium silicon" },
        { content: "90%", tooltip: "" },
        { content: H2O, tooltip: "Water" },
        { content: H2O, tooltip: "Water" },
        { content: "ORPHEE", tooltip: "Orphée was a research nuclear reactor of the CEA" },

    ],
    [
        { content: "UO2 and PuO2", tooltip: "Mixed oxide fuel" },
        { content: "15%", tooltip: "" },
        { content: "/", tooltip: "" },
        { content: "Na", tooltip: "Sodium" },
        { content: "SFR", tooltip: "Sodium-cooled fast reactor" },
    ],
];


const Neutronics = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center m-2">
                <div className="w-full sm:w-2/3 md:w-2/3 lg:max-w-4xl xl:max-w-5xl mx-4">
                    <HeaderCategory
                        name={"Neutronics"}
                        date={"16/11/2023"}
                        back={`/physics/`}
                    />
                    <div className="my-20 justify-center">
                        <div className="font-bold text-xl mb-3 underline">Fuel management</div>
                        <div className="overflow-x-auto">
                            <div className="grid grid-cols-14 gap-2 ">
                                <div className="font-bold text-1xl text-center w-25 col-start-1 col-end-3 col-span-2 ">
                                    Fuel{" "}
                                </div>
                                <div className="font-bold text-1xl text-center w-25  col-start-3 col-end-5 col-span-2">
                                    Enrichment
                                </div>
                                <div className="font-bold text-1xl text-center w-25 col-start-5 col-end-7 col-span-2">
                                    Moderator
                                </div>
                                <div className="font-bold text-1xl text-center w-25 col-start-7 col-end-9 col-span-2">
                                    Collant
                                </div>
                                <div className="font-bold text-1xl text-center w-22 col-start-9 col-end-12 col-span-1">
                                    System
                                </div>

                            </div>
                            <div className="grid grid-cols-14 gap-2">
                                {fuelData.map((data, index) => (
                                    <React.Fragment key={index}>
                                        {data.map((item, itemIndex) => (
                                            <div
                                                className={`text-1xl text-center w-28 col-start-${1 + 2 * itemIndex} col-end-${3 + 2 * itemIndex} col-span-2`}
                                                key={itemIndex}
                                            >
                                                <Tooltip2 text={item.tooltip}>{item.content}</Tooltip2>
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Neutronics;
