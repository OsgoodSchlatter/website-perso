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
import { Header } from "../../Single/Header";
import L from "leaflet";

export const blogPosts = [
  {
    id: 1,
    date: "2005",
    title: "Tunisia 🇹🇳",
    locations: ["Tunisia"],
    GPS: [36.47, 10.09],
    C02: 600,
    content: Tunisia,
  },
  {
    id: 2,
    date: "2012",
    title: "Turkey 🇹🇷",
    locations: ["Turkey"],
    GPS: [38.41885, 27.12872], // Example coordinates for Turkey (Ankara)
    C02: 1000,
    content: Turkey,
  },
  {
    id: 3,
    date: "2015",
    title: "Greece 🇬🇷 ",
    locations: ["Greece", "Bulgaria"],
    GPS: [37.9838, 23.7275], // Example coordinates for Greece (Athens)
    C02: 600,
    content: Greece,
  },

  {
    id: 4,
    date: "2016",
    title: "Norway 🇳🇴",
    locations: ["Norway"],
    GPS: [59.9139, 10.7522], // Example coordinates for Norway (Oslo)
    C02: 500,
    content: Norway,
  },
  {
    id: 5,
    date: "2018",
    title: "San Francisco 🇺🇸 ",
    locations: ["USA", "San F"],
    GPS: [37.7749, -122.4194], // Example coordinates for USA (San Francisco)
    C02: 3000,
    content: USA1,
  },
  {
    id: 6,
    date: "2017",
    title: "Indonesia 🇮🇩",
    locations: ["Indonesia"],
    GPS: [-6.2088, 106.8456], // Example coordinates for Indonesia (Jakarta)
    C02: 4000,
    content: Indonesia,
  },
  {
    id: 7,
    date: "2018",
    title: "New York City 🇺🇸",
    locations: ["USA"],
    GPS: [40.7128, -74.0060], // Example coordinates for USA (New York City)
    C02: 1800,
    content: USA2,
  },
  {
    id: 8,
    date: "2019",
    title: "Marseille 🇫🇷",
    locations: ["Marseille", "France"],
    GPS: [43.2965, 5.3698], // Coordinates for Marseille, France
    C02: 150,
    content: Marseille,
  },
  {
    id: 9,
    date: "2019",
    title: "Malaga 🇪🇸",
    locations: ["Malaga", "Spain"],
    GPS: [36.7213, -4.4214], // Coordinates for Malaga, Spain
    C02: 400,
    content: Malaga,
  },
  {
    id: 10,
    date: "2019",
    title: "Mauritius Island 🇲🇺",
    locations: ["Mauritius"],
    GPS: [-20.3484, 57.5522], // Coordinates for Mauritius Island
    C02: 3100,
    content: Mauritius,
  },
  {
    id: 11,
    date: "2019",
    title: "London 🇬🇧",
    locations: ["London", "UK", "Great-Britain", "GB", "Angleterre"],
    GPS: [51.5074, -0.1278], // Coordinates for London, UK
    C02: 240,
    content: London,
  },
  {
    id: 12,
    date: "2019",
    title: "Santorini 🇬🇷",
    locations: ["Greece", "Santorini"],
    GPS: [36.3932, 25.4615], // Coordinates for Santorini, Greece
    C02: 800,
    content: Santorini,
  },
  {
    id: 13,
    date: "2020",
    title: "Annecy 🇫🇷",
    locations: ["Annecy", "France"],
    GPS: [45.8992, 6.1294], // Coordinates for Annecy, France
    C02: 278,
    content: Annecy,
  },
  {
    id: 14,
    date: "2020",
    title: "Royan 🇫🇷",
    locations: ["Royan", "France"],
    GPS: [45.628, -1.0289],
    C02: 90,
    content: Royan,
  },
  {
    id: 15,
    date: "2020",
    title: "Biarritz 🇫🇷 & San Sebastian 🇪🇸",
    locations: ["Biarritz", "France", "San Sebastian", "Spain"],
    GPS: [43.4832, -1.5586],
    C02: 200,
    content: Biarritz,
  },
  {
    id: 16,
    date: "2021",
    title: "Ile d'Yeu 🇫🇷",
    locations: ["Ile d'Yeu", "Yeu", "France"],
    GPS: [46.7189, -2.3484],
    C02: 10,
    content: Yeu,
  },
  {
    id: 17,
    date: "2021",
    title: "Nice 🇫🇷",
    locations: ["Nice", "France"],
    GPS: [43.7102, 7.2620],
    C02: 50,
    content: Nice,
  },
  {
    id: 18,
    date: "2022",
    title: "Luxembourg 🇱🇺, Germany 🇩🇪 & The Netherlands 🇳🇱",
    locations: ["Luxembourg", "Germany", "The Netherlands", "Netherlands"],
    GPS: [50.8503, 4.3517],
    C02: 20,
    content: LuxGerNeth2022,
  },
  {
    id: 19,
    date: "2022",
    title: "Lyon",
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
    GPS: [43.4789, -1.5330],
    C02: 10,
    content: Anglet,
  },
  {
    id: 21,
    date: "2022",
    title: "Nice 🇫🇷",
    locations: ["Nice", "France"],
    GPS: [43.7102, 7.2620],
    C02: 5,
    content: Nice2,
  },
  {
    id: 22,
    date: "2023",
    title: "Albi 🇫🇷",
    locations: ["Albi", "France"],
    GPS: [43.9298, 2.1480],
    C02: 30,
    content: Albi,
  },
  {
    id: 23,
    date: "2023",
    title: "Bruxelles 🇧🇪, The Hague 🇳🇱, Amsterdam 🇳🇱",
    locations: ["Bruxelles", "Belgium", "The Hague", "Amsterdam", "Netherlands"],
    GPS: [50.8503, 4.3517],
    C02: 10,
    content: BxHayAmst23,
  },
  {
    id: 24,
    date: "2023",
    title: "Bordeaux 🇫🇷",
    locations: ["Bordeaux", "France"],
    GPS: [44.8378, -0.5792],
    C02: 5,
    content: Bordeaux,
  },
  {
    id: 25,
    date: "2023",
    title: "Sweden 🇸🇪 ",
    locations: ["Sweden", "Denmark"],
    C02: 60,
    GPS: [59.3293, 18.0686],
    content: SweDen,
  },
  {
    id: 26,
    date: "2023",
    title: "Uppsala 🇸🇪 ",
    locations: ["Sweden", "Denmark"],
    C02: 60,
    GPS: [59.858, 17.686],
    content: SweDen,
  },
  {
    id: 26,
    date: "2023",
    title: "Denmark 🇩🇰",
    locations: ["Sweden", "Denmark"],
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
    C02: 60,
    GPS: [52.520007, 13.404954],
  },
  {
    id: 28,
    date: "2022",
    title: "Frankfurt 🇩🇪",
    locations: ["Germany", "Frankfurt"],
    C02: 60,
    GPS: [50.1109221, 8.6821267],
  },
  {
    id: 29,
    date: "2023",
    title: "Münster 🇩🇪",
    locations: ["Germany", "Münster"],
    C02: 60,
    GPS: [51.961563, 7.628202],
  },
  {
    id: 30,
    date: "2023",
    title: "Amsterdam 🇳🇱",
    locations: ["Amsterdam", "Netherlands"],
    C02: 60,
    GPS: [52.3730796, 4.89],
  },
  {
    id: 31,
    date: "2023",
    title: "Den Haag 🇳🇱",
    locations: ["Den Haag", "Netherlands"],
    C02: 60,
    GPS: [52.0799838, 4.3113461],
  },
  {
    id: 32,
    date: "2024",
    title: "Milano 🇮🇹",
    locations: ["Milano", "Italy"],
    C02: 60,
    GPS: [45.4654219, 9.1859243],
  },
  {
    id: 33,
    date: "2024",
    title: "Venise 🇮🇹",
    locations: ["Venise", "Italy"],
    C02: 60,
    GPS: [45.4408474, 12.3155151],
  },
  {
    id: 34,
    date: "2024",
    title: "Porto Venere 🇮🇹",
    locations: ["Porto Venere", "Italy"],
    C02: 60,
    GPS: [44.0519, 9.8352],
  },
  {
    id: 35,
    date: "2015",
    title: " Sofia 🇧🇬",
    locations: ["Sofia", "Bulgaria"],
    C02: 600,
    GPS: [42.6977082, 23.3218675],
  },

  {
    id: 36,
    date: "2016",
    title: " Montreal 🇨🇦",
    locations: ["Montreal", "Canda"],
    C02: 1800,
    GPS: [45.5016889, -73.567256],
  },
  {
    id: 38,
    date: "2016",
    title: " Boston 🇺🇸 ",
    locations: ["Boston", "USA"],
    C02: 1800,
    GPS: [42.3600825, - 71.0588801],
  },
  {
    id: 39,
    date: "2018",
    title: " Los Angeles 🇺🇸 ",
    locations: ["Los Angeles", "USA"],
    C02: 3000,
    GPS: [34.052234, - 118.243685],
  },
  {
    id: 40,
    date: "2018",
    title: " Las Vegas 🇺🇸 ",
    locations: ["Las Vegas", "USA"],
    C02: 3000,
    GPS: [36.169941, -115.139830],
  },
  {
    id: 41,
    date: "2024",
    title: "Geneve 🇨🇭",
    locations: ["Geneve", "Suisse"],
    C02: 50,
    GPS: [46.2043907, 6.1431577],
  }


];

