import { Header } from "../../Single/Header";
import React, { useState } from "react";
import 'leaflet/dist/leaflet.css';
import { Folders, DatedImages } from "../../data/datatype/data_img";
import logo from "../../data/pics/wallpaper/osgood_trimmed.png"
import { SetLists, Song, Songs } from "../../data/datatype/data_music"
import { PicsHeader, PicsHeaderContour, StandardHeader } from "../../Single/StandardHeader";

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
        name: "Nantes, 25",
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
        name: "Paris, 25",
        location: Locations.Paris,
        date: "2025-05",
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
        name: "Les Disquaires, 25",
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
        name: "Les Disquaires, 25",
        location: Locations.Paris,
        reason: "Les Disquaires",
        date: "2025-11",
        setlist: SetLists.disquaires_2025,
        bandInfo: {
            name: "Contour 📼",
            members: ["Martial", "Anna", "Eloi", "Léonard", "Alice"],
            genre: "Rock",
            link: "https://www.instagram.com/contourkillerparty/",
        },
        picturesFolder: [Folders.Gig_Les_Disquaires],
        colorInfo: ['#F5CF27'],
        textInfo: ['black']
    }


]

const GigsContent = () => {
    const [selectedGig, setSelectedGig] = useState<Gig>(Gigs_List[1]);

    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-full mx-4 ">
                    <div className="w-full max-w-xl mx-auto mt-10">

                        {Gigs_List
                            .sort((a, b) => b.date.localeCompare(a.date)) // ← sorts newest → oldest
                            .map((gig) => (
                                <div
                                    key={gig.id}
                                    className="flex items-center text-xl font-fatkat text-white my-2"
                                >
                                    {/* Left: location */}
                                    <span>{gig.reason ? gig.reason + ", " + gig.location : gig.location}</span>

                                    {/* Dotted line */}
                                    <span className="flex-1 mx-3 overflow-hidden whitespace-nowrap text-yellow-500">
                                        {".".repeat(200)}
                                    </span>

                                    {/* Right: date */}
                                    <span>{gig.date}</span>
                                </div>
                            ))}

                    </div>


                </div>
            </div>
        </>
    );
};

export const GigsContour = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className="bg-yellow-400 w-screen h-screen">
                <PicsHeaderContour link={"/contour/1"} content={<GigsContent />} />
            </div>
        </>
    )
}
