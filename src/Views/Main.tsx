
import DisplayIngredients from "./CarbonCalculator/DisplayIngredients";
import { Home } from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import { PubliArticle, PubliPosts } from "./Publi/PublicationsPosts";
import DIY, { DIYPosts } from "./Physics/PhysicsPosts/DIY";
import { CategoryDisplayer, PostDisplayer } from "../Single/CategoryDisplayer";
import OOM from "./Climate/ClimatePosts/OOM";
import FHE from "./CS/CSPosts/FHE";
import Tuto from "./CS/CSPosts/Tuto";
import { GuitarSongs } from "./Guitar/GuitarPosts/GuitarSongs";
import { Scales } from "./Guitar/GuitarPosts/Scales";
import { Russian } from "./Languages/LanguagesPosts/Russian";
import Neutronics from "./Physics/PhysicsPosts/Neutronics";
import Radio from "./Physics/PhysicsPosts/Radioactivity";
import SchroEq from "./Physics/PhysicsPosts/SchroEq";
import Battery_Fuel_Cell from "./Physics/PhysicsPosts/Battery_Fuel_Cell";


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
  Guitar = "guitar",
  Languages = "languages",
  Physics = "physics",
}


export enum BlogRoute {
  Climate = "climate",
  ComputerScience = "cs",
  Guitar = "guitar",
  Languages = "languages",
  Physics = "physics",
  BlogRoute = "BlogRoute"
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
    id: 3,
    date: "19/03/2023",
    title: "Fully Homomorphic Encryption Tool",
    category: BlogCategory.ComputerScience,
    route: BlogRoute.ComputerScience,
    content: FHE,
  },
  {
    id: 4,
    date: "2023",
    title: "Publications",
    category: BlogCategory.ComputerScience,
    route: BlogRoute.ComputerScience,
    content: PubliArticle,
  },
  {
    id: 5,
    date: "2023",
    title: "Tuto",
    category: BlogCategory.ComputerScience,
    route: BlogRoute.ComputerScience,
    content: Tuto,
  },
  {
    id: 6,
    date: "10/08/2023",
    title: "Guitar Songs",
    category: BlogCategory.Guitar,
    route: BlogRoute.Guitar,
    content: GuitarSongs,
  },
  {
    id: 7,
    date: "2024",
    title: "Guitar Scales",
    category: BlogCategory.Guitar,
    route: BlogRoute.Guitar,
    content: Scales,
  },
  {
    id: 8,
    date: "02/05/2023",
    title: "Russian 🇷🇺",
    category: BlogCategory.Languages,
    route: BlogRoute.Languages,
    content: Russian,
  },
  {
    id: 9,
    date: "02/10/2023",
    title: "Radioactivity",
    category: BlogCategory.Physics,
    route: BlogRoute.Physics,
    content: Radio,
  },

  {
    id: 10,
    date: "07/10/2023",
    title: "Quantum Mechanics",
    category: BlogCategory.Physics,
    route: BlogRoute.Physics,
    content: SchroEq,
  },
  {
    id: 11,
    date: "16/10/2023",
    title: "Battery and hydrogen",
    category: BlogCategory.Physics,
    route: BlogRoute.Physics,
    content: Battery_Fuel_Cell,
  },
  {
    id: 12,
    date: "17/11/2023",
    title: "Neutronics",
    category: BlogCategory.Physics,
    route: BlogRoute.Physics,
    content: Neutronics,
  },
  {
    id: 13,
    date: "19/01/2024",
    title: "DIY",
    category: BlogCategory.Physics,
    route: BlogRoute.Physics,
    content: DIY,
  },
];

export const Pages2 = new Map<string, string>([
  ["chess", "chess"],
  ["trips", "trips"],
  ["maths", "maths"],
  ["guitar", "guitar"],
  ["cs", "computer science"],
  ["piano", "piano"],
  ["sport", "sport"],
  ["books", "books"],
  ["physics", "physics"],
  ["climate", "climate"],
  ["languages", "languages"],

]);

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {Array.from(Pages2.entries()).map(([route, value]) => (
          <>
            <Route key={route} path={`/${route}`} element={<CategoryDisplayer blogPosts={blogPostsArray} route={route} />} />
            <Route key={route} path={`/${route}/:postID`} element={<PostDisplayer blogPosts={blogPostsArray} route={route} />} />

          </>
        ))}
        {/* <Route path="/physics/DIY/:postID" element={<DIYPosts />} /> */}
      </Routes>
    </>
  );
};
