import { HeaderCategory } from "../../../Single/HeaderCategory";
import "katex/dist/katex.min.css";
import React from "react";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

const PianoSongs = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={title}
                        date={date}
                        back={`/piano/`}
                    />
                    <div className="p-4 my-20 justify-center">
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
                </div>
            </div>
        </>
    );
};

export default PianoSongs;
