import { Position } from "@react-pdf-viewer/core";
import { map } from "d3";
import { useState } from "react";
import { HeaderCategory } from "../../../Single/HeaderCategory";

export const Scales = ({ title, date }: { title: string, date: string }) => {

    const [chosenNote, setchosenNote] = useState("A");
    const [chosenMode, setchosenMode] = useState("major");


    const notes = ["empty", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    const stringToNote = { "E": 64, "A": 48, "D": 32, "G": 16, "B": 8, "e": 0 };
    const guitarNeck = [];
    const circles = [34, 36, 38, 40];
    const circles2 = [45, 47];
    const doubleCircles = [11, 59];
    const minor = [0, 2, 1, 2, 2, 1, 2, 2];
    const major = [0, 2, 2, 1, 2, 2, 2, 1];

    const modes: { [key: string]: number[] } = { "major": major, "minor": minor };
    const selectedMode = modes[chosenMode] as number[];

    const scales = [
        { "note name": "A", "position": [5, 12, 7, 2, 10, 5] },
        { "note name": "A#", "position": [6, 1, 8, 3, 11, 6] },
    ];

    const generateSequence = (mode: number[], position: number[]) => {
        const sequence = [];

        for (let positionIndex = 0; positionIndex < position.length; positionIndex++) {
            let current = position[positionIndex];
            for (let seq = 0; seq < minor.length; seq++) {
                current += mode[seq]
                sequence.push((current) + 16 * positionIndex);
            }
        }

        return sequence;
    };

    const selectedPosition = scales.find(scale => scale["note name"] === chosenNote);

    const selectedSequence = generateSequence(selectedMode, selectedPosition?.position ?? []);

    for (let index = 0; index < 8 * 5; index++) {
        guitarNeck.push(
            <div key={index} className="relative  text-center lg:w-32">
                {
                    circles.includes(2 * index) ?
                        <div className="absolute top-1/2 transform ml-[23px] -translate-y-1/2 w-4 h-4 bg-slate-500 rounded-full" /> : null
                }
                {
                    doubleCircles.includes(2 * index + 1) ?
                        <div className="absolute top-full left-1/2 w-4 h-4 bg-slate-500 rounded-full transform -translate-x-1/2 mt-[-6px] z-10" />
                        : null
                }
                {
                    circles2.includes(2 * index + 1) ?
                        <div className="absolute top-1/2 transform ml-[23px] -translate-y-1/2 w-4 h-4 bg-slate-500 rounded-full" />
                        : null
                }
                {
                    selectedSequence.includes((2 * index)) && chosenNote !== "empty" ? <div className="absolute top-1/2 transform ml-[23px] -translate-y-1/2 w-4 h-6 bg-red-500 text-black rounded-full" >A</div> : null
                }
                {
                    selectedSequence.includes((2 * index) + 1) && chosenNote !== "empty" ? <div className="absolute top-1/2 transform ml-[23px] -translate-y-1/2 w-4 h-6 bg-red-500 text-black rounded-full" >B</div> : null
                }

                <div className="grid grid-flow-row-dense grid-cols-2 gap-x-1 gap-y-1">
                    <div className=" bg-slate-200 text-slate-400">{2 * index}</div>
                    <div className=" bg-slate-200 text-slate-400">{2 * index + 1}</div>
                </div>
            </div >
        );
    }
    return (
        <>
            <div className="flex justify-center ">
                <div className="w-fit">
                    <HeaderCategory
                        name={title}
                        date={date}
                        back={`/guitar/`}
                    />
                    <div className="p-4 my-20 justify-center">
                        <select
                            className="p-2 rounded-md border border-transparent bg-slate-100 mb-2"
                            onChange={(e) => setchosenNote(e.target.value)}
                        >
                            {notes.map((note) => {
                                return <option key={note} value={note}> {note}</option>;
                            })}
                        </select>
                        <select
                            className="p-2 rounded-md border border-transparent bg-slate-100 mb-2 ml-2"
                            onChange={(e) => setchosenMode(e.target.value)}
                        >
                            {Object.keys(modes).map((mode) => {
                                return <option key={mode} value={mode}> {mode}</option>;
                            })}
                        </select>
                        <div onClick={() => (console.log(selectedSequence))}>
                            WORK IN PROGRESS
                        </div>
                        <div className="overflow-x-auto">
                            <div className="grid grid-flow-row-dense grid-cols-8 grid-rows-5 gap-x-1 gap-y-1">
                                {guitarNeck}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

