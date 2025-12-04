import { Header } from "../../Single/Header";
import React, { useState } from "react";
import 'leaflet/dist/leaflet.css';
import { Folders, DatedImages } from "../../data/datatype/data_img";
import logo from "../../data/pics/wallpaper/osgood_trimmed.png"
import { SetLists, Song, Songs } from "../../data/datatype/data_music"
import { StandardHeaderContour } from "../../Single/StandardHeader";

export enum Locations {
    Saclay = "Saclay",
    Grenoble = "Grenoble",
    Boussay = "Boussay",
    Nantes = "Nantes",
    Paris = "Paris"
}

export type BandInfo = {
    name: string;
    members: string[];
    genre: string;
    link?: string;
};

export type Gig = {
    id: number,
    name: string,
    location: Locations,
    reason?: string,
    date: string,
    setlist: Song[],
    picturesFolder?: Folders[],
    bandInfo: BandInfo,
    colorInfo?: string[],
    textInfo?: string[]
}

export const Gigs_List: Gig[] = [
    {
        id: 1,
        name: "Saclay, 24",
        location: Locations.Saclay,
        date: "2024-03",
        setlist: SetLists.saclay_2024,
        bandInfo: {
            name: "Ladies Necessities",
            members: ["Martial", "Colin", "Loïs", "Eloi", "François"],
            genre: "Rock",
        },
        picturesFolder: [Folders.Gig_Saclay_24],
        colorInfo: ["#a924c1"],
        textInfo: ["white"]
    },
    {
        id: 2,
        name: "Saclay, 25",
        location: Locations.Saclay,
        date: "2025-03",
        setlist: SetLists.saclay_2025,
        bandInfo: {
            name: "Contour 📼",
            members: ["Martial", "Emmanuelle", "Anna", "Eloi", "Léonard"],
            genre: "Rock",
            link: "https://www.instagram.com/contourkillerparty/",
        },
        picturesFolder: [Folders.Gig_Saclay_25],
        colorInfo: ["#a924c1"],
        textInfo: ["white"]
    },
    {
        id: 3,
        name: "Nantes, Anniv de Martial 25",
        location: Locations.Nantes,
        date: "2025-05",
        setlist: SetLists.nantes_2025,
        bandInfo: {
            name: "Contour 📼",
            members: ["Martial", "Emmanuelle", "Anna", "Eloi", "Léonard"],
            genre: "Rock",
            link: "https://www.instagram.com/contourkillerparty/",
        },
        picturesFolder: [Folders.Gig_Nantes_25],
        colorInfo: ['#e86f1b'],
        textInfo: ["white"]
    },
    {
        id: 4,
        name: "Paris, Fête de la musique 25",
        location: Locations.Paris,
        date: "2025-06",
        reason: "Fête de la musique",
        setlist: SetLists.paris_2025,
        bandInfo: {
            name: "Contour 📼",
            members: ["Martial", "Emmanuelle", "Anna", "Eloi", "Léonard", "Alice"],
            genre: "Rock",
            link: "https://www.instagram.com/contourkillerparty/",
        },
        picturesFolder: [Folders.Gig_Fete_de_la_Musique],
        colorInfo: ['#FFFFF0'],
        textInfo: ["black"]
    },
    {
        id: 5,
        name: "Les Disquaires, Jul 25",
        location: Locations.Paris,
        reason: "Les Disquaires",
        date: "2025-07",
        setlist: SetLists.disquaires_2025,
        bandInfo: {
            name: "Contour 📼",
            members: ["Martial", "Emmanuelle", "Anna", "Eloi", "Léonard", "Alice"],
            genre: "Rock",
            link: "https://www.instagram.com/contourkillerparty/",
        },
        picturesFolder: [Folders.Gig_Les_Disquaires],
        colorInfo: ['#F5CF27'],
        textInfo: ['black']
    },
    {
        id: 6,
        name: "Les Disquaires, Nov 25",
        location: Locations.Paris,
        reason: "Les Disquaires",
        date: "2025-11",
        setlist: SetLists.disquaires_2_2025,
        bandInfo: {
            name: "Contour 📼",
            members: ["Martial", "Anna", "Eloi", "Léonard", "Alice"],
            genre: "Rock",
            link: "https://www.instagram.com/contourkillerparty/",
        },
        picturesFolder: [Folders.Gig_Les_Disquaires_2],
        colorInfo: ['#F5CF27'],
        textInfo: ['black']
    }


]

