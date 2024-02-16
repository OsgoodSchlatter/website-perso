import { useState } from "react";
import { Link } from "react-router-dom";
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";
import { blogPostsArray } from "./Data";
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
  ["/publi_talks", "publi"],
]);





export const Home = () => {
  const [sort, setSort] = useState("");
  return (
    <div className="flex bg-white justify-center">
      <div className="w-3/4 items-center">
        <div className="p-10 font-bold text-4xl text-center" >Osgood's website</div>
        <div className="border-b-2 border-blue-500 rounded" />
        <div className="flex flex-wrap justify-evenly p-10 font-bold">
          {Array.from(Pages.entries())
            .sort(() => Math.random() - 0.5)
            .map(([key, value]) => (
              <div className="px-4 pt-1 hover:underline">
                {value == "climate" ? (
                  <Link to={key} className="text-green-400 text-lg my-link" onClick={() => setSort(value)}>
                    {value}
                  </Link>
                ) : (
                  <Link to={key} className="text-black text-lg my-link" onClick={() => setSort(value)}>
                    {value}
                  </Link>
                )}
              </div>
            ))}
        </div>
        <div className="border-b-2 border-blue-500 rounded" />
        <ListOfPostsHeader main={true} blogPosts={blogPostsArray} />
        <div className="fixed bottom-4 right-4 text-gray-500 text-sm">
          made with love by Eloi and chatgpt
        </div>
      </div>
    </div >
  );
};
