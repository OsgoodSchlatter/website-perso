import { useState } from "react";
import { HeaderCategory } from "../../Single/HeaderCategory";
import { StandardHeader } from "../../Single/StandardHeader";

const MusicUtilsContent = () => {

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
                        <div className="text-slate-400 w-6 h-fit rounded-full bg-red-700 text-sm">{allGuitarNeckNotes[2 * index]}</div>
                        <div className="text-slate-400 w-6 h-fit rounded-full bg-red-700 text-sm">{allGuitarNeckNotes[2 * index + 1]}</div>
                    </div>

                ) : null}


            </div >
        );
    }
    return (
        <>
            <div className="flex justify-center">
                <div className="w-full">
                    <div className="flex">
                        <select
                            className="p-2 rounded-md border border-transparent bg-slate-100 hover:bg-slate-300 mb-2 text-black"
                            onChange={(e) => setchosenNote(e.target.value)}
                        >
                            {notes.map((note) => {
                                return <option key={note} value={note}> {note}</option>;
                            })}
                        </select>
                        <select
                            className="p-2 rounded-md border border-transparent bg-slate-100 hover:bg-slate-300 mb-2 ml-2 text-black"
                            onChange={(e) => setchosenMode(e.target.value)}
                        >
                            {Object.keys(modes).map((mode) => {
                                return <option key={mode} value={mode}> {mode}</option>;
                            })}
                        </select>
                        <div className="mb-2 ml-2 p-2 flex hover:bg-slate-300 bg-slate-100 rounded-lg text-black" onClick={() => setShowNotes(!showNotes)}>
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


            <div className="flex justify-center mt-4">
                <div className="max-w-4xl">
                    <div className="justify-center">
                        <div>
                            <a href="https://tabs.ultimate-guitar.com/tab/red-hot-chili-peppers/dark-necessities-chords-1842513" className="hover:underline">Dark Necessities - Red Hot Chili Pepper</a>
                        </div>
                        <div>
                            <a href="https://tabs.ultimate-guitar.com/tab/misc-soundtrack/pirates-of-the-caribbean-hes-a-pirate-chords-540464" className="hover:underline">Pirates of the Caribbean - Hans Zimmer</a>
                        </div>
                        <div>
                            <a href="https://tabs.ultimate-guitar.com/tab/phil-collins/in-the-air-tonight-chords-15811" className="hover:underline">In the air tonight - Phil Collins</a>
                        </div>
                        <div>
                            <a href="https://tabs.ultimate-guitar.com/tab/adele/love-in-the-dark-chords-1782457" className="hover:underline">Love in the dark - Adele</a>
                        </div>

                        <div>
                            <a href=" https://tabs.ultimate-guitar.com/tab/misc-soundtrack/a-star-is-born-shallow-chords-2488086" className="hover:underline">Shallow-Lady Gaga</a>
                        </div>

                        <div>
                            <a href=" https://tabs.ultimate-guitar.com/tab/tom-odell/another-love-chords-1198980" className="hover:underline"> Another love - Tom Odell</a>
                        </div>

                        <div>
                            <a href="                         https://tabs.ultimate-guitar.com/tab/daniel-balavoine/mon-fils-ma-bataille-chords-1747979" className="hover:underline"> Mon fils ma bataille - Daniel Balavoine</a>
                        </div>
                    </div>
                    <div className="justify-center">
                        <div>- 17 going under - Sam Fender</div>
                        <div>- The Borders - Sam Fender</div>
                        <div>- Spit of you - Sam Fender</div>
                        <div>- Will we talk - Sam Fender</div>
                        <div>- All is on my side - Sam Fender</div>
                        <div>- Wild Grey Ocean -   Sam Fender</div>
                        <div>- You're not the only one - Sam Fender </div>
                        <div>- Viva la vida - Coldplay</div>
                        <div>
                            <a href="https://www.youtube.com/watch?v=g51aivXGbmM&lc=UgyjvgocOKX4n0LIuzh4AaABAg" className="hover:underline"> - Bonne idée - JJG</a>
                        </div>
                        <a href="https://www.youtube.com/shorts/l2rZlQEc9WI" className="hover:underline">- Apocalypse - Cigarettes After Sex</a>
                        <div>- Là-bas - JJG</div>
                        <div>- Pour que tu m'aimes encore - JJG</div>
                        <div>- Piccola stella senza cielo - Ligabue</div>
                        <div>- I'm yours - Jason Mraz</div>
                        <div>- Overpass Graffiti -  Ed Sheeran</div>
                        <div>- A Team -  Ed Sheeran</div>
                        <div>- Need You Now - Lady A</div>
                        <div>- J'ai demandé à la lune - Indochine</div>
                        <div>- Let it be - the Beatles </div>

                    </div>
                    <div className="justify-center">
                        <div>
                            <a href="https://www.youtube.com/watch?v=TsqSN9k0G40" className="hover:underline">- Everglow - Coldplay</a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/watch?v=mIwkXvxOwhw" className="hover:underline">- Viva La Vida - Coldplay</a>
                        </div>
                        <div>- Sky Full Of Stars - Coldplay</div>
                        <div>- Feeling Good - Muse</div>
                        <div>
                            <a href="https://www.youtube.com/watch?v=GPMvlTYbns0" className="hover:underline">- Every Breath You Take - The Police</a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/shorts/ZFbCH9DfzuU" className="hover:underline">- Lost in yesterday - Tame Impala</a>
                        </div>
                        <div>- Against all Odds - Phil Collins</div>
                        <div>- Another day in paradise - Phil Collins</div>
                        <div>- Riptide - Vance Joy</div>
                        <div>- Shallow - Lady Gaga</div>
                        <div>- Stay - Rihanna</div>
                        <div>- Someone like you - Adele</div>
                        <div>- Nightcall - Kavinsky</div>
                        <div>- Varadero - Leon </div>
                        <div>- Famille - Goldman</div>
                        <div>
                            <a href="https://youtu.be/ujW0PnPbBlE?si=sbxBo0kwUWuiiTfw" className="hover:underline">- Pirates des Caraïbes - Hans Zimmer</a>
                        </div>
                        <a href="https://www.youtube.com/watch?v=_v75os9sLL0" className="hover:underline">- I belong to you - Muse</a>

                    </div>
                </div>
            </div>

        </>
    );
};


export const MusicUtils = () => {
    return (<StandardHeader title={"Music utils"} date={""}
        content={< MusicUtilsContent />} />)
}
