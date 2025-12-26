import { StandardHeader } from "../../Single/StandardHeader";
import img1 from "../../data/pics/wallpaper/contour_10_25.webp"



const AboutContent = () => {
    return (
        <>
            <div>

                <div className="text-center">
                    <img src={img1} className=" w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded mx-auto w-3/4" />
                    <p>A picture of my band Contour, in 2025</p>
                </div>
                <div className="text-3xl font-bold  mt-4">
                    I play drums, guitar and keys for <a className="text-yellow-400 font-bold font-fatkat"> Contour </a>
                </div>
                <div className="text-lg mb-4">
                    I have the deligth to play alongside my friends in my band Contour.
                    <br />
                    You can check out our <a href="https://www.instagram.com/contour__music" className="font-bold underline text-violet-500">instagram</a>, our <a className=" font-bold underline text-blue-500" href="https://contour-music.com/">website</a> or our <a className="font-bold underline text-red-500" href="https://www.youtube.com/@CONTOUR-music">youtube</a>.
                </div>
                <div className="text-3xl font-bold w-2/3 mt-4">
                    I also make my own music.
                </div>
                <div className="text-lg mb-4">

                    You can listen to my stuff <a href="https://soundcloud.com/eloi-poseidon" className="font-bold underline text-orange-500">here</a> or <a className="font-bold underline text-blue-500" href="https://www.youtube.com/@osgoodSchlatter16">here</a>.
                </div>

            </div>

        </>
    );
};


export const AboutMusic = () => {
    return (<StandardHeader title={"about"} date={""}
        content={< AboutContent />} />)
}
