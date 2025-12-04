import { useEffect, useState } from "react";
import "./HomeContour.css";
import "../../data/fonts/fonts.css";
import bg from "../../data/pics/wallpaper/contour_10_25.png";
import logo_contour from "../../data/pics/wallpaper/logo_contour.svg"

import { Link } from "react-router-dom";
import { GrInstagram, GrSpotify, GrYoutube } from "react-icons/gr";

// todo, do a struct that contains each article in one subdomain

export const Pages = new Map<string, string>([
    ["/chess", "chess"],
    ["/trips", "maps"],
    ["/maths", "maths"],
    ["/cs", "computer science"],
    ["/music", "music & video"],
    ["/sport", "sport"],
    ["/books", "books"],
    ["/physics", "physics"],
    ["/climate", "climate"],
    ["/languages", "languages"],
    ["/contour", "contour"],
]);

export const ContourHome = () => {
    return (
        <>

            <div
                className=" w-screen h-screen overflow-x-hidden"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div>

                    <div className="flex justify-center items-center md:text-4xl text-3xl mb-1 mt-20 ">
                        <Link
                            to="/contour/1"
                            className=" font-fatkat text-yellow-300 px-6 md:px-2 flex justify-center rounded-lg  md:text-[100px] text-[60px] text-shadow items-center"
                        >
                            Contour

                        </Link>
                    </div>
                    <div className="flex flex-wrap items-center justify-center md:mt-10 mt-6 text-yellow-100 font-fatkat">

                        <Link
                            to="/contour/2"
                            className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:bg-black"
                        >
                            agenda
                        </Link>
                        <Link
                            to="/contour/3"
                            className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:bg-black"
                        >
                            shop
                        </Link>
                        <Link
                            to="/contour/4"
                            className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:bg-black"
                        >
                            gallery
                        </Link>
                        <Link
                            to="/contour/5"
                            className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:bg-black"
                        >
                            contact
                        </Link>
                    </div>
                    <div className="flex flex-wrap items-center justify-center text-yellow-100 font-fatkat">

                        <div className=" hover:bg-black rounded-lg p-1">
                            <a
                                href={"https://www.youtube.com/shorts/khm6P9dm7Ak"}
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
                                S
                            </a>
                        </div>



                    </div>

                </div>




                <div className="fixed bottom-4 right-4 text-gray-500 text-sm ">
                    Made with love by Contour and ChatGPT
                </div>
            </div>

        </>
    );
};
