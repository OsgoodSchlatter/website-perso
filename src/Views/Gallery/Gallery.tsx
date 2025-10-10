import React, { useState } from 'react';
import { PicsHeader, StandardHeader } from '../../Single/StandardHeader';
import { DatedImages, Folders, ImageType } from '../../data/datatype/data_img';

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

    const [selectedAlbum, setSelectedAlbum] = useState<Folders | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

                <div className='flex justify-between'>
                    <div className="md:text-4xl text-3xl font-bold italic">{"photo gallery"}</div>
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
                </div>

                {dateList.map(date => {
                    const [month, year] = date.split("/");
                    const showYear = year !== currentYear;
                    if (showYear) currentYear = year;

                    const monthName = getMonthName(month);
                    const filteredImages = groupedImages[date]?.filter(image =>
                        selectedAlbum ? image.folder?.includes(selectedAlbum) : true && image.displayOnHome
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

export const Gallery = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <PicsHeader title={""} date={""}
                content={<GalleryContent />} />
        </>
    );
};
