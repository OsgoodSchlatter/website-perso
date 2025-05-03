import { useState } from "react";
import { StandardHeader } from "../../Single/StandardHeader";

const MusicUtilsContent = () => {
    const [chosenNote, setchosenNote] = useState("A");
    const [chosenMode, setchosenMode] = useState("major");
    const [showNotes, setShowNotes] = useState(false);

    const allNotes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    const stringTunings = ["E", "B", "G", "D", "A", "E"];

    const scales: { [key: string]: number[] } = {
        major: [2, 2, 1, 2, 2, 2, 1],
        minor: [2, 1, 2, 2, 1, 2, 2],
    };

    function getScaleNotes(root: string, mode: string) {
        const pattern = scales[mode];
        const startIndex = allNotes.indexOf(root);
        if (startIndex === -1) return [];

        const scale = [allNotes[startIndex]];
        let current = startIndex;
        for (let interval of pattern) {
            current = (current + interval) % allNotes.length;
            scale.push(allNotes[current]);
        }
        return scale;
    }

    function generateFretboard() {
        const scaleNotes = getScaleNotes(chosenNote, chosenMode);
        const frets = 16;
        return stringTunings.map((openNote) => {
            const stringNotes = [];
            const startIdx = allNotes.indexOf(openNote);
            for (let fret = 0; fret < frets; fret++) {
                const note = allNotes[(startIdx + fret) % allNotes.length];
                stringNotes.push(note);
            }
            return stringNotes;
        });
    }

    const fretboard = generateFretboard();

    return (
        <div className="flex justify-center">
            <div className="w-full">
                <div className="flex">
                    <select
                        className="p-2 rounded-md border border-transparent bg-slate-100 hover:bg-slate-300 mb-2 text-black"
                        onChange={(e) => setchosenNote(e.target.value)}
                        value={chosenNote}
                    >
                        {allNotes.map((note) => (
                            <option key={note} value={note}>{note}</option>
                        ))}
                    </select>
                    <select
                        className="p-2 rounded-md border border-transparent bg-slate-100 hover:bg-slate-300 mb-2 ml-2 text-black"
                        onChange={(e) => setchosenMode(e.target.value)}
                        value={chosenMode}
                    >
                        {Object.keys(scales).map((mode) => (
                            <option key={mode} value={mode}>{mode}</option>
                        ))}
                    </select>
                    <div
                        className="mb-2 ml-2 p-2 flex hover:bg-slate-300 bg-slate-100 rounded-lg text-black cursor-pointer"
                        onClick={() => setShowNotes(!showNotes)}
                    >
                        {showNotes ? "Hide Notes" : "Show Notes"}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <div className="grid grid-cols-16 gap-1">
                        {fretboard.map((stringNotes, stringIdx) => (
                            stringNotes.map((note, fretIdx) => {
                                const isNoteInScale = getScaleNotes(chosenNote, chosenMode).includes(note);
                                return (
                                    <div
                                        key={`${stringIdx}-${fretIdx}`}
                                        className={`w-8 h-8 flex items-center justify-center text-sm rounded 
                                            ${showNotes && isNoteInScale ? "bg-red-500 text-white" : "bg-slate-200 text-slate-400"}`}
                                    >
                                        {showNotes && isNoteInScale ? note : "."}
                                    </div>
                                );
                            })
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicUtilsContent;

export const MusicUtils = () => {
    return (<StandardHeader title={"Music utils"} date={""}
        content={< MusicUtilsContent />} />)
}
