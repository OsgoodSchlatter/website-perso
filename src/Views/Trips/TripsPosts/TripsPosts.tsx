import { useParams } from "react-router-dom";
import { Annecy } from "./Annecy";
import { Biarritz } from "./Biarritz";
import { Greece } from "./Greece";
import { Indonesia } from "./Indonesia";
import { London } from "./London";
import { LuxGerNeth2022 } from "./LuxGerNeth2022";
import { Lyon } from "./Lyon";
import { Marseille } from "./Marseille";
import { Mauritius } from "./Mauritius";
import { Nice } from "./Nice";
import { Norway } from "./Norway";
import { Royan } from "./Royan";
import { Santorini } from "./Santorini";
import { Malaga } from "./Malaga";
import { Tunisia } from "./Tunisia";
import { Turkey } from "./Turkey";
import { USA1 } from "./USA1";
import { USA2 } from "./USA2";
import { Yeu } from "./Yeu";
import { Anglet } from "./SanSeb";
import { Nice2 } from "./Nice2";
import { Albi } from "./Albi";
import { BxHayAmst23 } from "./BxHayAmst23";
import { Bordeaux } from "./Bordeaux";
import { SweDen } from "./SweDen";

export const blogPosts = {
    "1": {
        id: 1,
        date: "2005",
        title: "Tunisia 🇹🇳",
        locations: ["Tunisia"],
        C02: 600,
        content: Tunisia,
    },
    "2": {
        id: 2,
        date: "2012",
        title: "Turkey 🇹🇷",
        locations: ["Turkey"],
        C02: 1000,
        content: Turkey,
    },

    "3": {
        id: 3,
        date: "2015",
        title: "Greece 🇬🇷 and Bulgaria 🇧🇬",
        locations: ["Greece", "Bulgaria"],
        C02: 600,
        content: Greece,
    },
    "4": {
        id: 4,
        date: "2016",
        title: "Norway 🇳🇴",
        locations: ["Norway"],
        C02: 500,
        content: Norway,
    },
    "5": {
        id: 5,
        date: "2016",
        title: "USA 🇺🇸 & Canada 🇨🇦",
        locations: ["USA", "Canada"],
        C02: 1800,
        content: USA1,
    },
    "6": {
        id: 6,
        date: "2017",
        title: "Indonesia 🇮🇩",
        locations: ["Indonesia"],
        C02: 4000,
        content: Indonesia,
    },
    "7": {
        id: 7,
        date: "2018",
        title: "USA 🇺🇸",
        locations: ["USA"],
        C02: 3000,
        content: USA2,
    },
    "8": {
        id: 8,
        date: "2019",
        title: "Marseille 🇫🇷",
        locations: ["Marseille", "France"],
        C02: 150,
        content: Marseille,
    },
    "9": {
        id: 9,
        date: "2019",
        title: "Malaga 🇪🇸",
        locations: ["Malaga", "Spain"],
        C02: 400,
        content: Malaga,
    },
    "10": {
        id: 10,
        date: "2019",
        title: "Mauritius Island 🇲🇺",
        locations: ["Mauritius"],
        C02: 3100,
        content: Mauritius,
    },
    "11": {
        id: 11,
        date: "2019",
        title: "London 🇬🇧",
        locations: ["London", "UK", "Great-Britain", "GB", "Angleterre"],
        C02: 240,
        content: London,
    },
    "12": {
        id: 12,
        date: "2019",
        title: "Santorini 🇬🇷",
        locations: ["Greece", "Santorini"],
        C02: 800,
        content: Santorini,
    },
    "13": {
        id: 13,
        date: "2020",
        title: "Annecy 🇫🇷",
        locations: ["Annecy", "France"],
        C02: 278,
        content: Annecy,
    },
    "14": {
        id: 14,
        date: "2020",
        title: "Royan 🇫🇷",
        locations: ["Royan", "France"],
        C02: 90,
        content: Royan,
    },
    "15": {
        id: 15,
        date: "2020",
        title: "Biarritz 🇫🇷 & San Sebastian 🇪🇸",
        locations: ["Biarritz", "France", "San Sebastian", "Spain"],
        C02: 200,
        content: Biarritz,
    },
    "16": {
        id: 16,
        date: "2021",
        title: "Ile d'Yeu 🇫🇷",
        locations: ["Ile d'Yeu", "Yeu", "France"],
        C02: 10,
        content: Yeu,
    },
    "17": {
        id: 17,
        date: "2021",
        title: "Nice 🇫🇷",
        locations: ["Nice", "France"],
        C02: 50,
        content: Nice,
    },
    "18": {
        id: 18,
        date: "2022",
        title: "Luxembourg 🇱🇺, Germany 🇩🇪 & The Netherlands 🇳🇱",
        locations: ["Luxembourg", "Germany", "The Netherlands", "Netherlands"],
        C02: 20,
        content: LuxGerNeth2022,
    },
    "19": {
        id: 19,
        date: "2022",
        title: "Lyon",
        locations: ["Lyon", "France"],
        C02: 5,
        content: Lyon,
    },
    "20": {
        id: 20,
        date: "2022",
        title: "Anglet 🇫🇷 & San Sebastian 🇪🇸",
        locations: ["Anglet", "France", "San Sebastian", "Spain"],
        C02: 10,
        content: Anglet,
    },
    "21": {
        id: 21,
        date: "2022",
        title: "Nice 🇫🇷",
        locations: ["Nice", "France"],
        C02: 5,
        content: Nice2,
    },
    "22": {
        id: 22,
        date: "2023",
        title: "Albi 🇫🇷",
        locations: ["Albi", "France"],
        C02: 30,
        content: Albi,
    },
    "23": {
        id: 23,
        date: "2023",
        title: "Bruxelles 🇧🇪, The Hague 🇳🇱, Amsterdam 🇳🇱",
        locations: ["Bruxelles", "Belgium", "The Hague", "Amsterdam", "Netherlands"],
        C02: 10,
        content: BxHayAmst23,
    },
    "24": {
        id: 24,
        date: "2023",
        title: "Bordeaux 🇫🇷",
        locations: ["Albi", "France"],
        C02: 5,
        content: Bordeaux,
    },
    "25": {
        id: 25,
        date: "2023",
        title: "Sweden 🇸🇪 & Denmark 🇩🇰",
        locations: ["Sweden", "Denmark"],
        C02: 60,
        content: SweDen,
    },
};

export const TripsPosts = () => {
    const { postID } = useParams<{ postID: string }>();

    const post = blogPosts[postID as keyof typeof blogPosts];
    const Component = post ? post.content : null;

    if (!Component) {
        return <div>Loading...</div>;
    }

    return <Component postID={postID!} />;
};
