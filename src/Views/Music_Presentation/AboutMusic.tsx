import { StandardHeader } from "../../Single/StandardHeader";
import img1 from "../../data/pics/wallpaper/contour_10_25.webp"
import img2 from "../../data/pics/decembre25/own_music.jpg"



const AboutContent = () => {
    return (
        <>
            <div>
                <div className="text-3xl font-bold  mt-4 mb-2">
                    I play 🥁, 🎸 and 🎹 for <a className="text-yellow-400 font-bold font-fatkat"> Contour </a>...
                </div>
                <div className="text-lg mb-4">

                    <div className="text-center">
                        <img src={img1} className=" w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded mx-auto w-3/4" />
                        <p>A picture of my band Contour, in 2025</p>
                    </div>

                    You can check us out on <a href="https://www.instagram.com/contour__music" className="font-bold underline text-violet-500">instagram</a> and on our <a className=" font-bold underline text-yellow-500" href="https://contour-music.com/">website</a> and listen to our original songs on <a className="font-bold underline text-red-500" href="https://www.youtube.com/@CONTOUR-music">youtube</a>.
                </div>
                <div className="text-3xl font-bold  mt-4">
                    ... but I also make my own music.
                </div>
                <div className="text-center">
                    <img src={img2} className=" w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded mx-auto w-3/4" />
                    <p>A picture of my band Contour, in 2025</p>
                </div>
                <div className="text-lg mb-4">

                    You can listen to my stuff on <a href="https://soundcloud.com/eloi-poseidon" className="font-bold underline text-orange-500">soundcloud</a> or on <a className="font-bold underline text-red-500" href="https://www.youtube.com/@osgoodSchlatter16"> youtube</a>.
                </div>

            </div>

        </>
    );
};


export const AboutMusic = () => {
    return (<StandardHeader title={"about"} date={""}
        content={< AboutContent />} />)
}
