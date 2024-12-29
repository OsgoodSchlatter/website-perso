import { Header } from "../../Single/Header";
import { useState } from "react";
import saclay2 from "./music-saclay/saclay2.jpg"
import saclay4 from "./music-saclay/saclay4.jpg"
import saclay3 from "./music-saclay/saclay7.jpg"
import saclay7 from "./music-saclay/saclay8.jpg"

import gre1 from "./gig-gre/gre1.jpg"
import gre2 from "./gig-gre/gre2.jpg"
import gre3 from "./gig-gre/gre3.jpg"

import boussay from "./boussay.jpeg"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'leaflet/dist/leaflet.css';

type Locations = "Saclay" | "Grenoble" | "Boussay";

export const Gigs = () => {
    const [selectedSport, setSelectedSport] = useState<Locations>("Saclay"); // Default to "Surf"

    // Function to render content based on selected sport
    const renderContent = () => {
        switch (selectedSport) {
            case "Saclay":
                return (
                    <div className="p-2 mt-4 rounded bg-violet-700 ">
                        <div className="text-xl font-bold ">Saclay - 2024 </div>
                        <div className="border-b-2 border-slate-500 rounded mb-2" />

                        This was a gig I organised in my house (with my roomates) in Saclay, 2024. The group was called Ladies Necessities and was formed of:
                        <div className="font-bold text-center">
                            Loïs-singer,<br /> Colin-Bass,<br />Martial-Drums/guitar,<br /> Francois-Guitar,<br /> Eloi-Keys/Guitar/Drums.
                        </div>
                        The set-list was:
                        <div className="font-bold text-center">
                            1 - Muse - I belong to you
                            <br />
                            2 - Tom Misch - Disco yes
                            <br />
                            3 - RHCP - Dark Necessities
                            <br />
                            4 - Sam Fender - Spit of You
                            <br />
                            5 - Dire Straits - Lady Writer
                            <br />
                            6 - Clara Luciani - Respire Encore
                            <br />
                            7 - Skorpions - Still loving you
                        </div>

                        <div className="flex items-center justify-center my-2">
                            {/* @ts-ignore */}

                        </div>

                        Here is a couple of pics :
                        <Carousel className="carousel-container">
                            <div className="carousel-slide">
                                <img src={saclay3} alt="Image 3" />
                            </div>
                            <div className="carousel-slide">
                                <img src={saclay2} alt="Image 2" />
                            </div>
                            <div className="carousel-slide">
                                <img src={saclay4} alt="Image 4" />
                            </div>
                            <div className="carousel-slide">
                                <img src={saclay7} alt="Image 7" />
                            </div>
                        </Carousel>
                    </div >
                );

            case "Grenoble":
                return (
                    <div className="p-2 mt-4 rounded bg-green-700 ">
                        <div className="text-xl font-bold ">Grenoble - 2024⛷️</div>
                        <div className="border-b-2 border-slate-500 rounded mb-2" />

                        Here are a couple of pictures from a gig in Grenoble 2024.
                        <div className="flex items-center justify-center my-2">
                            <div className="font-bold text-center">
                                Martial-singer/guitar/drums,<br /> Tanguy-Guitar/Drums,<br /> Eloi-Guitar/Drums.
                            </div>
                        </div>

                        The set-list was:
                        <div className="font-bold text-center">
                            1 - Dire Straits - Money for nothing
                            <br />
                            2 - AC/DC - Hells Bells
                            <br />
                            3 - Dire Straits - Lady Writer
                            <br />
                            4 - Johnny Halliday - Allumer le feu
                            <br />
                            5 - ZZ TOP - La Grange
                        </div>
                        Here is a couple of pics :
                        <Carousel className="carousel-container">
                            <div className="carousel-slide">
                                <img src={gre2} className="px-2 border-b-2 m-2 items-center" alt="Image" />
                            </div>
                            <div className="carousel-slide">
                                <img src={gre1} className="px-2 border-b-2 m-2" alt="Image" />
                            </div>
                            <div className="carousel-slide">
                                <img src={gre3} className="px-2 border-b-2 m-2" alt="Image" />
                            </div>
                        </Carousel >
                    </div>
                );

            case "Boussay":
                return (
                    <div className="p-2 mt-4 rounded bg-orange-700 ">
                        <div className="text-xl font-bold ">Boussay 2024</div>
                        <div className="border-b-2 border-slate-500 rounded mb-2" />

                        Here is my sister and I singing "Bonne idée" from Jean Jacques Goldman to my grandma for her 80 bday:
                        <div className="flex justify-center">
                            <img src={boussay} className="px-2 border-b-2 m-2" width="400" alt="Image" />
                        </div>

                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <div className="flex justify-center mt-2">
                <div className="w-full sm:w-2/3 md:w-1/2 lg:max-w-2xl xl:max-w-2xl mx-4 ">
                    {/* Music Selection Buttons */}
                    <div className="flex justify-center space-x-4 mb-4">
                        <button onClick={() => setSelectedSport("Saclay")} className="bg-violet-700 text-white px-4 py-2 rounded">Saclay 2024</button>
                        <button onClick={() => setSelectedSport("Grenoble")} className="bg-green-500 text-white px-4 py-2 rounded">Grenoble 2024</button>
                        <button onClick={() => setSelectedSport("Boussay")} className="bg-orange-500 text-white px-4 py-2 rounded">Boussay 2024</button>
                    </div>


                    {renderContent()}
                </div>
            </div>
        </>
    );
};
