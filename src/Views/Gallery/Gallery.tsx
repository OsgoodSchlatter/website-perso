import React, { useState } from 'react';
import img1 from "./nov/IMG20241102161449.jpg";
import img2 from "./nov/IMG20241101130541.jpg";
import img3 from "./2023_dec/xmas_2023.jpg"
import img4 from "./2024_jan/1.jpg"
import img5 from "./2024_jan/2.jpg"
import img6 from "./2024_jan/3.jpg"
import img7 from "./nov/IMG20241121131404.jpg"
import img8 from "./nov/IMG20241121130900.jpg"
import img9 from "./nov/IMG20241121130851.jpg"
import img10 from "./nov/IMG20241121130609.jpg"
import best_24_november from "./best_24/Best_2024_1.jpeg"
import best_24_march from "./best_24/Best_2024_2.jpeg"
import best_24_july from "./best_24/Best_2024_3.jpg"
import best_24_feb from "./best_24/Best_2024_4.jpg"
import best_24_oct from "./best_24/Best_2024_5.jpg"
import best_24_march_gig from "./best_24/Best_2024_6.jpg"
import best_24_oct_gig from "./best_24/Best_2024_7.jpeg"
import best_24_may from "./best_24/Best_2024_8.jpg"
import best_24_aug from "./best_24/Best_2024_9.jpg"
import best_24_nov from "./best_24/Best_2024_10.jpg"
import best_24_sept from "./best_24/Best_2024_11.jpg"
import best_24_jan from "./best_24/Best_2024_12.jpg"
import amsterdam from "./summer24/pics_website-24-25/amsterdam.jpg"
import arradon from "./summer24/pics_website-24-25/arradon.jpg"
import biarritz from "./summer24/pics_website-24-25/biarritz.jpg"
import biarritz2 from "./summer24/pics_website-24-25/biarritz2.jpg"
import bigben from "./summer24/pics_website-24-25/bigben.jpg"
import drums_normandy from "./summer24/pics_website-24-25/drums_normandy.jpg"
import la_rochelle from "./summer24/pics_website-24-25/la_rochelle.jpg"
import laguo_guarda from "./summer24/pics_website-24-25/laguo_di_guarda.jpg"
import london from "./summer24/pics_website-24-25/london.jpg"
import naples from "./summer24/pics_website-24-25/naples.jpg"
import porto_venere from "./summer24/pics_website-24-25/porto_venere.jpg"
import salerno_simona from "./summer24/pics_website-24-25/salerno_simona.jpg"
import turenne from "./summer24/pics_website-24-25/turenne.jpg"
import venezia from "./summer24/pics_website-24-25/venezia.jpg"


import { StandardHeader } from '../../Single/StandardHeader';

// Define the type for the images
type ImageType = {
    id: number;
    img: string; // URL or import of the image
    date: string; // Format "MM/YYYY"
    caption?: string;
    folder?: Folders[];
};

export enum Folders {
    Time = "Timeline: 12 Best of each year",
    Mun24 = "Munich November 24",
    Lon23 = "London January 23",
    Sac24 = "Saclay December 24",
    Sum24 = "Summer 24",
}

