import { HeaderCategory } from "../../../Single/HeaderCategory";

export const GuitarSongs = ({ title, date }: { title: string, date: string }) => {
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
                </div>
            </div>
        </>
    );
};


