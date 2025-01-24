import DisplayIngredients from "../CarbonCalculator/DisplayIngredients";
import { Chess } from "../Chess/Chess";
import OOM from "../Climate/ClimatePosts/OOM";
import FHE from "../CS/CSPosts/FHE";

import { Scales } from "../Music/Scales";
import { Russian } from "../Languages/Russian";
import { Maths } from "../Maths/Maths";
import Battery_Fuel_Cell from "../Physics/PhysicsPosts/Battery_Fuel_Cell";
import Electrolysis from "../Physics/PhysicsPosts/Electrolysis";
import ParticleDetector from "../Physics/PhysicsPosts/ParticleDetector";
import Neutronics from "../Physics/PhysicsPosts/Neutronics";
import Radio from "../Physics/PhysicsPosts/Radioactivity";
import SchroEq from "../Physics/PhysicsPosts/SchroEq";
import PianoChords from "../Music/MusicRep";

import { Gigs } from "../Gigs/Gigs";

import { PubliArticle } from "../Publi/PubliArticle";
import { Sport } from "../Sport/Sport";
import { Trips } from "../Trips/Trips";
import { Books } from "../Books/Books";
import { Contact } from "../Contact/Contact";
import GreenTracking from "../CS/CSPosts/GreenTracking";
import { About } from "../About/About";
import { Gallery } from "../Gallery/Gallery";
import { Italian } from "../Languages/Italian";

export type BlogPostType = {
    id: number;
    date: string;
    title: string;
    content_name?: string;
    category?: BlogCategory;
    route: BlogRoute;
    content: React.ComponentType<ContentProps>;
};

export enum BlogCategory {
    Climate = "climate",
    ComputerScience = "computer science",
    Music = "music",
    Languages = "languages",
    Physics = "physics",
    Chess = "chess",
    Maths = "maths",
    Sport = "sport",
    Books = "books",
    Trips = "trips",
    Publi = "publi",
    Contact = "contact",
    About = "about",
    Gallery = "gallery"
}

export enum BlogRoute {
    Climate = "climate",
    ComputerScience = "cs",
    Music = "music",
    Languages = "languages",
    Physics = "physics",
    Chess = "chess",
    Maths = "maths",
    Sport = "sport",
    Books = "books",
    Trips = "trips",
    Publi = "publi_talks",
    Contact = "contact",
    About = "about",
    Gallery = "gallery"
}

export type ContentProps = {
    title: string;
    date: string;
};

