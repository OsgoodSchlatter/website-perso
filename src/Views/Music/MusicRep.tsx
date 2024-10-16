import { HeaderCategory } from "../../Single/HeaderCategory";
import "katex/dist/katex.min.css";

const PianoSongs = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={title}
                        date={date}
                        back={`/music/`}
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
                    <div className="p-4 my-20 justify-center">
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
                    <div className="p-4 my-20 justify-center">
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

export default PianoSongs;
