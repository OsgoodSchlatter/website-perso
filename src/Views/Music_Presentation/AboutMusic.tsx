import { StandardHeader } from "../../Single/StandardHeader";
import img1 from "../../data/pics/wallpaper/contour_10_25.webp"
import img2 from "../../data/pics/decembre25/own_music.jpg"

import logo from "../../data/pics/wallpaper/osgood_trimmed.png";
import { GrYoutube, GrSpotify, GrInstagram } from "react-icons/gr";


const AboutContent = () => {
    return (
        <>
            <div>
                <div className="text-3xl font-bold  mt-4 mb-2 flex justify-between">
                    <a href="https://contour-music.com" className="text-yellow-400 font-bold font-fatkat text-5xl"> Contour </a>
                    <div className="flex flex-wrap items-center justify-center text-yellow-100 font-fatkat">

                        <div className=" hover:bg-black rounded-lg p-1">
                            <a
                                href={"https://www.youtube.com/@CONTOUR-music"}
                            >
                                <GrYoutube size={30} />
                            </a>
                        </div>
                        <div className=" hover:bg-black rounded-lg p-1">
                            <a
                                href={"https://www.spotify.com/"}
                            >
                                <GrSpotify size={30} />
                            </a>
                        </div>
                        <div className=" hover:bg-black rounded-lg p-1">
                            <a
                                href={"https://www.instagram.com/contour__music/"}
                            >
                                <GrInstagram size={30} />
                            </a>
                        </div>
                        <div className=" hover:bg-black rounded-lg p-1 text-xl">
                            <a
                                href={"https://shotgun.live/fr/venues/contour"}
                            >
                                Shotgun
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-lg mb-4">

                    <div className="text-center">
                        <img src={img1} className=" w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded mx-auto w-3/4" />
                        <p>A picture of my band <a className="text-yellow-300 font-bold">Contour</a>, in 2025</p>
                    </div>

                </div>
                <div className="text-3xl font-bold  mt-8 mb-2 flex justify-between">
                    <img src={logo} alt="Logo" className="w-2/5 h-auto" />
                    <div className="flex flex-wrap items-center justify-center text-yellow-100 font-fatkat">

                        <div className=" hover:bg-black rounded-lg p-1">
                            <a
                                href={"https://www.youtube.com/@osgoodSchlatter16"}
                            >
                                <GrYoutube size={30} />
                            </a>
                        </div>
                        <div className=" hover:bg-black rounded-lg p-1 text-xl">
                            <a
                                href={"https://soundcloud.com/eloi-poseidon"}
                            >
                                Soundcloud
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mb-4">
                    <img src={img2} className=" w-full max-w-full sm:max-w-xl md:max-w-xl lg:max-w-4xl rounded mx-auto w-3/4" />
                    <p>Me recording Tired Woman in Clem's studio in 2025</p>
                </div>


            </div>

        </>
    );
};


export const AboutMusic = () => {
    return (<StandardHeader title={"about"} date={""}
        content={< AboutContent />} />)
}