// Example images array
const DatedImages: ImageType[] = [

    {
        id: 1,
        img: img1,
        date: "11/2024",
        caption: "A peer at Starnberger see, next to Munich",
        folder: [Folders.Mun24],
    },
    {
        id: 2,
        img: img2,
        date: "11/2024",
        caption: "Monopteros at English Garden, in Munich",
        folder: [Folders.Mun24],
    },
    {
        id: 3,
        img: img3,
        date: "12/2023",
        caption: "Xmas at the coloc in saclay, 2023 "
    },
    {
        id: 4,
        img: img4,
        date: "01/2024",
        caption: "Pink London Eye",
        folder: [Folders.Lon23],
    }, {
        id: 5,
        img: img5,
        date: "01/2024",
        caption: "Theatre in London, the Book of Mormons ",
        folder: [Folders.Lon23],
    }, {
        id: 6,
        img: img6,
        date: "01/2024",
        caption: "Exotic Shop CyberDog ",
        folder: [Folders.Lon23],
    },
    {
        id: 7,
        img: img7,
        date: "11/2024",
        caption: "Snow in saclay",
        folder: [Folders.Sac24],
    },
    {
        id: 8,
        img: img8,
        date: "11/2024",
        caption: "Snow in saclay",
        folder: [Folders.Sac24],
    },
    {
        id: 9,
        img: img9,
        date: "11/2024",
        caption: "Snow in saclay",
        folder: [Folders.Sac24],
    },
    {
        id: 10,
        img: img10,
        date: "11/2024",
        caption: "Snow in saclay",
        folder: [Folders.Sac24],
    },
    {
        id: 11,
        img: best_24_jan,
        date: "01/2024",
        caption: "Asim and I in London in january 2024",
        folder: [Folders.Time, Folders.Lon23],
    },
    {
        id: 12,
        img: best_24_feb,
        date: "02/2024",
        caption: "I went to ski with a couple of friends, and this is in Chamonix",
        folder: [Folders.Time],
    },
    {
        id: 13,
        img: best_24_march,
        date: "03/2024",
        caption: "Graduation from my engineering school (Telecom SudParis, MSc in computer science)",
        folder: [Folders.Time],
    },
    {
        id: 14,
        img: best_24_march_gig,
        date: "03/2024",
        caption: "A gig I did with my group in my house in Saclay",
        folder: [Folders.Time],
    },
    {
        id: 15,
        img: best_24_may,
        date: "05/2024",
        caption: "A great night in Biarritz with my friend on the left",
        folder: [Folders.Time],
    },
    {
        id: 16,
        img: best_24_july,
        date: "07/2024",
        caption: "Great friends from Brive at Collonge-la-Rouge",
        folder: [Folders.Time],
    },
    {
        id: 17,
        img: best_24_aug,
        date: "08/2024",
        caption: "Olympic game opening ceremony with my close friends from Paris",
        folder: [Folders.Time],
    },
    {
        id: 18,
        img: best_24_sept,
        date: "09/2024",
        caption: "Surf at Biscarosse with good friends from Brive",
        folder: [Folders.Time],
    },
    {
        id: 19,
        img: best_24_oct,
        date: "11/2024",
        caption: "A good friend from high school in Paris wearing fancy hat",
        folder: [Folders.Time],
    },
    {
        id: 20,
        img: best_24_oct_gig,
        date: "10/2024",
        caption: "My sister and I singing for my grandma's 80th bday",
        folder: [Folders.Time],
    },
    {
        id: 21,
        img: best_24_november,
        date: "11/2024",
        caption: "My lovely friend at Versailles in an amazing restaurant, le camaleon",
        folder: [Folders.Time],
    },
    {
        id: 22,
        img: best_24_nov,
        date: "11/2024",
        caption: "My friends and I surfing in November in Britanny",
        folder: [Folders.Time],
    },
    {
        id: 23,
        img: amsterdam,
        date: "11/2024",
        caption: "Amsterdam under a rainbow",
        folder: [Folders.Sum24],
    },
    {
        id: 24,
        img: arradon,
        date: "04/2024",
        caption: "My glorious hometown <3",
        folder: [Folders.Sum24],
    },
    {
        id: 25,
        img: biarritz,
        date: "06/2024",
        caption: "Biarritz views",
        folder: [Folders.Sum24],
    },
    {
        id: 26,
        img: biarritz2,
        date: "06/2024",
        caption: "Biarritz views 2",
        folder: [Folders.Sum24],
    },
    {
        id: 27,
        img: bigben,
        date: "08/2024",
        caption: "London Baby",
        folder: [Folders.Sum24],
    },
    {
        id: 28,
        img: london,
        date: "08/2024",
        caption: "London again",

        folder: [Folders.Sum24],
    },
    {
        id: 29,
        img: la_rochelle,
        date: "07/2024",
        caption: "La Rochelle with my parents",
        folder: [Folders.Sum24],
    },
    {
        id: 30,
        img: laguo_guarda,
        date: "08/2024",
        caption: "Laguo Di Guarda",
        folder: [Folders.Sum24],
    },
    {
        id: 31,
        img: drums_normandy,
        date: "02/2025",
        caption: "Gig in Normandy",
        folder: [Folders.Sum24],
    },
    {
        id: 32,
        img: naples,
        date: "01/2025",
        caption: "Napoli sunset",
        folder: [Folders.Sum24],
    },
    {
        id: 33,
        img: porto_venere,
        date: "08/2024",
        caption: "Porto Venere at night",
        folder: [Folders.Sum24],
    },
    {
        id: 34,
        img: salerno_simona,
        date: "01/2025",
        caption: "Simona in her hometown, Salerno",
        folder: [Folders.Sum24],
    },
    {
        id: 35,
        img: turenne,
        date: "05/2024",
        caption: "Turenne Castle",
        folder: [Folders.Sum24],
    },
    {
        id: 36,
        img: venezia,
        date: "08/2024",
        caption: "Venezia Views",
        folder: [Folders.Sum24],
    },

];

