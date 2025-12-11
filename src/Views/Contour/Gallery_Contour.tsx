import React, { useState } from 'react';
import { PicsHeader, PicsHeaderContour, StandardHeader } from '../../Single/StandardHeader';
import { DatedImages, Folders, ImageType } from '../../data/datatype/data_img';
import logo from "../../data/pics/wallpaper/logo_contour.svg"
import { Gig, Gigs_List } from '../Gigs/Gigs';

// Define the type for the images

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
    const endYear = 0;

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

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (

        <div className='flex justify-center'>
            {/* Modal for showing selected image in the forefront */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-yellow-100 bg-opacity-80 flex justify-center items-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-full" />
                </div>
            )}
            <div>



                {dateList.map(date => {
                    const [month, year] = date.split("/");
                    const showYear = year !== currentYear;
                    if (showYear) currentYear = year;

                    const monthName = getMonthName(month);
                    const filteredImages = groupedImages[date]?.filter(image =>
                        image.folder?.includes(Folders.Contour)) || [];

                    return (
                        <div key={date}>
                            {filteredImages.length > 0 && (
                                <div className='text-right font-black text-black'>
                                    <div className='mt-2'>
                                        <h2 className='text-2xl'>{year}</h2>
                                        <div className='flex flex-col justify-center'>
                                            <h3 className='text-xl'>{monthName}</h3>
                                            <div className='border bg-yellow-100' />
                                            {filteredImages.map(image => (
                                                <div key={image.id}>
                                                    <img
                                                        src={image.img}
                                                        alt={`Image ${image.id}`}
                                                        loading="lazy"
                                                        className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl mt-2 cursor-pointer"
                                                        onClick={() => setSelectedImage(image.img)}
                                                    />
                                                    <div className='text-center italic text-lg font-bold mt-2 mb-10'>
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

export const GalleryContour = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className='bg-yellow-400'>
                <PicsHeaderContour link={"/contour/1"} title={""} date={""}
                    content={<GalleryContent />} />
            </div>
        </>
    );
};
