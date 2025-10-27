// components/MapDisplay.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { createCustomIcon } from "../../Single/MapUtils";
import { useEffect, useRef, useState } from "react";
import { StandardHeader } from "../../Single/StandardHeader";
import { blogPosts, MapEntry } from "../../data/datatype/data_maps"
import { Folders, DatedImages } from "../../data/datatype/data_img";
interface MapDisplayProps {
    entries: MapEntry[];
    title?: string;
    legend?: Record<string, string>; // e.g. { Plane: "red", Car: "orange" }
    getColor?: (entry: MapEntry) => string; // optional callback
    onClickMarker?: (entry: MapEntry) => void; // callback when a marker is clicked
    initialCenter?: [number, number];
    initialZoom?: number;
}

export const MapDisplay = ({
    entries,
    title,
    legend,
    getColor,
    onClickMarker,
    initialCenter = [20, 0],
    initialZoom = 5,
}: MapDisplayProps) => {
    const [hovered, setHovered] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [selectedPost, setSelectedPost] = useState<MapEntry | null>(null);
    const [viewMode, setViewMode] = useState<"map" | "posts">("map");
    const [activePostId, setActivePostId] = useState<number | null>(null);
    const postRefs = useRef<Record<number, HTMLDivElement | null>>({});
    const [expandedPostId, setExpandedPostId] = useState<number | null>(null);

    // For fan hover state per marker/post key
    const [hoveringFanKey, setHoveringFanKey] = useState<number | null>(null);

    // Carousel state (fullscreen)
    const [showCarousel, setShowCarousel] = useState(false);
    const [carouselImages, setCarouselImages] = useState<
        { img: string; folder?: string }[]
    >([]);
    const [carouselIndex, setCarouselIndex] = useState(0);

    const togglePostImages = (key: number) => {
        setExpandedPostId((prev) => (prev === key ? null : key));
    };

    const handleMarkerClick = (key: number, post: MapEntry) => {
        setSelectedPost(post);
        setActivePostId(key);
    };

    const postListRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                expandedPostId !== null &&
                postListRef.current &&
                !postListRef.current.contains(event.target as Node)
            ) {
                setExpandedPostId(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [expandedPostId]);

    const handlePostClick = (key: number) => {
        setActivePostId(key);
        setViewMode("posts");

        // scroll after view change
        setTimeout(() => {
            const element = postRefs.current[key];
            if (element) {
                const y = element.getBoundingClientRect().top + window.pageYOffset - 200;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }, 100);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (viewMode === "posts" && activePostId !== null) {
            setTimeout(() => {
                const element = postRefs.current[activePostId];
                if (element) {
                    const yOffset = -200;
                    const y =
                        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }, 100);
        }
    }, [viewMode, activePostId]);

    // Open carousel for a given set of images and starting index
    const openCarousel = (
        images: { img: string; folder?: string }[],
        startIndex = 0
    ) => {
        setCarouselImages(images);
        setCarouselIndex(startIndex);
        setShowCarousel(true);
    };

    const closeCarousel = () => setShowCarousel(false);
    const nextCarousel = () =>
        setCarouselIndex((i) => (i + 1) % Math.max(1, carouselImages.length));
    const prevCarousel = () =>
        setCarouselIndex((i) =>
            (i - 1 + Math.max(1, carouselImages.length)) % Math.max(1, carouselImages.length)
        );


    return (
        <>
            <div className="relative flex flex-col items-center">
                {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
                {/* @ts-ignore */}
                <MapContainer center={initialCenter}
                    zoom={initialZoom}
                    worldCopyJump={true}
                    scrollWheelZoom={false}
                    style={{
                        width: "100vw",        // full viewport width
                        height: "calc(100vh - 80px)",      // full viewport height
                        maxWidth: "100%",      // prevent overflow
                        maxHeight: "100%",     // prevent overflow
                        zIndex: 1,
                    }}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {Array.from((entries).entries()).map(([key, entry]) => {
                        // collect images for this post
                        const imagesForPost = (DatedImages?.filter((image) =>
                            entry.picturesFolder?.some((folder) =>
                                image.folder?.includes(folder)
                            )
                        ).map((img) => ({
                            img: img.img,
                            folder: img.folder?.map(String).join(", ") ?? "", // safely convert Folders[] to string
                        })) ?? []);

                        return (
                            <>
                                {/* @ts-ignore */}
                                <Marker key={entry.id} position={entry.GPS} icon={createCustomIcon(getColor ? getColor(entry) : entry.color ?? "red")}
                                    eventHandlers={{
                                        click: () => onClickMarker?.(entry),
                                        mouseover: () => setHovered(entry.id),
                                        mouseout: () => setHovered(null),
                                    }}
                                >
                                    <Popup>
                                        <div
                                            className="font-bold text-lg hover:bg-slate-100 cursor-pointer"
                                            onClick={() => handlePostClick(key)}
                                        >
                                            {entry.title + " - " + entry.date}
                                        </div>

                                        <br /> {entry.C02 + " kg CO2eq"}

                                        {/* 🍏 Fan-stacked mini gallery */}
                                        {imagesForPost.length > 0 && (
                                            <div
                                                className="relative mt-3 flex justify-center"
                                                onMouseEnter={() => setHoveringFanKey(key)}
                                                onMouseLeave={() => setHoveringFanKey((prev) => (prev === key ? null : prev))}
                                            >
                                                <div className="relative w-40 h-28">
                                                    {imagesForPost
                                                        .slice(0, 4)
                                                        .map((img, i, arr) => {
                                                            // base rotation and base x offset for stacked look
                                                            const baseRot = [-12, -4, 4, 12][i] ?? 0;
                                                            const baseOffset = (i - (arr.length - 1) / 2) * 6; // px offset for depth
                                                            const isHovered = hoveringFanKey === key;

                                                            // when hovered, fan out more and lift z-index + scale
                                                            const hoverScale = isHovered ? 1.6 : 1;
                                                            const hoverTranslateX = isHovered
                                                                ? (i - (arr.length - 1) / 2) * 44 // spread amount when hovered
                                                                : baseOffset;
                                                            const hoverRotate = isHovered ? 0 : baseRot;
                                                            const zIndex = isHovered ? 100 + i : 10 + i;

                                                            return (
                                                                <img
                                                                    key={i}
                                                                    src={img.img}
                                                                    alt={`${entry.title}-fan-${i}`}
                                                                    onClick={() => openCarousel(imagesForPost, i)}
                                                                    className="absolute top-0 left-1/4 -translate-x-1/2 object-cover rounded-xl shadow-md cursor-pointer transition-all duration-400 ease-out"
                                                                    style={{
                                                                        width: 80,
                                                                        height: 80,
                                                                        zIndex,
                                                                        transform: `translateX(${hoverTranslateX}px) rotate(${hoverRotate}deg) scale(${hoverScale})`,
                                                                        transition: "transform 420ms ease-out, box-shadow 250ms ease-out",
                                                                    }}
                                                                />
                                                            );
                                                        })}
                                                </div>
                                            </div>
                                        )}
                                    </Popup>
                                </Marker>
                            </>
                        );
                    })}

                </MapContainer>

                {
                    legend && (
                        <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-lg shadow-md border text-sm z-50">
                            <div className="font-semibold mb-1 text-gray-800 text-center">Legend</div>
                            {Object.entries(legend).map(([label, color]) => (
                                <div key={label} className="flex items-center gap-2 text-gray-700">
                                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
                                    {label}
                                </div>
                            ))}
                        </div>
                    )
                }
                {showCarousel && carouselImages.length > 0 && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-all duration-300"
                        onClick={closeCarousel} // closes when clicking outside the image
                    >
                        <div
                            className="relative flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()} // prevent closing when clicking on the image or controls
                        >
                            {/* Close button */}
                            <button
                                onClick={closeCarousel}
                                className="absolute top-6 right-6 text-white text-3xl font-bold px-3 py-1 rounded hover:opacity-80"
                                aria-label="Close"
                            >
                                ×
                            </button>

                            {/* Previous arrow */}
                            <button
                                onClick={prevCarousel}
                                className="absolute left-6 text-white text-4xl font-bold px-3 py-1 rounded hover:opacity-80"
                                aria-label="Previous"
                            >
                                ‹
                            </button>

                            {/* Image */}
                            <img
                                src={carouselImages[carouselIndex].img}
                                alt={`carousel-${carouselIndex}`}
                                className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl transition-transform duration-300 ease-in-out"
                            />

                            {/* Next arrow */}
                            <button
                                onClick={nextCarousel}
                                className="absolute right-6 text-white text-4xl font-bold px-3 py-1 rounded hover:opacity-80"
                                aria-label="Next"
                            >
                                ›
                            </button>

                            {/* Dots / index indicator */}
                            <div className="absolute bottom-8 flex gap-2">
                                {carouselImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCarouselIndex(i)}
                                        className={`w-3 h-3 rounded-full ${i === carouselIndex ? "bg-white" : "bg-white/40"
                                            }`}
                                        aria-label={`Go to image ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};


const Maps = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <StandardHeader title={title} date={date}
                content={<MapDisplay entries={[]} />} />

        </>
    );
};

export default Maps;