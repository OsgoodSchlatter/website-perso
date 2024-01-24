import { Position } from "@react-pdf-viewer/core";
import { map, mode } from "d3";
import { useState } from "react";
import { start } from "repl";
import { HeaderCategory } from "../../../Single/HeaderCategory";

export const Scales = ({ title, date }: { title: string, date: string }) => {

    const [chosenNote, setchosenNote] = useState("A");
    const [chosenMode, setchosenMode] = useState("major");
    const [showNotes, setShowNotes] = useState(false);



    const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#"];
    const stringOfNote = ["E", "B", "G", "D", "A", "E"];

    function generateNoteFromString(startNote: string) {
        const startIndex = notes.indexOf(startNote);
        if (startIndex === -1) {
            // Handle the case where the startNote is not found in the notes array
            console.error("Invalid startNote:", startNote);
            return [];
        }

        // Generate the sequence of notes
        const sequence = [];
        for (let i = startIndex + 1; i < startIndex + 16; i++) {
            sequence.push(notes[i]);
        }
        return sequence;
    }

    function generateNoteFromScale(startNote: string) {
        const startIndex = notes.indexOf(startNote);
        if (startIndex === -1) {
            // Handle the case where the startNote is not found in the notes array
            console.error("Invalid startNote:", startNote);
            return [];
        }
        // Generate the sequence of notes
        const sequence = [];
        let cur = 0;
        for (let i = 0; i < minor.length; i++) {
            cur += selectedMode[i];
            sequence.push(notes[cur + startIndex]);
        }
        return sequence;
    }

    const guitarNeck = [];
    const noindex = [0, 16, 32, 48, 64];
    const circles = [34, 36, 38, 40, 46];
    const doubleCircles = [11, 59];
    const minor = [2, 1, 2, 2, 1, 2, 2];
    const major = [2, 2, 1, 2, 2, 2, 1];

    const modes: { [key: string]: number[] } = { "major": major, "minor": minor };
    const selectedMode = modes[chosenMode] as number[];

    const allGuitarNeckNotes = ([] as string[]).concat(
        ...stringOfNote.map((note) => generateNoteFromString(note))
    );

    for (let index = 0; index < 8 * 5; index++) {
        guitarNeck.push(
            <div key={index} className="relative  text-center w-32">
                {
                    circles.includes(2 * index) ?
                        <div className="absolute top-1/2 transform ml-[23px] -translate-y-1/2 w-4 h-4 bg-slate-500 rounded-full" /> : null
                }
                {
                    doubleCircles.includes(2 * index + 1) ?
                        <div className="absolute top-full w-4 h-4 bg-slate-500 transform ml-[88px] rounded-full transform ml-[10px] mt-[-6px] z-20" />
                        : null
                }


                <div className="grid grid-flow-row-dense grid-cols-2 gap-x-1 gap-y-1">

                    <div className="bg-slate-200 text-slate-400">{"."}</div>
                    <div className="bg-slate-200 text-slate-400">{"."}</div>
                </div>
                {showNotes ? (

                    <div className="absolute ml-4 top-full grid grid-flow-row-dense grid-cols-2 gap-x-10 gap-y-2 z-10" style={{ top: '-12px' }}>
                        <div className="text-slate-400 w-6 h-fit rounded-full bg-red-200 text-sm">{allGuitarNeckNotes[2 * index]}</div>
                        <div className="text-slate-400 w-6 h-fit rounded-full bg-red-200 text-sm">{allGuitarNeckNotes[2 * index + 1]}</div>
                    </div>

                ) : null}


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
                        <div className="flex">
                            <select
                                className="p-2 rounded-md border border-transparent bg-slate-100 hover:bg-slate-300 mb-2"
                                onChange={(e) => setchosenNote(e.target.value)}
                            >
                                {notes.map((note) => {
                                    return <option key={note} value={note}> {note}</option>;
                                })}
                            </select>
                            <select
                                className="p-2 rounded-md border border-transparent bg-slate-100 hover:bg-slate-300 mb-2 ml-2"
                                onChange={(e) => setchosenMode(e.target.value)}
                            >
                                {Object.keys(modes).map((mode) => {
                                    return <option key={mode} value={mode}> {mode}</option>;
                                })}
                            </select>
                            <div className="text-black mb-2 ml-2 p-2 flex hover:bg-slate-300 bg-slate-100 rounded-lg" onClick={() => setShowNotes(!showNotes)}>
                                Show notes
                            </div>

                        </div>
                        <div className="overflow-x-auto">
                            <div className="mt-4 grid grid-flow-row-dense grid-cols-8 grid-rows-5 gap-x-1 gap-y-1">
                                {guitarNeck}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

