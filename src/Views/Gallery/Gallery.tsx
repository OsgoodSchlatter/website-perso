import React from 'react';
import img1 from "./nov/IMG20241102161449.jpg";
import img2 from "./nov/IMG20241101130541.jpg";
import img3 from "./2023_dec/xmas_2023.jpg"
import img4 from "./2024_jan/1.jpg"
import img5 from "./2024_jan/2.jpg"
import img6 from "./2024_jan/3.jpg"

import { StandardHeader } from '../../Single/StandardHeader';

// Define the type for the images
type ImageType = {
    id: number;
    img: string; // URL or import of the image
    date: string; // Format "MM/YYYY"
};

// Example images array
const DatedImages: ImageType[] = [
    {
        id: 1,
        img: img1,
        date: "11/2024"
    },
    {
        id: 2,
        img: img2,
        date: "11/2024"
    },
    {
        id: 3,
        img: img3,
        date: "12/2023"
    },
    {
        id: 4,
        img: img4,
        date: "01/2024"
    }, {
        id: 5,
        img: img5,
        date: "01/2024"
    }, {
        id: 6,
        img: img6,
        date: "01/2024"
    },
    // Add more images as needed
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
    const startYear = 2024;
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

    return (
        <div className='flex justify-center'>
            <div>
                {dateList.map(date => {
                    const [month, year] = date.split("/");
                    console.log(groupedImages[date] ? "oui" + date : " non" + date)
                    // Only display the year if it's different from the last year displayed
                    const showYear = year !== currentYear;
                    if (showYear) currentYear = year;

                    const monthName = getMonthName(month); // Convert month number to name

                    return (
                        <div>
                            {
                                groupedImages[date] ?
                                    <div className='text-right mt-4' key={date}>
                                        {<h2 className='text-xl'>{year}</h2>}
                                        <div className='border bg-slate-100' />
                                        <div className='flex flex-col justify-center'>
                                            <h3>{monthName}</h3>
                                            {groupedImages[date] ? (
                                                groupedImages[date].map(image => (
                                                    <img
                                                        key={image.id}
                                                        src={image.img}
                                                        alt={`Image ${image.id}`}
                                                        className="w-full max-w-2xl mt-2"
                                                    />

                                                ))
                                            ) : (
                                                <p></p>
                                            )}
                                        </div>
                                    </div>
                                    : <></>}
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
            <StandardHeader title={title} date={date}
                content={<GalleryContent />} />
        </>
    );
};