export const blogPostsArray: BlogPostType[] = [
    {
        id: 1,
        date: "17/07/2023",
        title: "Orders of magnitude",
        content_name: "OOM",
        category: BlogCategory.Climate,
        route: BlogRoute.Climate,
        content: OOM,
    },
    {
        id: 2,
        date: "2024",
        title: "Carbon Calculator",
        content_name: "DisplayIngredients",
        category: BlogCategory.Climate,
        route: BlogRoute.Climate,
        content: DisplayIngredients,
    },
    {
        id: 1,
        date: "2023",
        title: "Fully Homomorphic Encryption Tool",
        content_name: "FHE",
        category: BlogCategory.ComputerScience,
        route: BlogRoute.ComputerScience,
        content: FHE,
    },

    {
        id: 3,
        date: "2023",
        title: "Green Tracking",
        content_name: "GreenTracking",
        category: BlogCategory.ComputerScience,
        route: BlogRoute.ComputerScience,
        content: GreenTracking,
    },
    {
        id: 1,
        date: "2024",
        title: "Gigs and Concert",
        content_name: "Gigs",
        category: BlogCategory.Music,
        route: BlogRoute.Music,
        content: Gigs,
    },
    {
        id: 2,
        date: "2024",
        title: "Scales",
        content_name: "Scales",
        category: BlogCategory.Music,
        route: BlogRoute.Music,
        content: Scales,
    },
    {
        id: 3,
        date: "2023",
        title: "Songs directory",
        content_name: "PianoChords",
        category: BlogCategory.Music,
        route: BlogRoute.Music,
        content: PianoChords,
    },

    {
        id: 1,
        date: "02/05/2023",
        title: "Russian 🇷🇺",
        content_name: "Russian",
        category: BlogCategory.Languages,
        route: BlogRoute.Languages,
        content: Russian,
    },
    {
        id: 1,
        date: "02/10/2023",
        title: "Radioactivity",
        content_name: "Radio",
        category: BlogCategory.Physics,
        route: BlogRoute.Physics,
        content: Radio,
    },

    {
        id: 2,
        date: "07/10/2023",
        title: "Quantum Mechanics",
        content_name: "SchroEq",
        category: BlogCategory.Physics,
        route: BlogRoute.Physics,
        content: SchroEq,
    },
    {
        id: 3,
        date: "16/10/2023",
        title: "Battery and hydrogen",
        content_name: "Battery_Fuel_Cell",
        category: BlogCategory.Physics,
        route: BlogRoute.Physics,
        content: Battery_Fuel_Cell,
    },
    {
        id: 4,
        date: "17/11/2023",
        title: "Neutron Physics",
        content_name: "Neutronics",
        category: BlogCategory.Physics,
        route: BlogRoute.Physics,
        content: Neutronics,
    },
    {
        id: 5,
        date: "2024",
        title: "Electrolyser",
        content_name: "Electrolysis",
        category: BlogCategory.Physics,
        route: BlogRoute.Physics,
        content: Electrolysis,
    },
    {
        id: 6,
        date: "2024",
        title: "Particle Detectors",
        content_name: "ParticleDetector",
        category: BlogCategory.Physics,
        route: BlogRoute.Physics,
        content: ParticleDetector,
    },
    {
        id: 1,
        date: "2024",
        title: "Chess Elo Comparator",
        content_name: "Chess",
        category: BlogCategory.Chess,
        route: BlogRoute.Chess,
        content: Chess,
    },
    {
        id: 1,
        date: "2024",
        title: "Calculus",
        content_name: "Maths",
        category: BlogCategory.Maths,
        route: BlogRoute.Maths,
        content: Maths,
    },
    {
        id: 1,
        date: "2024",
        title: "Destinations I went to",
        content_name: "Trips",
        category: BlogCategory.Trips,
        route: BlogRoute.Trips,
        content: Trips,
    },
    {
        id: 1,
        date: "2024",
        title: "Some sports I love practising",
        content_name: "Sport",
        category: BlogCategory.Sport,
        route: BlogRoute.Sport,
        content: Sport,
    },
    {
        id: 1,
        date: "2023",
        title: "Publications",
        content_name: "PubliArticle",
        category: BlogCategory.Publi,
        route: BlogRoute.Publi,
        content: PubliArticle,
    },
    {
        id: 1,
        date: "2023",
        title: "Contact",
        content_name: "Contact",
        category: BlogCategory.Contact,
        route: BlogRoute.Contact,
        content: Contact,
    },
    {
        id: 1,
        date: "2023",
        title: "Some readings",
        content_name: "Books",
        category: BlogCategory.Books,
        route: BlogRoute.Books,
        content: Books,
    },
    {
        id: 1,
        date: "2024",
        title: "about",
        content_name: "about",
        category: BlogCategory.About,
        route: BlogRoute.About,
        content: About,
    },
    {
        id: 1,
        date: "2024",
        title: "gallery",
        content_name: "Gallery",
        category: BlogCategory.Gallery,
        route: BlogRoute.Gallery,
        content: Gallery,
    },
    {
        id: 2,
        date: "12/2024",
        title: "Italian 🇮🇹",
        content_name: "Italian",
        category: BlogCategory.Languages,
        route: BlogRoute.Languages,
        content: Italian,
    },
];