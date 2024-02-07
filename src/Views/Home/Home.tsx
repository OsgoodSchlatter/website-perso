import { Link } from "react-router-dom";
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";
import DisplayIngredients from "../CarbonCalculator/DisplayIngredients";
import { Climate } from "../Climate/Climate";
import OOM from "../Climate/ClimatePosts/OOM";
import FHE from "../CS/CSPosts/FHE";
import Tuto from "../CS/CSPosts/Tuto";
import { PubliArticle } from "../Publi/PublicationsPosts";
import "./Home.css";

// todo, do a struct that contains each article in one subdomain

export const Pages = new Map<string, string>([
  ["/chess", "chess"],
  ["/trips", "trips"],
  ["/maths", "maths"],
  ["/guitar", "guitar"],
  ["/cs", "computer science"],
  ["/piano", "piano"],
  ["/sport", "sport"],
  ["/books", "books"],
  ["/physics", "physics"],
  ["/climate", "climate"],
  ["/languages", "languages"],

]);

export type BlogPostType = {
  id: number;
  date: string;
  title: string;
  category: string;
  route: string;
  content: any;
};

export type BlogPostsType = {
  [key: string]: BlogPostType;
};

export const blogPostsArray = {
  "1": {
    id: 1,
    date: "17/07/2023",
    title: "Orders of magnitude",
    category: "climate",
    route: "climate",
    content: OOM,
  },
  "2": {
    id: 2,
    date: "2024",
    title: "Carbon Calculator",
    category: "climate",
    route: "climate",
    content: DisplayIngredients,
  },
  "3": {
    id: 3,
    date: "19/03/2023",
    title: "Fully Homomorphic Encryption Tool",
    category: "computer science",
    route: "cs",
    content: FHE,
  },
  "4": {
    id: 4,
    date: "2023",
    title: "Publications",
    category: "computer science",
    route: "cs",
    content: PubliArticle,
  },
  "5": {
    id: 5,
    date: "2023",
    title: "Tuto",
    category: "computer science",
    route: "cs",
    content: Tuto,
  },
};

export const Home = () => {
  return (
    <div className="flex bg-white justify-center">
      <div className="w-3/4 items-center">
        <div className="p-10 font-bold text-4xl text-center" >topics</div>
        <div className="border-b-2 border-blue-500 rounded" />
        <div className="flex flex-wrap justify-evenly p-10 font-bold">
          {Array.from(Pages.entries())
            .sort(() => Math.random() - 0.5)
            .map(([key, value]) => (
              <div className="px-4 pt-1 hover:underline">
                {value == "climate" ? (
                  <Link to={key} className="text-green-400 text-lg my-link">
                    {value}
                  </Link>
                ) : (
                  <Link to={key} className="text-black text-lg my-link">
                    {value}
                  </Link>
                )}
              </div>
            ))}
        </div>
        <div className=" border-b-2 border-blue-500 rounded" />
        <ListOfPostsHeader main={true} blogPosts={blogPostsArray} />

        <div className="fixed bottom-4 right-4 text-gray-500 text-sm">
          made with love by Eloi and chatgpt
        </div>
      </div>
    </div >
  );
};