// SVG for red pin
const PinSVG = (color: string) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
  <path fill="${color}" d="M12 2C8.14 2 5 5.14 5 9c0 4.53 4.58 10.74 6.39 12.96.34.41.9.41 1.24 0C14.42 19.74 19 13.53 19 9c0-3.86-3.14-7-7-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
</svg>
`;

const createCustomIcon = (color: string) => {
  const pinSVG = PinSVG(color);
  const pinIconUrl = `data:image/svg+xml;base64,${btoa(pinSVG)}`;

  return new L.Icon({
    iconUrl: pinIconUrl,
    iconSize: [24, 24], // Size of the icon
    iconAnchor: [12, 24], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -24], // Point from which the popup should open relative to the iconAnchor
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [20, 20], // Size of the shadow
  });
};

export const Trips = () => {
  return (
    <>
      <Header name={"Trips"} posts={1} />
      <div className="flex bg-white justify-center p-2 mt-4 rounded">
        {/* @ts-ignore */}
        <MapContainer center={[47.65, -2.7608]} zoom={5} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <div className="flex flex-wrap justify-evenly p-10 font-bold">
            {Array.from(blogPosts.entries())
              .map(([key, value]) => (
                <>
                  {/* @ts-ignore */}
                  < Marker position={value.GPS} icon={createCustomIcon("red")} >
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
          {/* @ts-ignore */}
          <Marker position={[47.65, -2.7608]} icon={createCustomIcon("blue")}>
            <Popup>
              Vannes <br /> My hometown
            </Popup>
          </Marker>
          {/* @ts-ignore */}
          <Marker position={[48.866669, 2.33333]} icon={createCustomIcon("blue")}>
            <Popup>
              Paris <br /> My studies
            </Popup>
          </Marker>
        </MapContainer>
      </div >
    </>
  );
};
