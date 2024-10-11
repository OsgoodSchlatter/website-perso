import DisplayIngredients from "../CarbonCalculator/DisplayIngredients";
import { Chess } from "../Chess/Chess";
import OOM from "../Climate/ClimatePosts/OOM";
import FHE from "../CS/CSPosts/FHE";
import Tuto from "../CS/CSPosts/Tuto";
import { GuitarSongs } from "../Guitar/GuitarPosts/GuitarSongs";
import { Scales } from "../Guitar/GuitarPosts/Scales";
import { Russian } from "../Languages/LanguagesPosts/Russian";
import { Maths } from "../Maths/Maths";
import Battery_Fuel_Cell from "../Physics/PhysicsPosts/Battery_Fuel_Cell";
import Electrolysis from "../Physics/PhysicsPosts/Electrolysis";
import Geiger from "../Physics/PhysicsPosts/Geiger";
import Neutronics from "../Physics/PhysicsPosts/Neutronics";
import Radio from "../Physics/PhysicsPosts/Radioactivity";
import SchroEq from "../Physics/PhysicsPosts/SchroEq";
import PianoChords from "../Piano/PianoPosts/PianoChords";
import PianoSongs from "../Piano/PianoPosts/PianoSongs";
import { Gigs } from "../Gigs/Gigs";

import { PubliArticle } from "../Publi/PublicationsPosts";
import { Sport } from "../Sport/Sport";
import { Trips } from "../Trips/Trips";
import { Books } from "../Books/Books";
import { Recruiter } from "../Recruiter/Recruiter";


export type BlogPostType = {
    id: number;
    date: string;
    title: string;
    category: BlogCategory;
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
    Recruiter = "recruiter"
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
    Recruiter = "recruiter",

}

export type ContentProps = {
    title: string;
    date: string;
};



export const blogPostsArray: BlogPostType[] = [
    {
        id: 1,
        date: "2023",
        title: "Books",
        category: BlogCategory.Books,
        route: BlogRoute.Books,
        content: Books,
    },
    {
        id: 1,
        date: "17/07/2023",
        title: "Orders of magnitude",
        category: BlogCategory.Climate,
        route: BlogRoute.Climate,
        content: OOM,
    },
    {
        id: 2,
        date: "2024",
        title: "Carbon Calculator",
        category: BlogCategory.Climate,
        route: BlogRoute.Climate,
        content: DisplayIngredients,
    },
    {
        id: 1,
        date: "19/03/2023",
        title: "Fully Homomorphic Encryption Tool",
        category: BlogCategory.ComputerScience,
        route: BlogRoute.ComputerScience,
        content: FHE,
    },
    {
        id: 3,
        date: "2023",
        title: "Tuto",
        category: BlogCategory.ComputerScience,
        route: BlogRoute.ComputerScience,
        content: Tuto,
    },
    {
        id: 1,
        date: "10/08/2023",
        title: "Guitar Songs",
        category: BlogCategory.Music,
        route: BlogRoute.Music,
        content: GuitarSongs,
    },
    {
        id: 2,
        date: "2024",
        title: "Scales",
        category: BlogCategory.Music,
        route: BlogRoute.Music,
        content: Scales,
    },
    {
        id: 3,
        date: "02/05/2023",
        title: "Piano Songs",
        category: BlogCategory.Music,
        route: BlogRoute.Music,
        content: PianoSongs,
    },
    {
        id: 4,
        date: "02/05/2023",
        title: "Chords",
        category: BlogCategory.Music,
        route: BlogRoute.Music,
        content: PianoChords,
    },
    {
        id: 5,
        date: "2024",
        title: "Gigs and Concert",
        category: BlogCategory.Music,
        route: BlogRoute.Music,
        content: Gigs,
    },
    {
        id: 1,
        date: "02/05/2023",
        title: "Russian 🇷🇺",
        category: BlogCategory.Languages,
        route: BlogRoute.Languages,
        content: Russian,
    },
    {
        id: 1,
        date: "02/10/2023",
        title: "Radioactivity",
        category: BlogCategory.Physics,
        route: BlogRoute.Physics,
        content: Radio,
    },

    {
        id: 2,
        date: "07/10/2023",
        title: "Quantum Mechanics",
        category: BlogCategory.Physics,
        route: BlogRoute.Physics,
        content: SchroEq,
    },
    {
        id: 3,
        date: "16/10/2023",
        title: "Battery and hydrogen",
        category: BlogCategory.Physics,
        route: BlogRoute.Physics,
        content: Battery_Fuel_Cell,
    },
    {
        id: 4,
        date: "17/11/2023",
        title: "Neutronics",
        category: BlogCategory.Physics,
        route: BlogRoute.Physics,
        content: Neutronics,
    },
    {
        id: 5,
        date: "2024",
        title: "Electrolyser",
        category: BlogCategory.Physics,
        route: BlogRoute.Physics,
        content: Electrolysis,
    },
    {
        id: 6,
        date: "2024",
        title: "Geiger Muller",
        category: BlogCategory.Physics,
        route: BlogRoute.Physics,
        content: Geiger,
    },
    {
        id: 1,
        date: "2024",
        title: "Chess Elo Comparator",
        category: BlogCategory.Chess,
        route: BlogRoute.Chess,
        content: Chess,
    },
    {
        id: 1,
        date: "2024",
        title: "Calculus",
        category: BlogCategory.Maths,
        route: BlogRoute.Maths,
        content: Maths,
    },
    {
        id: 1,
        date: "2024",
        title: "Trips",
        category: BlogCategory.Trips,
        route: BlogRoute.Trips,
        content: Trips,
    },
    {
        id: 1,
        date: "2024",
        title: "Sport",
        category: BlogCategory.Sport,
        route: BlogRoute.Sport,
        content: Sport,
    },
    {
        id: 1,
        date: "2023",
        title: "Publications",
        category: BlogCategory.Publi,
        route: BlogRoute.Publi,
        content: PubliArticle,
    },
    {
        id: 1,
        date: "2023",
        title: "Recruiter",
        category: BlogCategory.Recruiter,
        route: BlogRoute.Recruiter,
        content: Recruiter,
    },
];

