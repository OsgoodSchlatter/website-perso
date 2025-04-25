import { Annecy } from "./TripsPosts/Annecy";
import { Biarritz } from "./TripsPosts/Biarritz";
import { Greece } from "./TripsPosts/Greece";
import { Indonesia } from "./TripsPosts/Indonesia";
import { London } from "./TripsPosts/London";
import { LuxGerNeth2022 } from "./TripsPosts/LuxGerNeth2022";
import { Lyon } from "./TripsPosts/Lyon";
import { Marseille } from "./TripsPosts/Marseille";
import { Mauritius } from "./TripsPosts/Mauritius";
import { Nice } from "./TripsPosts/Nice";
import { Norway } from "./TripsPosts/Norway";
import { Royan } from "./TripsPosts/Royan";
import { Santorini } from "./TripsPosts/Santorini";
import { Malaga } from "./TripsPosts/Malaga";
import { Tunisia } from "./TripsPosts/Tunisia";
import { Turkey } from "./TripsPosts/Turkey";
import { USA1 } from "./TripsPosts/USA1";
import { USA2 } from "./TripsPosts/USA2";
import { Yeu } from "./TripsPosts/Yeu";
import { Anglet } from "./TripsPosts/SanSeb";
import { Nice2 } from "./TripsPosts/Nice2";
import { Albi } from "./TripsPosts/Albi";
import { BxHayAmst23 } from "./TripsPosts/BxHayAmst23";
import { Bordeaux } from "./TripsPosts/Bordeaux";
import { SweDen } from "./TripsPosts/SweDen";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { createCustomIcon } from "../../Single/MapUtils";
import { StandardHeader } from "../../Single/StandardHeader";
import { useEffect, useRef, useState } from "react";
import { BlogPostType } from "../Home/Data";
import { Folders, DatedImages } from "../../data/data_img";

type TransportType = "Plane" | "Car" | "Train" | "Home";

type TravelContentComponent = React.FC<{ title: string; date: string }>;
interface TravelEntry {
  id: number;
  date: string;
  title: string;
  locations: string[];
  transport: TransportType;
  GPS: [number, number];
  C02: number;
  content?: TravelContentComponent;
  picturesFolder?: Folders[];
}

