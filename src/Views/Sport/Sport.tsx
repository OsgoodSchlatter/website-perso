import { Header } from "../../Single/Header";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { createCustomIcon } from "../../Single/MapUtils";
import { useEffect, useState } from "react";
import planche from "./planche.jpg"
import para from "./paragliding.png"
import surf1 from "./surf_biarritz.jpg"
import surf2 from "./surf_biarritz2.jpg"
import surf3 from "./surf_biarritz3.jpg"
import surf4 from "./surf-bisca.jpg"
import ski1 from "./ski_2alpes.jpg"
import ski2 from "./ski_2alpes2.jpg"
import ski3 from "./ski.jpg"
import ski4 from "./ski2.jpeg"
import chamonix from "./chamonix.jpg"
import surf_la_guerite from "./surf_la_guerite.jpg"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';




import 'leaflet/dist/leaflet.css';
import { StandardHeader } from "../../Single/StandardHeader";

type SportType = "Surf" | "Ski" | "Paragliding";
type LocationType = "Annecy" | "Canaries" | "Los Angeles" | "Biarritz" | "Anglet" | "Le grand bornand" | "Biscarosse" | "La guerite" | "USA" | "FR" | "Val Thorens" | "Alpes d'Huez" | "Chamonix" | "Les Deux Alpes";

interface SportLocationEntry {
  id: number;
  date: string;
  title: string;
  locations?: LocationType[];
  sport: SportType;
  GPS: [number, number];
  C02: number;
}

interface PhotoLocationType {
  img_source: string;
  location: LocationType;
}
export const PhotoLocationEntry: PhotoLocationType[] = [
  {
    img_source: ski1,
    location: "Les Deux Alpes"
  },
  {
    img_source: ski2,
    location: "Les Deux Alpes"
  },
  {
    img_source: ski3,
    location: "Le grand bornand"
  },
  {
    img_source: surf1,
    location: "Biarritz"
  },
  {
    img_source: surf2,
    location: "Biarritz"
  },
  {
    img_source: surf3,
    location: "Biarritz"
  },
  {
    img_source: surf4,
    location: "Biscarosse"
  },
  {
    img_source: chamonix,
    location: "Chamonix"
  },
  {
    img_source: para,
    location: "Annecy"
  },
  {
    img_source: surf_la_guerite,
    location: "La guerite"
  }
]


const sportColors: Record<SportType, string> = {
  Paragliding: "orange",
  Ski: "green",
  Surf: "blue"
};

// Function to get the color based on the transport type
const getColorForSport = (sport: SportType): string => {
  return sportColors[sport];
};

const ResizeMap = () => {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
};

