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

    function getScale(root: string, mode: string): string[] {
        const pattern = modePatterns[mode];
        const rootIndex = allNotes.indexOf(root);
        const scale: string[] = [];
        let current = rootIndex;
        scale.push(allNotes[current]);
        for (let step of pattern) {
            current = (current + step) % allNotes.length;
            scale.push(allNotes[current]);
        }
        return scale.slice(0, 7);
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

    const [chosenPianoNote, setChosenPianoNote] = useState("C");
    const [chosenPianoMode, setChosenPianoMode] = useState("major");
    const [showPianoNotes, setShowPianoNotes] = useState(true);


    const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];

    const scaleNotes = getScaleNotes(chosenPianoNote, chosenPianoMode);

    // Generate keys (3 octaves = 36 keys)
    const keys = [];
    for (let octave = 1; octave <= 3; octave++) {
        for (let i = 0; i < allNotes.length; i++) {
            const note = allNotes[i];
            const keyLabel = note + octave;
            const isInScale = scaleNotes.includes(note);

            const isWhite = whiteKeys.includes(note);
            keys.push(
                <div
                    key={keyLabel}
                    className={`relative border ${isWhite ? "bg-white w-10 h-40 z-10" : "bg-black w-6 h-24 z-20 absolute ml-[-12px]"} 
                        ${showPianoNotes && isInScale ? (isWhite ? "bg-red-300" : "bg-red-700") : ""}
                    `}
                    title={note}
                >
                    {showPianoNotes && isInScale && (
                        <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-black`}>
                            {note}
                        </div>
                    )}
                </div>
            );
        }
    }
    const chordTypesMajor = ["maj", "min", "min", "maj", "maj", "min", "dim"];
    const chordTypesMinor = ["min", "dim", "maj", "min", "min", "maj", "maj"];

    const chordPresets: { name: string; degrees: number[] }[] = [
        { name: "I–V–vi–IV (Pop)", degrees: [0, 4, 5, 3] },
        { name: "ii–V–I (Jazz)", degrees: [1, 4, 0] },
        { name: "I–IV–V (Blues)", degrees: [0, 3, 4] },
        { name: "I–vi–ii–V (Classic)", degrees: [0, 5, 1, 4] },
    ];

    const majorScaleSteps = [2, 2, 1, 2, 2, 2, 1];
    const minorScaleSteps = [2, 1, 2, 2, 1, 2, 2];


    const modePatterns: Record<string, number[]> = {
        major: majorScaleSteps,
        minor: minorScaleSteps,
    };

    const chordTypes: Record<string, string[]> = {
        major: chordTypesMajor,
        minor: chordTypesMinor,
    };
    const [key, setKey] = useState("C");
    const [mode, setMode] = useState("major");
    const [sequence, setSequence] = useState<number[]>([]); // indexes into the scale
    const [preset, setPreset] = useState("");


    const scale = getScale(key, mode);
    const chords = scale.map((note, i) => ({
        root: note,
        type: chordTypes[mode][i],
        label: `${note}${chordTypes[mode][i] === "maj" ? "" : chordTypes[mode][i] === "min" ? "m" : "°"}`,
    }));

    const addChordToSequence = (index: number) => {
        setSequence([...sequence, index]);
    };

    const removeChord = (i: number) => {
        const newSeq = [...sequence];
        newSeq.splice(i, 1);
        setSequence(newSeq);
    };

    return (
        <>
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
            <div className="flex items-center gap-2 mb-2 mt-8">
                <select
                    className="p-2 rounded-md bg-slate-100 text-black"
                    value={chosenPianoNote}
                    onChange={(e) => setChosenPianoNote(e.target.value)}
                >
                    {allNotes.map((note) => (
                        <option key={note} value={note}>{note}</option>
                    ))}
                </select>
                <select
                    className="p-2 rounded-md bg-slate-100 text-black"
                    value={chosenPianoMode}
                    onChange={(e) => setChosenPianoMode(e.target.value)}
                >
                    {Object.keys(scales).map((mode) => (
                        <option key={mode} value={mode}>{mode}</option>
                    ))}
                </select>
                <button
                    onClick={() => setShowPianoNotes(!showPianoNotes)}
                    className="p-2 bg-slate-100 hover:bg-slate-300 rounded text-black"
                >
                    {showPianoNotes ? "Hide Notes" : "Show Notes"}
                </button>
            </div>

            <div className="relative flex">
                {keys}
            </div>

            <div className="flex items-center mt-4">

                <div className="">
                    <h3 className="text-lg">Select a mode </h3>
                    <div className="flex gap-2">
                        <select
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            className="p-2 rounded bg-slate-100 text-black"
                        >
                            {allNotes.map((note) => (
                                <option key={note} value={note}>{note}</option>
                            ))}
                        </select>

                        <select
                            value={mode}
                            onChange={(e) => setMode(e.target.value)}
                            className="p-2 rounded bg-slate-100 text-black"
                        >
                            {Object.keys(modePatterns).map((m) => (
                                <option key={m} value={m}>{m}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="px-4">
                    <h3 className="text-lg ">Chord Sequence</h3>
                    <div className="">
                        <select
                            value={preset}
                            onChange={(e) => {
                                const selected = chordPresets.find(p => p.name === e.target.value);
                                setPreset(e.target.value);
                                if (selected) {
                                    setSequence(selected.degrees);
                                }
                            }}
                            className="p-2 rounded bg-slate-100 text-black"
                        >
                            <option value="">-- Choose a progression --</option>
                            {chordPresets.map((p) => (
                                <option key={p.name} value={p.name}>{p.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="mb-8">
                <div className="mb-4 ">
                    <h3 className="text-lg mb-2">Available Chords in {key} {mode}</h3>
                    <div className="flex flex-wrap gap-2">
                        {chords.map((chord, i) => (
                            <button
                                key={i}
                                onClick={() => addChordToSequence(i)}
                                className="p-2 bg-blue-100 rounded hover:bg-blue-300 text-black"
                            >
                                {chord.label}
                            </button>
                        ))}
                    </div>
                </div>
                {sequence.length === 0 ? (
                    <div className="text-gray-500">Click on chords to build a sequence</div>
                ) : (

                    <div className="flex flex-wrap gap-2">
                        {sequence.map((index, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-1 p-2 bg-green-100 rounded text-black"
                            >
                                <span>{chords[index].label}</span>
                                <button
                                    onClick={() => removeChord(i)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>


        </>
    );
};

export default MusicUtilsContent;

export const MusicUtils = () => {
    return (<StandardHeader title={"Music utils"} date={""}
        content={< MusicUtilsContent />} />)
}
