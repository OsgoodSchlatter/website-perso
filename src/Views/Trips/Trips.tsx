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
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { createCustomIcon } from "../../Single/MapUtils"
import { StandardHeader } from "../../Single/StandardHeader";
import { useEffect, useState } from "react";


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
    GPS: [40.7128, -74.0060], // Example coordinates for USA (New York City)
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
    GPS: [43.7102, 7.2620],
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
    GPS: [45.7640, 4.8357],
    C02: 5,
    content: Lyon,
  },
  {
    id: 20,
    date: "2022",
    title: "Anglet 🇫🇷 & San Sebastian 🇪🇸",
    locations: ["Anglet", "France", "San Sebastian", "Spain"],
    transport: "Train",
    GPS: [43.4789, -1.5330],
    C02: 10,
    content: Anglet,
  },
  {
    id: 21,
    date: "2022",
    title: "Nice 🇫🇷",
    locations: ["Nice", "France"],
    transport: "Train",
    GPS: [43.7102, 7.2620],
    C02: 5,
    content: Nice2,
  },
  {
    id: 22,
    date: "2023",
    title: "Albi 🇫🇷",
    locations: ["Albi", "France"],
    transport: "Train",
    GPS: [43.9298, 2.1480],
    C02: 30,
    content: Albi,
  },
  {
    id: 23,
    date: "2023",
    title: "Bruxelles 🇧🇪, The Hague 🇳🇱, Amsterdam 🇳🇱",
    locations: ["Bruxelles", "Belgium", "The Hague", "Amsterdam", "Netherlands"],
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
    GPS: [42.3600825, - 71.0588801],
  },
  {
    id: 39,
    date: "2018",
    title: " Los Angeles 🇺🇸 ",
    locations: ["Los Angeles", "USA"],
    transport: "Plane",
    C02: 3000,
    GPS: [34.052234, - 118.243685],
  },
  {
    id: 40,
    date: "2018",
    title: " Las Vegas 🇺🇸 ",
    locations: ["Las Vegas", "USA"],
    transport: "Plane",
    C02: 3000,
    GPS: [36.169941, -115.139830],
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
    GPS: [28.291564, -16.629130],
  },
  {
    id: 43,
    date: "2012",
    title: "Barcelona 🇪🇸",
    locations: ["Barcelona", "Spain"],
    transport: "Car",
    C02: 40,
    GPS: [41.23, 2.1540],
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
    GPS: [45.15850, 1.53324],
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
    GPS: [47.65868, - 2.75991],
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
  Home: "blue"
};

// Function to get the color based on the transport type
const getColorForTransport = (transport: TransportType): string => {
  return transportColors[transport];
};


export const TripsContent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check width on initial render

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Update state based on current width
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="flex justify-center rounded">

        <div>
          <div className="text-lg">
            🔴: plane, 🟢: train, 🟠: car or bus, 🔵: home
          </div>
          {/* @ts-ignore */}
          <MapContainer center={[47.65, -2.7608]} zoom={2} scrollWheelZoom={false} style={{
            width: isMobile ? '300px' : '625px', // Apply 300px width on mobile, 100% otherwise
            height: isMobile ? '300px' : '500px', // Apply 300px height on mobile, 500px otherwise
          }} >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <div className="flex flex-wrap justify-evenly font-bold">
              {Array.from(blogPosts.entries())
                .map(([key, value]) => (
                  <>
                    {/* @ts-ignore */}
                    <Marker position={value.GPS} icon={createCustomIcon(getColorForTransport(value.transport))} >
                      <Popup>
                        <div className=" font-bold text-lg">
                          {value.title + " - " + value.date}
                        </div>
                        <br /> {value.C02 + " kg CO2eq"}
                      </Popup>
                    </Marker>
                  </>
                ))}
            </div>
          </MapContainer>

        </div>
      </div >
    </>
  );
};

const intro = <div>

</div>
export const Trips = () => {
  return (<StandardHeader title={"Destinations I went to"} date={"2024"} comment={intro}
    content={< TripsContent />} />)
}