export const SportLocations: SportLocationEntry[] = [
  {
    id: 1,
    date: "2015",
    title: "Surf at Canaries",
    locations: ["Canaries"],
    sport: "Surf",
    GPS: [28.291564, -16.629130],
    C02: 600,
  },
  {
    id: 2,
    date: "2018",
    title: " Surf at Los Angeles 🇺🇸 ",
    locations: ["Los Angeles", "USA"],
    sport: "Surf",
    C02: 3000,
    GPS: [34.052234, - 118.243685],
  },
  {
    id: 3,
    date: "2024",
    title: " Surf at Biarritz ",
    locations: ["Biarritz", "FR"],
    sport: "Surf",
    C02: 10,
    GPS: [43.47114, - 1.55273],
  },
  {
    id: 4,
    date: "2022",
    title: " Surf at Anglet ",
    locations: ["Anglet", "FR"],
    sport: "Surf",
    C02: 10,
    GPS: [43.4789, -1.5330],
  },
  {
    id: 5,
    date: "2024",
    title: " Surf at Biscarosse ",
    locations: ["Biscarosse", "FR"],
    sport: "Surf",
    C02: 10,
    GPS: [44.44498, - 1.25374],
  },
  {
    id: 5,
    date: "2024",
    title: " Surf at La Guérite ",
    locations: ["La guerite", "FR"],
    sport: "Surf",
    C02: 10,
    GPS: [47.59269, -3.14861],
  },
  {
    id: 6,
    date: "2020",
    title: " Ski at Val Thorens ",
    locations: ["Val Thorens", "FR"],
    sport: "Ski",
    C02: 10,
    GPS: [45.29791, 6.58227],
  },
  {
    id: 7,
    date: "2022",
    title: " Ski at Alpes d'Huez  ",
    locations: ["Alpes d'Huez", "FR"],
    sport: "Ski",
    C02: 10,
    GPS: [45.09240, 6.06994],
  },
  {
    id: 8,
    date: "2024",
    title: " Ski at Chamonix  ",
    locations: ["Chamonix", "FR"],
    sport: "Ski",
    C02: 10,
    GPS: [45.92467, 6.87275],
  },
  {
    id: 9,
    date: "2024",
    title: " Ski at Les Deux Alpes  ",
    locations: ["Les Deux Alpes", "FR"],
    sport: "Ski",
    C02: 10,
    GPS: [45.00999, 6.12376],
  },
  {
    id: 10,
    date: "2024",
    title: " Ski at Le Grand Bornand  ",
    locations: ["Le grand bornand"],
    sport: "Ski",
    C02: 10,
    GPS: [45.94187, 6.42715],
  },
  {
    id: 11,
    date: "2024",
    title: " Ski at La Plagne",
    sport: "Ski",
    C02: 10,
    GPS: [45.50430, 6.70491],
  },
  {
    id: 12,
    date: "2018",
    title: " Ski at Les Menuires",
    sport: "Ski",
    C02: 10,
    GPS: [45.32427, 6.53890],
  },
  {
    id: 13,
    date: "2017",
    title: " Ski at Les Saisies",
    sport: "Ski",
    C02: 10,
    GPS: [45.75733, 6.53945],
  },
  {
    id: 13,
    date: "2019",
    title: " Ski at Les Gets",
    sport: "Ski",
    C02: 10,
    GPS: [46.15510, 6.66333],
  },
  {
    id: 14,
    date: "2012",
    title: " Ski at Piau Engaly",
    sport: "Ski",
    C02: 10,
    GPS: [42.78021, 0.15861],
  },
  {
    id: 15,
    date: "2020",
    title: " Paragliding at Annecy",
    locations: ["Annecy"],
    sport: "Paragliding",
    C02: 10,
    GPS: [45.8992, 6.1294],
  },
];
const SportContent = () => {
  const [selectedPost, setSelectedPost] = useState<SportLocationEntry | null>(SportLocations[2]); // State to store the selected post

  const handleMarkerClick = (post: SportLocationEntry) => {
    setSelectedPost(post); // Update the state with the selected post
  };
  // Function to render content based on selected sport
  const renderSportContent = () => {
    return (
      <>
        <div className="flex items-center justify-center">
          {/* @ts-ignore */}
          <MapContainer center={[40.65, -20.7608]} worldCopyJump={true} zoom={1} scrollWheelZoom={false} style={{ width: `700px`, height: `400px`, zIndex: 1 }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {SportLocations.map((value) => (
              <>
                {/* @ts-ignore */}
                <Marker key={value.id} position={value.GPS} icon={createCustomIcon(getColorForSport(value.sport))} eventHandlers={{
                  click: () => handleMarkerClick(value),
                }}>
                  <Popup>
                    <div className="font-bold text-lg">
                      {value.title + " - " + value.date}
                    </div>
                    <br />
                  </Popup>
                </Marker>
              </>
            ))}
            <ResizeMap />
          </MapContainer>
        </div>
        (🟢: ski, 🟠: paragliding, 🔵: surf)
        {
          selectedPost && (
            <div className="mt-4 p-4 border rounded bg-gray-100">
              <h2 className="text-xl font-bold text-black">{selectedPost.title}</h2>
              <p className="text-black"><strong >Date:</strong> {selectedPost.date}</p>
              <p className="text-black"><strong>Location:</strong> {selectedPost.locations?.join(", ")}</p>
              <p className="text-black"><strong >Photos:</strong> {PhotoLocationEntry.filter(post =>
                selectedPost.locations?.some(location => location === post.location)).map(img => (
                  <>
                    <img
                      src={img.img_source}
                      className="w-full max-w-2xl mt-2"
                    />
                  </>
                ))}</p>
            </div>
          )
        }
      </>
    );
  };

  return (
    <>
      {renderSportContent()}
    </>
  );
};

export const Sport = ({ title, date }: { title: string, date: string }) => {
  return (
    <>
      <StandardHeader title={title} date={""}
        content={<SportContent />} />
    </>
  );
};