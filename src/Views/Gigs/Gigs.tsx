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
    }


]

const GigsContent = () => {
    const [selectedGig, setSelectedGig] = useState<Gig>(Gigs_List[1]);

    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-full mx-4 ">
                    <div className="flex justify-end">
                        <select
                            value={selectedGig.id}
                            onChange={(e) => {
                                const selected = Gigs_List.find(g => g.id === Number(e.target.value));
                                if (selected) setSelectedGig(selected);
                            }}
                            className="p-4 py-2 rounded md:max-h-12 md:w-1/3 bg-black right-0"
                        >
                            {Gigs_List.map((gig) => (
                                <option key={gig.id} value={gig.id}>
                                    {gig.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>

                        <div className="max-w-full p-2 px-4 mt-4 rounded bg-[var(--bg)]" style={{ '--bg': selectedGig.colorInfo } as React.CSSProperties}>
                            <div>
                                <div className={"text-5xl font-bold text-[var(--te)]"} style={{ '--te': selectedGig.textInfo } as React.CSSProperties}>
                                    {selectedGig.bandInfo.name}
                                </div>
                                <a className={"italic text-[var(--te)]"} style={{ '--te': selectedGig.textInfo } as React.CSSProperties} href={selectedGig.bandInfo.link}>
                                    {selectedGig.name}
                                </a>
                            </div>
                            <div className="flex flex-wrap justify-evenly p-1">
                                {selectedGig?.setlist?.map((song, index) => (
                                    <a className={"rounded w-fit p-1 font-medium hover:font-extrabold mb-1 mt-1 text-[var(--te)]"} style={{ '--te': selectedGig.textInfo } as React.CSSProperties}
                                        href={song?.url}>{song?.title}</a>
                                ))}
                            </div>
                            <div className="max-w-full">
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

export const Gigs = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <PicsHeader content={<GigsContent />} />
        </>
    )
}
