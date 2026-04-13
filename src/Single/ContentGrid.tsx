import React, { useState } from 'react';
import { DatedImages, Folders } from '../data/datatype/data_img';
import type { ImageType } from '../data/datatype/data_img';

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
    const startYear = 2030;
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

export const ContentGrid: React.FC = () => {
    const groupedImages = groupImagesByDate(DatedImages);
    const dateList = generateDateList();

    let currentYear = ""; // To keep track of the last displayed year
    // Define the type for the images

    const [selectedAlbum] = useState<Folders | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedImageInfo, setSelectedImageInfo] = useState<ImageType | null>(null);

    return (
        <div className='flex justify-center'>
            {/* Modal for showing selected image in the forefront */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="bg-white rounded-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                    >
                        {/* Image Section */}
                        <div className="md:w-2/3 bg-black flex items-center justify-center">
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="max-h-[80vh] w-auto object-contain"
                            />
                        </div>

                        {/* Caption / Info Section */}
                        <div className="md:w-1/3 p-4 flex flex-col">
                            <h3 className="font-semibold mb-2">Caption</h3>
                            <p className="text-sm text-gray-700 flex-1 overflow-y-auto">
                                {selectedImageInfo?.caption}
                            </p>

                            <button
                                onClick={() => setSelectedImage(null)}
                                className="mt-4 text-sm text-gray-500 hover:text-black self-end"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div>



                {dateList.map(date => {
                    const [year] = date.split("/");
                    const showYear = year !== currentYear;
                    if (showYear) currentYear = year;

                    const filteredImages = groupedImages[date]?.filter(image =>
                        image.displayOnHome && (selectedAlbum ? image.folder?.includes(selectedAlbum) : true)
                    ) || [];

                    return (
                        <div key={date}>
                            {filteredImages.length > 0 && (
                                <div className='text-right'>
                                    <div className='mt-2'>
                                        <div className="grid grid-cols-3 gap-6 mt-4">

                                            {filteredImages.map(image => (
                                                <div key={image.id} className="relative w-full aspect-square overflow-hidden rounded-lg">
                                                    <img
                                                        src={image.img}
                                                        alt={`Image ${image.id}`}
                                                        className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                                                        onClick={() => { setSelectedImage(image.img); setSelectedImageInfo(image) }}
                                                        loading="lazy"
                                                        decoding="async"
                                                    />
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

