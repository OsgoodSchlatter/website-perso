import { Header } from "../../Single/Header";
import { useState } from "react";
import 'leaflet/dist/leaflet.css';
import { Folders, DatedImages } from "../../data/datatype/data_img";

import { SetLists, Song, Songs } from "../../data/datatype/data_music"
import { PicsHeader, StandardHeader } from "../../Single/StandardHeader";

export enum Locations {
    Saclay = "Saclay",
    Grenoble = "Grenoble",
    Boussay = "Boussay"
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
}

export const Gigs_List: Gig[] = [
    {
        id: 1,
        name: "Gig at Saclay in 24",
        location: Locations.Saclay,
        date: "2024-03",
        setlist: SetLists.saclay_2024,
        bandInfo: {
            name: "Ladies Necessities",
            members: ["Martial", "Colin", "Loïs", "Eloi", "François"],
            genre: "Rock",
        },
        picturesFolder: [Folders.Gig_Saclay_24],

    },
    {
        id: 2,
        name: "Gig at Saclay in 25",
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
    },
    {
        id: 2,
        name: "Gig at Saclay in 25",
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
    }

]

export const Gigs = () => {
    const [selectedGig, setSelectedGig] = useState<Gig>(Gigs_List[1]);

    return (
        <>
            <div className="flex justify-center mt-2">
                <div className="w-full sm:w-2/3 md:max-w-4xl lg:max-w-4xl xl:max-w-4xl mx-4">
                    {/* Music Selection Dropdown */}
                    <div className="sticky top-32 left-full self-start z-50">
                        <div className="w-full flex justify-end px-4 mb-4">
                            <div className="inline-flex rounded-md shadow overflow-hidden border border-gray-300">
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

                        <div className="p-2 px-4 mt-4 rounded bg-violet-800 ">
                            <div className="text-5xl font-bold">{selectedGig.name} </div>
                            <div className="text-2xl font-bold mt-8">Groupe: </div>
                            <div className="text-center font-bold text-3xl">
                                <a href={selectedGig.bandInfo.link}>
                                    {selectedGig.bandInfo.name}
                                </a>
                            </div>
                            <div className="text-2xl font-bold">Setlist: </div>

                            <div className="flex flex-wrap justify-evenly p-1">
                                {selectedGig?.setlist?.map((song, index) => (
                                    <a className="bg-violet-600 rounded w-fit p-1 font-bold mb-1 mt-1 hover:bg-violet-400" href={song?.url}>{song?.title}</a>
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

