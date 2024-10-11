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
import ski5 from "./ski3.jpg"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';




import 'leaflet/dist/leaflet.css';

type SportType = "Surf" | "Ski" | "Paragliding";

interface SportLocationEntry {
  id: number;
  date: string;
  title: string;
  locations?: string[];
  sport: SportType;
  GPS: [number, number];
  C02: number;
}

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
    locations: ["Biarritz", "Fr"],
    sport: "Surf",
    C02: 10,
    GPS: [43.47114, - 1.55273],
  },
  {
    id: 4,
    date: "2022",
    title: " Surf at Anglet ",
    locations: ["Anglet", "Fr"],
    sport: "Surf",
    C02: 10,
    GPS: [43.4789, -1.5330],
  },
  {
    id: 5,
    date: "2024",
    title: " Surf at Biscarosse ",
    locations: ["Biscarosse", "Fr"],
    sport: "Surf",
    C02: 10,
    GPS: [44.44498, - 1.25374],
  },
  {
    id: 5,
    date: "2024",
    title: " Surf at La Guérite ",
    locations: ["La guerite", "Fr"],
    sport: "Surf",
    C02: 10,
    GPS: [47.59269, -3.14861],
  },
  {
    id: 6,
    date: "2024",
    title: " Ski at Val Thorens ",
    locations: ["Val Thorens", "Fr"],
    sport: "Ski",
    C02: 10,
    GPS: [45.29791, 6.58227],
  },
  {
    id: 7,
    date: "2024",
    title: " Ski at Alpes d'Huez  ",
    locations: ["Alpes d'Huez ", "Fr"],
    sport: "Ski",
    C02: 10,
    GPS: [45.09240, 6.06994],
  },
  {
    id: 8,
    date: "2024",
    title: " Ski at Chamonix  ",
    locations: ["Chamonix ", "Fr"],
    sport: "Ski",
    C02: 10,
    GPS: [45.92467, 6.87275],
  },
  {
    id: 9,
    date: "2024",
    title: " Ski at Les Deux Alpes  ",
    locations: ["Les Deux Alpes ", "Fr"],
    sport: "Ski",
    C02: 10,
    GPS: [45.00999, 6.12376],
  },
  {
    id: 10,
    date: "2024",
    title: " Ski at Le Grand Bornand  ",
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
    date: "2024",
    title: " Ski at Les Menuires",
    sport: "Ski",
    C02: 10,
    GPS: [45.32427, 6.53890],
  },
  {
    id: 13,
    date: "2024",
    title: " Ski at Les Saisies",
    sport: "Ski",
    C02: 10,
    GPS: [45.75733, 6.53945],
  },
  {
    id: 13,
    date: "2024",
    title: " Ski at Les Gets",
    sport: "Ski",
    C02: 10,
    GPS: [46.15510, 6.66333],
  },
  {
    id: 14,
    date: "2024",
    title: " Ski at Piau Engaly",
    sport: "Ski",
    C02: 10,
    GPS: [42.78021, 0.15861],
  },
  {
    id: 15,
    date: "2020",
    title: " Paragliding at Piau Engaly",
    sport: "Paragliding",
    C02: 10,
    GPS: [45.8992, 6.1294],
  },




];
export const Sport = () => {
  const [selectedSport, setSelectedSport] = useState<SportType>("Surf"); // Default to "Surf"

  // Function to render content based on selected sport
  const renderSportContent = () => {
    switch (selectedSport) {
      case "Surf":
        return (
          <div className="p-2 mt-4 rounded bg-slate-100 ">
            <div className="text-xl font-bold ">Surf 🏄</div>
            Here are a couple of surf spots I have had the opportunity to go.
            <div className="flex items-center justify-center my-2">
              {/* @ts-ignore */}
              <MapContainer center={[40.65, -20.7608]} zoom={1} scrollWheelZoom={false} style={{ width: `300px`, height: `300px` }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {SportLocations.filter(location => location.sport === "Surf").map((value) => (
                  <>
                    {/* @ts-ignore */}
                    <Marker key={value.id} position={value.GPS} icon={createCustomIcon(getColorForSport(value.sport))}>
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
            Here is my board (OLAIAN board Malibu 8'2 500 ):
            <div className="flex justify-center">
              <img src={planche} className="px-2 border-b-2 m-2" width="200" alt="Image" />
            </div>
            Here is me surfing :
            <Carousel>
              <div>
                <img src={surf1} className="px-2 border-b-2 m-2" width="300" alt="Image" />
              </div>
              <div>
                <img src={surf2} className="px-2 border-b-2 m-2" width="300" alt="Image" />
              </div>
              <div>
                <img src={surf3} className="px-2 border-b-2 m-2" width="450" alt="Image" />
              </div>
              <div >
                <img src={surf4} className="px-2 border-b-2 m-2" width="200" alt="Image" />
              </div>
            </Carousel>
          </div>
        );

      case "Ski":
        return (
          <div className="p-2 mt-4 rounded bg-slate-100 ">
            <div className="text-xl font-bold ">Ski ⛷️</div>
            Here are a couple of ski spots I have had the opportunity to go.
            <div className="flex items-center justify-center my-2">
              {/* @ts-ignore */}
              <MapContainer center={[45.94187, 6.42715]} zoom={7} scrollWheelZoom={false} style={{ width: `300px`, height: `300px` }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {SportLocations.filter(location => location.sport === "Ski").map((value) => (
                  <>
                    {/* @ts-ignore */}
                    <Marker key={value.id} position={value.GPS} icon={createCustomIcon(getColorForSport(value.sport))}>
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
            Here is me skiing :
            <Carousel>
              <div>
                <img src={ski1} className="px-2 border-b-2 m-2" width="300" alt="Image" />
              </div>
              <div>
                <img src={ski2} className="px-2 border-b-2 m-2" width="200" alt="Image" />
              </div>
              <div >
                <img src={ski3} className="px-2 border-b-2 m-2" width="150" alt="Image" />
              </div>
              <div>
                <img src={ski4} className="px-2 border-b-2 m-2" width="300" alt="Image" />
              </div>
            </Carousel>
          </div>
        );

      case "Paragliding":
        return (
          <div className="p-2 mt-4 rounded bg-slate-100 ">
            <div className="text-xl font-bold ">Paragliding 🪂</div>
            Here is me paragliding just after I finished prepa (2020):
            <div className="flex justify-center">
              <img src={para} className="px-2 border-b-2 m-2" width="200" alt="Image" />
            </div>
            Here are a couple of paragliding spots I have had the opportunity to go.
            <div className="flex items-center justify-center my-2">
              {/* @ts-ignore */}
              <MapContainer center={[45.94187, 6.42715]} zoom={7} scrollWheelZoom={false} style={{ width: `300px`, height: `300px` }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {SportLocations.filter(location => location.sport === "Paragliding").map((value) => (
                  <>
                    {/* @ts-ignore */}
                    <Marker key={value.id} position={value.GPS} icon={createCustomIcon(getColorForSport(value.sport))}>
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
          </div>
        );

      default:
        return null; // or a message saying "Select a sport"
    }
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className="w-full sm:w-2/3 md:w-2/3 lg:max-w-2xl xl:max-w-2xl mx-4 ">
          <Header name={"sport"} posts={0} />
          {/* Sport Selection Buttons */}
          <div className="flex justify-center space-x-4 mb-4">
            <button onClick={() => setSelectedSport("Surf")} className="bg-blue-500 text-white px-4 py-2 rounded">Surf</button>
            <button onClick={() => setSelectedSport("Ski")} className="bg-green-500 text-white px-4 py-2 rounded">Ski</button>
            <button onClick={() => setSelectedSport("Paragliding")} className="bg-orange-500 text-white px-4 py-2 rounded">Paragliding</button>
          </div>

          {/* Render content based on selected sport */}
          {renderSportContent()}
        </div>
      </div>
    </>
  );
};