export const blogPosts: TravelEntry[] = [
  {
    id: 1,
    date: "2005",
    title: "Tunisia 🇹🇳",
    locations: ["Tunisia"],
    transport: "Plane",
    GPS: [36.47, 10.09],
    C02: 600,
    content: Tunisia,
  },
  {
    id: 2,
    date: "2012",
    title: "Turkey 🇹🇷",
    locations: ["Turkey"],
    transport: "Plane",
    GPS: [38.41885, 27.12872], // Example coordinates for Turkey (Ankara)
    C02: 1000,
    content: Turkey,
  },
  {
    id: 3,
    date: "2015",
    title: "Greece 🇬🇷 ",
    locations: ["Greece", "Bulgaria"],
    transport: "Plane",
    GPS: [37.9838, 23.7275], // Example coordinates for Greece (Athens)
    C02: 600,
    content: Greece,
  },

  {
    id: 4,
    date: "2016",
    title: "Norway 🇳🇴",
    locations: ["Norway"],
    transport: "Plane",
    GPS: [59.9139, 10.7522], // Example coordinates for Norway (Oslo)
    C02: 500,
    content: Norway,
  },
  {
    id: 5,
    date: "2018",
    title: "San Francisco 🇺🇸 ",
    locations: ["USA", "San F"],
    transport: "Plane",
    GPS: [37.7749, -122.4194], // Example coordinates for USA (San Francisco)
    C02: 3000,
    content: USA1,
  },
  {
    id: 6,
    date: "2017",
    title: "Indonesia 🇮🇩",
    locations: ["Indonesia"],
    transport: "Plane",
    GPS: [-6.2088, 106.8456], // Example coordinates for Indonesia (Jakarta)
    C02: 4000,
    content: Indonesia,
  },
  {
    id: 7,
    date: "2018",
    title: "New York City 🇺🇸",
    locations: ["USA"],
    transport: "Plane",
    GPS: [40.7128, -74.006], // Example coordinates for USA (New York City)
    C02: 1800,
    content: USA2,
  },
  {
    id: 8,
    date: "2019",
    title: "Marseille 🇫🇷",
    locations: ["Marseille", "France"],
    transport: "Plane",
    GPS: [43.2965, 5.3698], // Coordinates for Marseille, France
    C02: 150,
    content: Marseille,
  },
  {
    id: 9,
    date: "2019",
    title: "Malaga 🇪🇸",
    locations: ["Malaga", "Spain"],
    transport: "Plane",
    GPS: [36.7213, -4.4214], // Coordinates for Malaga, Spain
    C02: 400,
    content: Malaga,
    picturesFolder: [Folders.Malaga],
  },
  {
    id: 10,
    date: "2019",
    title: "Mauritius Island 🇲🇺",
    locations: ["Mauritius"],
    transport: "Plane",
    GPS: [-20.3484, 57.5522], // Coordinates for Mauritius Island
    C02: 3100,
    content: Mauritius,
  },
  {
    id: 11,
    date: "2019",
    title: "London 🇬🇧",
    transport: "Train",
    locations: ["London", "UK", "Great-Britain", "GB", "Angleterre"],
    GPS: [51.5074, -0.1278], // Coordinates for London, UK
    C02: 20,
    content: London,
  },
  {
    id: 12,
    date: "2019",
    title: "Santorini 🇬🇷",
    locations: ["Greece", "Santorini"],
    transport: "Plane",
    GPS: [36.3932, 25.4615], // Coordinates for Santorini, Greece
    C02: 800,
    content: Santorini,
  },
  {
    id: 13,
    date: "2020",
    title: "Annecy 🇫🇷",
    transport: "Plane",
    locations: ["Annecy", "France"],
    GPS: [45.8992, 6.1294], // Coordinates for Annecy, France
    C02: 278,
    content: Annecy,
  },
  {
    id: 14,
    date: "2020",
    title: "Royan 🇫🇷",
    transport: "Train",
    locations: ["Royan", "France"],
    GPS: [45.628, -1.0289],
    C02: 90,
    content: Royan,
  },
  {
    id: 15,
    date: "2020",
    title: "Biarritz 🇫🇷 & San Sebastian 🇪🇸",
    transport: "Train",
    locations: ["Biarritz", "France", "San Sebastian", "Spain"],
    GPS: [43.4832, -1.5586],
    C02: 200,
    content: Biarritz,
  },
  {
    id: 16,
    date: "2021",
    title: "Ile d'Yeu 🇫🇷",
    transport: "Train",
    locations: ["Ile d'Yeu", "Yeu", "France"],
    GPS: [46.7189, -2.3484],
    C02: 10,
    content: Yeu,
  },
  {
    id: 17,
    date: "2021",
    title: "Nice 🇫🇷",
    transport: "Train",
    locations: ["Nice", "France"],
    GPS: [43.7102, 7.262],
    C02: 50,
    content: Nice,
  },
  {
    id: 18,
    date: "2022",
    title: "Luxembourg 🇱🇺, Germany 🇩🇪 & The Netherlands 🇳🇱",
    transport: "Train",
    locations: ["Luxembourg", "Germany", "The Netherlands", "Netherlands"],
    GPS: [50.8503, 4.3517],
    C02: 20,
    content: LuxGerNeth2022,
  },
  {
    id: 19,
    date: "2022",
    title: "Lyon",
    transport: "Train",
    locations: ["Lyon", "France"],
    GPS: [45.764, 4.8357],
    C02: 5,
    content: Lyon,
  },
  {
    id: 20,
    date: "2022",
    title: "Anglet 🇫🇷 & San Sebastian 🇪🇸",
    locations: ["Anglet", "France", "San Sebastian", "Spain"],
    transport: "Train",
    GPS: [43.4789, -1.533],
    C02: 10,
    content: Anglet,
  },
  {
    id: 21,
    date: "2022",
    title: "Nice 🇫🇷",
    locations: ["Nice", "France"],
    transport: "Train",
    GPS: [43.7102, 7.262],
    C02: 5,
    content: Nice2,
  },
  {
    id: 22,
    date: "2023",
    title: "Albi 🇫🇷",
    locations: ["Albi", "France"],
    transport: "Train",
    GPS: [43.9298, 2.148],
    C02: 30,
    content: Albi,
  },
  {
    id: 23,
    date: "2023",
    title: "Bruxelles 🇧🇪, The Hague 🇳🇱, Amsterdam 🇳🇱",
    locations: [
      "Bruxelles",
      "Belgium",
      "The Hague",
      "Amsterdam",
      "Netherlands",
    ],
    transport: "Train",
    GPS: [50.8503, 4.3517],
    C02: 10,
    content: BxHayAmst23,
  },
  {
    id: 24,
    date: "2023",
    title: "Bordeaux 🇫🇷",
    locations: ["Bordeaux", "France"],
    transport: "Train",
    GPS: [44.8378, -0.5792],
    C02: 5,
    content: Bordeaux,
  },
  {
    id: 25,
    date: "2023",
    title: "Sweden 🇸🇪 ",
    locations: ["Sweden", "Denmark"],
    transport: "Train",
    C02: 60,
    GPS: [59.3293, 18.0686],
    content: SweDen,
    picturesFolder: [Folders.Sweden]
  },
  {
    id: 26,
    date: "2023",
    title: "Uppsala 🇸🇪 ",
    locations: ["Sweden", "Denmark"],
    transport: "Train",
    C02: 60,
    GPS: [59.858, 17.686],
    content: SweDen,
    picturesFolder: [Folders.UppSala]
  },
  {
    id: 26,
    date: "2023",
    title: "Denmark 🇩🇰",
    locations: ["Sweden", "Denmark"],
    transport: "Train",
    C02: 60,
    GPS: [55.6, 12.5686],
    content: SweDen,
    picturesFolder: [Folders.Denmark]

  },
  // recheck CO2
  {
    id: 27,
    date: "2023",
    title: "Berlin 🇩🇪",
    locations: ["Germany", "Berlin"],
    transport: "Train",
    C02: 60,
    GPS: [52.520007, 13.404954],
    content: SweDen,
  },
  {
    id: 28,
    date: "2022",
    title: "Frankfurt 🇩🇪",
    locations: ["Germany", "Frankfurt"],
    transport: "Train",
    C02: 20,
    GPS: [50.1109221, 8.6821267],
  },
  {
    id: 29,
    date: "2023",
    title: "Münster 🇩🇪",
    locations: ["Germany", "Münster"],
    transport: "Train",
    C02: 30,
    GPS: [51.961563, 7.628202],
  },
  {
    id: 30,
    date: "2023",
    title: "Amsterdam 🇳🇱",
    locations: ["Amsterdam", "Netherlands"],
    transport: "Train",
    C02: 20,
    GPS: [52.3730796, 4.89],
  },
  {
    id: 31,
    date: "2023",
    title: "Den Haag 🇳🇱",
    locations: ["Den Haag", "Netherlands"],
    transport: "Train",
    C02: 20,
    GPS: [52.0799838, 4.3113461],
  },
  {
    id: 32,
    date: "2024",
    title: "Milano 🇮🇹",
    locations: ["Milano", "Italy"],
    transport: "Car",
    C02: 120,
    GPS: [45.4654219, 9.1859243],
  },
  {
    id: 33,
    date: "2024",
    title: "Venise 🇮🇹",
    locations: ["Venise", "Italy"],
    transport: "Car",
    C02: 120,
    GPS: [45.4408474, 12.3155151],
  },
  {
    id: 34,
    date: "2024",
    title: "Porto Venere 🇮🇹",
    locations: ["Porto Venere", "Italy"],
    transport: "Car",
    C02: 120,
    GPS: [44.0519, 9.8352],
  },
  {
    id: 35,
    date: "2015",
    title: " Sofia 🇧🇬",
    locations: ["Sofia", "Bulgaria"],
    transport: "Plane",
    C02: 600,
    GPS: [42.6977082, 23.3218675],
  },

  {
    id: 36,
    date: "2016",
    title: " Montreal 🇨🇦",
    locations: ["Montreal", "Canda"],
    transport: "Plane",
    C02: 1800,
    GPS: [45.5016889, -73.567256],
  },
  {
    id: 38,
    date: "2016",
    title: " Boston 🇺🇸 ",
    locations: ["Boston", "USA"],
    transport: "Plane",
    C02: 1800,
    GPS: [42.3600825, -71.0588801],
  },
  {
    id: 39,
    date: "2018",
    title: " Los Angeles 🇺🇸 ",
    locations: ["Los Angeles", "USA"],
    transport: "Plane",
    C02: 3000,
    GPS: [34.052234, -118.243685],
  },
  {
    id: 40,
    date: "2018",
    title: " Las Vegas 🇺🇸 ",
    locations: ["Las Vegas", "USA"],
    transport: "Plane",
    C02: 3000,
    GPS: [36.169941, -115.13983],
  },
  {
    id: 41,
    date: "2024",
    title: "Geneve 🇨🇭",
    locations: ["Geneve", "Suisse"],
    transport: "Train",
    C02: 50,
    GPS: [46.2043907, 6.1431577],
  },
  {
    id: 42,
    date: "2024",
    title: "Canaries 🇪🇸",
    locations: ["Canaries", "Spain"],
    transport: "Plane",
    C02: 200,
    GPS: [28.291564, -16.62913],
  },
  {
    id: 43,
    date: "2012",
    title: "Barcelona 🇪🇸",
    locations: ["Barcelona", "Spain"],
    transport: "Car",
    C02: 40,
    GPS: [41.23, 2.154],
  },
  {
    id: 44,
    date: "2010",
    title: "Portugual 🇵🇹",
    locations: ["Portugual", "Porto"],
    transport: "Car",
    C02: 100,
    GPS: [41.14945, -8.61079],
  },
  {
    id: 45,
    date: "2024",
    title: "Brive-la-Gaillarde",
    locations: ["Brive", "France"],
    transport: "Car",
    C02: 0,
    GPS: [45.1585, 1.53324],
  },
  {
    id: 46,
    date: "2024",
    title: "Rennes",
    locations: ["Rennes", "France"],
    transport: "Home",
    C02: 0,
    GPS: [48.11134, -1.68002],
  },
  {
    id: 47,
    date: "2024",
    title: "Vannes",
    locations: ["Vannes", "France"],
    transport: "Home",
    C02: 0,
    GPS: [47.65868, -2.75991],
  },
  {
    id: 48,
    date: "2024",
    title: "Saclay",
    locations: ["Saclay", "France"],
    transport: "Home",
    C02: 0,
    GPS: [48.73052, 2.17258],
  },
  {
    id: 49,
    date: "2024",
    title: "Munich",
    locations: ["Munich", "Germany"],
    transport: "Train",
    C02: 7,
    GPS: [48.1351253, 11.5819806],
  },
  {
    id: 50,
    date: "2024",
    title: "Lille",
    locations: ["Lille", "France"],
    transport: "Train",
    C02: 1,
    GPS: [50.62925, 3.057256],
  },
  {
    id: 50,
    date: "2025",
    title: "Salerno",
    locations: ["Salerno", "Italy"],
    transport: "Train",
    C02: 90,
    GPS: [40.6824408, 14.7680961],
  },
  {
    id: 51,
    date: "2024",
    title: "Luxembourg",
    locations: ["Luxembourg", "Luxembourg"],
    transport: "Train",
    C02: 5,
    GPS: [49.8157635, 6.1315139],
  },
  {
    id: 52,
    date: "2024",
    title: "Zurich",
    locations: ["Zurich", "Switzerland"],
    transport: "Train",
    C02: 10,
    GPS: [47.3686498, 8.5391825],
  },
  {
    id: 53,
    date: "2014",
    title: "Geneva",
    locations: ["Geneva", "Switzerland"],
    transport: "Car",
    C02: 100,
    GPS: [46.2043907, 6.1431577],
  },
];

