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
        content: Tunisia,
    },
    "2": {
        id: 2,
        date: "2012",
        title: "Turkey 🇹🇷",
        content: Turkey,
    },

    "3": {
        id: 3,
        date: "2015",
        title: "Greece 🇬🇷 and Bulgaria 🇧🇬",
        content: Greece,
    },
    "4": {
        id: 4,
        date: "2016",
        title: "Norway 🇳🇴",
        content: Norway,
    },
    "5": {
        id: 5,
        date: "2016",
        title: "USA 🇺🇸 & Canada 🇨🇦",
        content: USA1,
    },
    "6": {
        id: 6,
        date: "2017",
        title: "Indonesia 🇮🇩",
        content: Indonesia,
    },
    "7": {
        id: 7,
        date: "2018",
        title: "USA 🇺🇸",
        content: USA2,
    },
    "8": {
        id: 8,
        date: "2019",
        title: "Marseille 🇫🇷",
        content: Marseille,
    },
    "9": {
        id: 9,
        date: "2019",
        title: "Malaga 🇪🇸",
        content: Malaga,
    },
    "10": {
        id: 10,
        date: "2019",
        title: "Mauritius Island 🇲🇺",
        content: Mauritius,
    },
    "11": {
        id: 11,
        date: "2019",
        title: "London 🇬🇧",
        content: London,
    },
    "12": {
        id: 12,
        date: "2019",
        title: "Santorini 🇬🇷",
        content: Santorini,
    },
    "13": {
        id: 13,
        date: "2020",
        title: "Annecy 🇫🇷",
        content: Annecy,
    },
    "14": {
        id: 14,
        date: "2020",
        title: "Royan 🇫🇷",
        content: Royan,
    },
    "15": {
        id: 15,
        date: "2020",
        title: "Biarritz 🇫🇷 & San Sebastian 🇪🇸",
        content: Biarritz,
    },
    "16": {
        id: 16,
        date: "2021",
        title: "Ile d'Yeu 🇫🇷",
        content: Yeu,
    },
    "17": {
        id: 17,
        date: "2021",
        title: "Nice 🇫🇷",
        content: Nice,
    },
    "18": {
        id: 18,
        date: "2022",
        title: "Luxembourg 🇱🇺, Germany 🇩🇪 & the Netherlands 🇳🇱",
        content: LuxGerNeth2022,
    },
    "19": {
        id: 19,
        date: "2022",
        title: "Lyon",
        content: Lyon,
    },
    "20": {
        id: 20,
        date: "2022",
        title: "Anglet 🇫🇷 & San Sebastian 🇪🇸",
        content: Anglet,
    },
    "21": {
        id: 21,
        date: "2022",
        title: "Nice 🇫🇷",
        content: Nice2,
    },
    "22": {
        id: 22,
        date: "2023",
        title: "Albi 🇫🇷",
        content: Albi,
    },
    "23": {
        id: 23,
        date: "2023",
        title: "Bruxelles 🇧🇪, La Haye 🇳🇱, Amsterdam 🇳🇱",
        content: BxHayAmst23,
    },
    "24": {
        id: 24,
        date: "2023",
        title: "Bordeaux 🇫🇷",
        content: Bordeaux,
    },
    "25": {
        id: 25,
        date: "2023",
        title: "Sweden 🇸🇪 & Denmark 🇩🇰",
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
