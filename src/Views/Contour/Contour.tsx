import { useEffect, useState } from "react";
import "./HomeContour.css";
import "../../data/fonts/fonts.css";
import bg from "../../data/pics/wallpaper/contour_10_25.png";
import logo_contour from "../../data/pics/wallpaper/logo_contour.svg"

import { Link } from "react-router-dom";

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
                        className=" font-fatkat text-yellow-300 px-6 md:px-2 flex justify-center rounded-lg  md:text-[100px] text-[60px] text-shadow"
                    >
                        Contour
                    </Link>
                </div>
                <div className="flex flex-wrap items-center justify-center mt-10 text-yellow-100 font-fatkat">
                    <Link
                        to="/contour/1"
                        className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:underline"
                    >
                        agenda
                    </Link>
                    <Link
                        to="/music_video/5"
                        className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:underline"
                    >
                        gigs
                    </Link>
                    <Link
                        to="/contour/1"
                        className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:underline"
                    >
                        shop
                    </Link>
                    <Link
                        to="/gallery/2"
                        className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:underline"
                    >
                        gallery
                    </Link>
                    <Link
                        to="/contour/1"
                        className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:underline"
                    >
                        contact
                    </Link>
                </div>

            </div>

            <div className="fixed bottom-10 right-4 text-gray-500 text-sm ">
                <img src={logo_contour} alt="Logo" className="md:w-32 w-24 rounded-xl" />
            </div>

            <div className="fixed bottom-4 right-4 text-gray-500 text-sm ">
                Made with love by Contour and ChatGPT
            </div>
        </div>
    );
};
