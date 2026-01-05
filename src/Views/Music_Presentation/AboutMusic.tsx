import { StandardHeader } from "../../Single/StandardHeader";
import img_contour from "../../data/pics/wallpaper/contour_10_25.webp"
import img_eloi from "../../data/pics/decembre25/studio.jpg"

import { GrYoutube, GrSpotify, GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";


export const AboutMusic = () => {
    return (
        <>
            <Link to="/" className="absolute top-2 left-4 md:left-2 z-10 justify-center">
                <div className="font-pinco text-2xl md:text-5xl text-blue-400 text-d">Osgood</div>
            </Link>
            <div className="text-white absolute top-4 left-32 md:left-40 z-10 flex items-center justify-center w-40 md:w-max">
                <Link
                    to="/about/1"
                    className=" md:px-2 px-1 font-bold md:text-xl text-xs flex rounded-lg hover:bg-slate-400"
                >
                    about
                </Link>
                <Link
                    to="/maps/1"
                    className=" md:px-2 px-1 font-bold md:text-xl text-xs flex rounded-lg hover:bg-slate-400"
                >
                    maps
                </Link>
                <Link
                    to="/gallery/1"
                    className=" md:px-2 px-1 font-bold md:text-xl text-xs flex rounded-lg hover:bg-slate-400"
                >
                    gallery
                </Link>
                <Link
                    to="/music/1"
                    className=" md:px-2 px-1 font-bold md:text-xl text-xs flex rounded-lg hover:bg-slate-400"
                >
                    music
                </Link>
                <Link
                    to="/contact/1"
                    className=" md:px-2 px-1 font-bold md:text-xl text-xs flex rounded-lg hover:bg-slate-400"
                >
                    contact
                </Link>
            </div>
            <div
                className=" w-screen h-screen overflow-x-hidden flex justify-center items-center"
                style={{
                    backgroundImage: `url(${img_contour})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="text-3xl font-bold  mt-4 mb-2 ">
                    <a href="https://contour-music.com" className="text-yellow-400 font-bold font-fatkat text-7xl hover:text-8xl text-d"> Contour </a>
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
            </div>
            <div
                className=" w-screen h-screen overflow-x-hidden flex justify-center items-center"
                style={{
                    backgroundImage: `url(${img_eloi})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div >
                    <div className="font-pinco text-8xl text-blue-400 text-shadow hover:text-9xl">
                        Osgood
                    </div>
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
            </div>
            <div>

                {/* <div className="text-lg mb-4">

                    <div className="text-center">
                        <img src={img1} className=" w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded mx-auto w-3/4" />
                        <p>A picture of my band <a className="text-yellow-300 font-bold">Contour</a>, in 2025</p>
                    </div>

                </div> */}

                {/* <div className="text-center mb-4">
                    <img src={img2} className=" w-full max-w-full sm:max-w-xl md:max-w-xl lg:max-w-4xl rounded mx-auto w-3/4" />
                    <p>Me recording Tired Woman in Clem's studio in 2025</p>
                </div> */}


            </div>

        </>
    );
};


