import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { createCustomIcon } from "../../Single/MapUtils";
import { StandardHeader } from "../../Single/StandardHeader";
import { useEffect, useRef, useState } from "react";
import { BlogPostType } from "../Home/Data";
import { Folders, DatedImages } from "../../data/datatype/data_img";
import { blogPosts, TravelEntry } from "../../data/datatype/data_trip";

type TransportType = "Plane" | "Car" | "Train" | "Home";

const transportColors: Record<TransportType, string> = {
  Plane: "red",
  Car: "orange",
  Train: "green",
  Home: "blue",
};

const getColorForTransport = (transport: TransportType): string => {
  return transportColors[transport];
};

export const TripsContent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedPost, setSelectedPost] = useState<TravelEntry | null>(null);
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

  const handleMarkerClick = (key: number, post: TravelEntry) => {
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
    <div className="flex flex-col items-center">
      {/* Toggle Button */}
      <div className="sticky top-32 left-full self-start z-50 ">
        <div className="w-full flex justify-start px-4 mb-4">
          <div className="inline-flex rounded-md shadow overflow-hidden border border-gray-300">
            <button
              onClick={() => setViewMode("map")}
              className={`px-4 py-2 font-medium text-sm transition ${viewMode === "map"
                ? "bg-gray-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              Map
            </button>
            <button
              onClick={() => setViewMode("posts")}
              className={`px-4 py-2 font-medium text-sm transition ${viewMode === "posts"
                ? "bg-gray-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              Posts
            </button>
          </div>
        </div>
      </div>

      {/* MAP VIEW */}
      {viewMode === "map" && (
        <div className="flex justify-center rounded">
          <div className="relative">
            {/* @ts-ignore */}
            <MapContainer center={[47.65, -2.7608]}
              zoom={2}
              worldCopyJump={true}
              scrollWheelZoom={false}
              style={{
                width: isMobile ? "350px" : "700px",
                height: isMobile ? "300px" : "500px",
                zIndex: 1,
              }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <div className="flex flex-wrap justify-evenly font-bold">
                {Array.from(blogPosts.entries()).map(([key, value]) => {
                  // collect images for this post
                  const imagesForPost = (DatedImages?.filter((image) =>
                    value.picturesFolder?.some((folder) =>
                      image.folder?.includes(folder)
                    )
                  ).map((img) => ({
                    img: img.img,
                    folder: img.folder?.map(String).join(", ") ?? "", // safely convert Folders[] to string
                  })) ?? []);

                  return (
                    <>
                      {/* @ts-ignore */}
                      <Marker key={key} position={value.GPS} icon={createCustomIcon(getColorForTransport(value.transport))}
                        eventHandlers={{
                          click: () => handleMarkerClick(key, value),
                        }}
                      >
                        <Popup>
                          <div
                            className="font-bold text-lg hover:bg-slate-100 cursor-pointer"
                            onClick={() => handlePostClick(key)}
                          >
                            {value.title + " - " + value.date}
                          </div>

                          <br /> {value.C02 + " kg CO2eq"}

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
                                        alt={`${value.title}-fan-${i}`}
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
              </div>
            </MapContainer>
            {/* Legend Overlay */}
            <div className="absolute bottom-14 right-2 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-md text-sm z-[1000] border border-gray-300">
              <div className="font-semibold mb-1 text-gray-800 text-center">Legend</div>
              <div className="flex flex-col gap-1 text-gray-700">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: transportColors.Plane }}
                  ></span>
                  Plane
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: transportColors.Car }}
                  ></span>
                  Car / Bus
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: transportColors.Train }}
                  ></span>
                  Train
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: transportColors.Home }}
                  ></span>
                  Home
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POST DETAILS (from map click or post detail click) */}
      {viewMode === "map" && selectedPost && (
        <div
          className="mt-4 p-4 border rounded bg-gray-100 w-full max-w-2xl cursor-pointer hover:bg-gray-200 transition"
          title="Click to view full post"
        >
          <h2
            className="text-xl font-bold text-black"
            onClick={() => {
              // find id by matching selectedPost (blogPosts is a Map)
              const arr = Array.from(blogPosts.entries()) as [number, TravelEntry][];
              const postId = arr.find(([, v]) => v.title === selectedPost.title)?.[0];
              if (postId !== undefined) handlePostClick(postId);
            }}
          >
            {selectedPost.title}
          </h2>
          <p className="text-black">
            <strong>Date:</strong> {selectedPost.date}
          </p>
          <p className="text-black">
            <strong>Location:</strong> {selectedPost.locations.join(", ")}
          </p>
          <p className="text-black">
            <strong>Transport:</strong> {selectedPost.transport}
          </p>
          <p className="text-black">
            <strong>CO2 Emissions:</strong> {selectedPost.C02} kg CO2eq
          </p>
          <div>
            {DatedImages?.filter((image) =>
              selectedPost.picturesFolder?.some((folder) =>
                image.folder?.includes(folder)
              )
            ).map((img, idx) => (
              <img key={idx} src={img.img} className="w-full max-w-2xl mt-2" />
            ))}
          </div>
        </div>
      )}

      {/* POSTS LIST VIEW */}
      {viewMode === "posts" && (
        <div className="w-full max-w-2xl px-4">
          {Array.from(blogPosts.entries())
            .sort(
              ([, a], [, b]) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map(([key, value]) => (
              <div
                key={key}
                ref={(el) => {
                  postRefs.current[key] = el;
                  if (expandedPostId === key) {
                    postListRef.current = el;
                  }
                }}
                className={` mb-3 border-b pb-2 px-2 py-1 rounded ${activePostId === key ? "bg-yellow-100 text-black border-yellow-500" : ""
                  }`}
                onClick={() => handlePostClick(key)}
              >
                <div className="flex justify-between items-start w-full">
                  <div>
                    <div className="text-lg font-medium">{value.title}</div>
                    <div className="text-sm text-gray-600">{value.date}</div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePostImages(key);
                    }}
                    className="mt-2 text-sm text-blue-500 underline p-1 bg-blue-100 rounded"
                  >
                    {expandedPostId === key ? "Hide" : "Show"}
                  </button>
                </div>
                <div>
                  {expandedPostId === key &&
                    DatedImages?.filter((image) =>
                      value.picturesFolder?.some((folder) => image.folder?.includes(folder))
                    ).map((img, idx) => (
                      <img key={idx} src={img.img} className="w-full max-w-2xl mt-2" />
                    ))}
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Fullscreen Carousel Overlay */}
      {/* Fullscreen Carousel Overlay */}
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
  );
};

const intro = <div></div>;
export const Trips = () => {
  return <StandardHeader title={" "} date={""} comment={intro} content={<TripsContent />} />;
};