// Helper function to get month name from a month number (01-12)
const getMonthName = (monthNumber: string) => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthIndex = parseInt(monthNumber, 10) - 1; // Convert to 0-based index
    return months[monthIndex];
};

const generateDateList = (): string[] => {
    const dates: string[] = [];
    const startYear = 2025;
    const endYear = 2020;

    for (let year = startYear; year >= endYear; year--) {
        for (let month = 11; month >= 0; month--) {
            const monthString = (month + 1).toString().padStart(2, '0');
            dates.push(`${monthString}/${year}`);
        }
    }
    return dates;
};

type GroupedImages = {
    [key: string]: ImageType[];
};

// Group images by date
const groupImagesByDate = (images: ImageType[]): GroupedImages => {
    return images.reduce((acc, image) => {
        if (!acc[image.date]) {
            acc[image.date] = [];
        }
        acc[image.date].push(image);
        return acc;
    }, {} as GroupedImages);
};
const GalleryContent: React.FC = () => {
    const groupedImages = groupImagesByDate(DatedImages);
    const dateList = generateDateList();

    let currentYear = ""; // To keep track of the last displayed year

    const [selectedAlbum, setSelectedAlbum] = useState<Folders | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleChange = (event: any) => {
        setSelectedAlbum(event.target.value);
    };

    return (
        <div className='flex justify-center'>
            {/* Modal for showing selected image in the forefront */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-full" />
                </div>
            )}

            <div>
                <select
                    value={selectedAlbum || ""}
                    onChange={(e) => setSelectedAlbum(e.target.value as Folders)}
                    className="p-4 py-2 rounded max-h-10 bg-slate-500"
                >
                    <option value="">All albums</option>
                    {Object.values(Folders).map((album) => (
                        <option key={album} value={album}>
                            {album}
                        </option>
                    ))}
                </select>

                {dateList.map(date => {
                    const [month, year] = date.split("/");
                    const showYear = year !== currentYear;
                    if (showYear) currentYear = year;

                    const monthName = getMonthName(month);
                    const filteredImages = groupedImages[date]?.filter(image =>
                        selectedAlbum ? image.folder?.includes(selectedAlbum) : true
                    ) || [];

                    return (
                        <div key={date}>
                            {filteredImages.length > 0 && (
                                <div className='text-right'>
                                    <div className='mt-2'>
                                        <h2 className='text-2xl'>{year}</h2>
                                        <div className='flex flex-col justify-center'>
                                            <h3 className='text-xl'>{monthName}</h3>
                                            <div className='border bg-slate-100' />
                                            {filteredImages.map(image => (
                                                <div key={image.id}>
                                                    <img
                                                        src={image.img}
                                                        alt={`Image ${image.id}`}
                                                        className="w-full max-w-2xl mt-2 cursor-pointer"
                                                        onClick={() => setSelectedImage(image.img)}
                                                    />
                                                    <div className='text-center'>
                                                        {image.caption}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const Gallery = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <StandardHeader title={title} date={""}
                content={<GalleryContent />} />
        </>
    );
};