const ContourGigsList = Gigs_List.filter((g) => g.bandInfo.name == "Contour 📼")

const GigsContent = () => {

    const [selectedGig, setSelectedGig] = useState<Gig | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);


    return (
        <>
            {(() => {
                const today = new Date();
                const todayStr = today.toISOString().slice(0, 7); // "YYYY-MM"

                const upcoming = ContourGigsList
                    .filter(gig => gig.date >= todayStr)
                    .sort((a, b) => a.date.localeCompare(b.date)); // soonest → latest

                const previous = ContourGigsList
                    .filter(gig => gig.date < todayStr)
                    .sort((a, b) => b.date.localeCompare(a.date)); // newest → oldest

                return (
                    <>
                        {/* --- TO COME --- */}
                        {(
                            <div className="text-3xl font-fatkat text-black mt-6 mb-2">
                                TO COME
                            </div>
                        )}

                        {upcoming.length > 0 ? upcoming.map(gig => (
                            <div
                                key={gig.id}
                                onClick={() => setSelectedGig(gig)}
                                className="flex items-center text-xl font-fatkat text-white my-2"
                            >
                                <span>{gig.reason ? gig.reason + ", " + gig.location : gig.location}</span>
                                <div className="flex-1 border-b border-dotted border-yellow-500 mx-3"></div>
                                <span>{gig.date}</span>
                            </div>
                        )) : (<div

                            className="flex items-center text-xl font-fatkat text-white my-2"
                        >
                            <span>{"no show yet"}</span>
                        </div>)}

                        {/* --- PREVIOUS --- */}
                        {previous.length > 0 && (
                            <div className="text-3xl font-fatkat text-black mt-8 mb-2">
                                PREVIOUS
                            </div>
                        )}

                        {previous.map(gig => (
                            <div
                                key={gig.id}
                                onClick={() => setSelectedGig(gig)}
                                className="flex items-center text-xl font-fatkat text-white my-2 hover:underline"
                            >
                                <span className="">{gig.reason ? gig.reason + ", " + gig.location : gig.location}</span>
                                <div className="flex-1 border-b border-dotted border-yellow-500 mx-3"></div>
                                <span>{gig.date}</span>
                            </div>
                        ))}
                        {selectedGig && (
                            <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50" onClick={() => setSelectedGig(null)}>
                                <div className="bg-white text-black rounded-xl p-6 w-11/12 max-w-lg shadow-xl relative" onClick={(e) => e.stopPropagation()}>
                                    {selectedImage && (
                                        <div
                                            className="fixed inset-0 bg-yellow-100 bg-opacity-80 flex justify-center items-center z-50 p-4"
                                            onClick={() => setSelectedImage(null)}
                                        >
                                            <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-full" />
                                        </div>
                                    )}

                                    {/* Close button */}
                                    <button
                                        onClick={() => setSelectedGig(null)}
                                        className="absolute top-3 right-3 text-black text-2xl"
                                    >
                                        ×
                                    </button>

                                    {/* Gig Title */}
                                    <h2 className="text-3xl font-fatkat mb-2" >
                                        {selectedGig.name}
                                    </h2>

                                    {/* Basic Info */}
                                    <div className="text-lg mb-4">

                                    </div>

                                    {/* Band Info */}
                                    <div className="w-full overflow-x-auto whitespace-nowrap py-2 mt-4">
                                        {DatedImages?.filter(
                                            (image) =>
                                                selectedGig.picturesFolder?.some(folder => image.folder?.includes(folder))
                                        ).map((img, i) => (
                                            <img
                                                key={i}
                                                src={img.img}
                                                className="inline-block h-40 mx-2 rounded-lg shadow-lg"
                                                onClick={() => setSelectedImage(img.img)}
                                            />
                                        ))}
                                    </div>


                                    {/* Setlist */}
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-fatkat mb-2">Setlist</h3>

                                        <div className="max-h-60 overflow-y-auto pr-2">
                                            {selectedGig?.setlist?.map((song, index) => (
                                                <a
                                                    key={index}
                                                    href={song?.url}
                                                    className="rounded w-fit mr-2 font-medium hover:font-extrabold mb-1 mt-1 text-[var(--te)] flex"
                                                >
                                                    {song?.title}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                </div>


                            </div>
                        )
                        }

                    </>
                );

            })()}
        </>

    );
};

export const GigsContour = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className="bg-yellow-400 w-screen h-screen">
                <StandardHeaderContour link={"/contour/1"} content={<GigsContent />} />
            </div>
        </>
    )
}