const transportColors: Record<TransportType, string> = {
  Plane: "red",
  Car: "orange",
  Train: "green",
  Home: "blue",
};



// Function to get the color based on the transport type
const getColorForTransport = (transport: TransportType): string => {
  return transportColors[transport];
};
export const TripsContent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedPost, setSelectedPost] = useState<TravelEntry | null>(null);
  const [viewMode, setViewMode] = useState<"map" | "posts">("map");
  const [activePostId, setActivePostId] = useState<number | null>(null);
  const postRefs = useRef<Record<number, HTMLDivElement | null>>({}); // to scroll to the post
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);

  const togglePostImages = (key: number) => {
    setExpandedPostId(prev => (prev === key ? null : key)); // collapse if same, open if different
  };

  const handleMarkerClick = (key: number, post: TravelEntry) => {
    setSelectedPost(post);
    setActivePostId(key); // Set active post first
    // Change to "posts" view

    // Small delay to ensure the state has been updated and rendered
  };
  const postListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        expandedPostId !== null &&
        postListRef.current &&
        !postListRef.current.contains(event.target as Node)
      ) {
        setExpandedPostId(null); // Collapse when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandedPostId]);

  const handlePostClick = (key: number) => {
    // This handles clicking on post details to switch to the posts view and scroll
    setActivePostId(key);
    setViewMode("posts");
    setViewMode("posts");

    // Trigger scrolling with a slight delay to ensure the state has been updated
    setTimeout(() => {
      const element = postRefs.current[key];
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset - 200;
        window.scrollTo({ top: y, behavior: "smooth" });
        console.log(element.getBoundingClientRect().top + window.pageYOffset);
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

  // Use this useEffect to trigger scrolling when viewMode or activePostId changes
  useEffect(() => {
    if (viewMode === "posts" && activePostId !== null) {
      setTimeout(() => {
        const element = postRefs.current[activePostId];
        if (element) {
          const yOffset = -200; // Adjust as needed
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [viewMode, activePostId]);

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
          <div>
            {/* @ts-ignore */}
            <MapContainer center={[47.65, -2.7608]}
              zoom={2}
              worldCopyJump={true}
              scrollWheelZoom={false}
              style={{
                width: isMobile ? "350px" : "625px",
                height: isMobile ? "300px" : "500px",
                zIndex: 1,
              }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <div className="flex flex-wrap justify-evenly font-bold">
                {Array.from(blogPosts.entries()).map(([key, value]) => (
                  <>
                    {/* @ts-ignore */}
                    <Marker key={key} position={value.GPS} icon={createCustomIcon(
                      getColorForTransport(value.transport)
                    )}
                      eventHandlers={{
                        click: () => handleMarkerClick(key, value),
                      }}
                    >
                      <Popup>
                        <div
                          className="font-bold text-lg hover:bg-slate-100 "
                          onClick={() => {
                            const postId = Array.from(blogPosts.entries()).find(
                              ([_, value]) =>
                                value.title === selectedPost!.title
                            )?.[0]!;
                            console.log(
                              "Clicked preview card, post ID:",
                              postId
                            );
                            handlePostClick(postId);
                          }}
                        >
                          {value.title + " - " + value.date}
                        </div>
                        <br /> {value.C02 + " kg CO2eq"}
                      </Popup>
                    </Marker>
                  </>
                ))}
              </div>
            </MapContainer>
            <div className="text-lg mt-2 text-center">
              🔴: plane, 🟢: train, 🟠: car or bus, 🔵: home
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
              const postId = Array.from(blogPosts.entries()).find(
                ([_, value]) => value.title === selectedPost.title
              )?.[0]!;
              console.log("Clicked preview card, post ID:", postId);
              handlePostClick(postId);
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
            {DatedImages?.filter(
              (image) =>
                selectedPost.picturesFolder?.some(folder => image.folder?.includes(folder))
            ).map((img) => (
              <img
                src={img.img}
                className="w-full max-w-2xl mt-2"
              />
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

                className={` mb-3 border-b pb-2 px-2 py-1 rounded ${activePostId === key
                  ? "bg-yellow-100 text-black border-yellow-500"
                  : ""
                  }`}
                onClick={() => handlePostClick(key)} // Click to switch view and scroll
              >
                <div className="flex justify-between items-start w-full">
                  <div>
                    <div className="text-lg font-medium">{value.title}</div>
                    <div className="text-sm text-gray-600">{value.date}</div>
                  </div>
                  <button
                    onClick={() => togglePostImages(key)}
                    className="mt-2 text-sm text-blue-500 underline p-1 bg-blue-100 rounded"
                  >
                    {expandedPostId === key ? "Hide" : "Show"}
                  </button>
                </div>
                <div>
                  {expandedPostId === key && DatedImages?.filter(
                    (image) =>
                      value.picturesFolder?.some(folder => image.folder?.includes(folder))
                  ).map((img) => (
                    <img
                      src={img.img}
                      className="w-full max-w-2xl mt-2"
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

const intro = <div></div>;
export const Trips = () => {
  return (
    <StandardHeader
      title={"Destinations list"}
      date={"2024"}
      comment={intro}
      content={<TripsContent />}
    />
  );
};
