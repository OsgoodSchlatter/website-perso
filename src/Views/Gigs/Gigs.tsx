import { Header } from "../../Single/Header";
import React, { useState } from "react";
import 'leaflet/dist/leaflet.css';
import { Folders, DatedImages } from "../../data/datatype/data_img";

import { SetLists, Song, Songs } from "../../data/datatype/data_music"
import { PicsHeader, StandardHeader } from "../../Single/StandardHeader";

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
    date: string,
    setlist: Song[],
    picturesFolder?: Folders[],
    bandInfo: BandInfo,
    colorInfo?: string[]
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
        colorInfo: ["#a924c1"]
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
        colorInfo: ["#a924c1"]
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
        colorInfo: ['#e86f1b']
    },
    {
        id: 4,
        name: "Paris, 25",
        location: Locations.Paris,
        date: "2025-05",
        setlist: SetLists.paris_2025,
        bandInfo: {
            name: "Contour 📼",
            members: ["Martial", "Emmanuelle", "Anna", "Eloi", "Léonard"],
            genre: "Rock",
            link: "https://www.instagram.com/contourkillerparty/",
        },
        picturesFolder: [Folders.Gig_Fete_de_la_Musique],
        colorInfo: ['#FFFFF0']
    }


]

export const Gigs = () => {
    const [selectedGig, setSelectedGig] = useState<Gig>(Gigs_List[1]);

    return (
        <>
            <div className="flex justify-center mt-4">
                <div className="w-full sm:w-2/3 md:max-w-4xl lg:max-w-4xl xl:max-w-4xl mx-4">
                    {/* Music Selection Dropdown */}
                    <div className="sticky top-24 left-full self-start z-50">
                        <div className="w-full flex justify-end px-4 mb-4">
                            <div className="inline-flex rounded-md shadow overflow-hidden border border-gray-300 p-2 bg-black">
                                <select
                                    value={selectedGig.id}
                                    onChange={(e) => {
                                        const selected = Gigs_List.find(g => g.id === Number(e.target.value));
                                        if (selected) setSelectedGig(selected);
                                    }}
                                >
                                    {Gigs_List.map((gig) => (
                                        <option key={gig.id} value={gig.id}>
                                            {gig.location} {gig.date}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>
                    </div>
                    <div>

                        <div className="p-2 px-4 mt-4 rounded bg-[var(--bg)]" style={{ '--bg': selectedGig.colorInfo } as React.CSSProperties}>
                            <div>
                                <div className={`text-5xl font-bold ${selectedGig.id === 4 ? "text-black" : ""}`}>
                                    {selectedGig.bandInfo.name}
                                </div>
                                <a className={`italic ${selectedGig.id === 4 ? "text-black" : ""}`} href={selectedGig.bandInfo.link}>
                                    {selectedGig.name}
                                </a>
                            </div>
                            <div className="flex flex-wrap justify-evenly p-1">
                                {selectedGig?.setlist?.map((song, index) => (
                                    <a className={`rounded w-fit p-1 font-medium hover:font-extrabold mb-1 mt-1 ${selectedGig.id === 4 ? "text-black" : ""}`}
                                        href={song?.url}>{song?.title}</a>
                                ))}
                            </div>
                            <div>
                                {DatedImages?.filter(
                                    (image) =>
                                        selectedGig.picturesFolder?.some(folder => image.folder?.includes(folder))
                                ).map((img) => (
                                    <img
                                        src={img.img}
                                        className="w-full mt-2"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

