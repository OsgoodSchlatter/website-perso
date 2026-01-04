import { useEffect, useState } from "react";
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";
import { BlogCategory, blogPostsArray, BlogPostType } from "./Data";
import "./Home.css";
import bg from "../../data/pics/wallpaper/wp4.webp";
import logo from "../../data/pics/wallpaper/osgood_trimmed.png";

import { Link } from "react-router-dom";


// todo, do a struct that contains each article in one subdomain

export const Pages = new Map<string, string>([
  ["/chess", "chess"],
  ["/trips", "maps"],
  ["/maths", "maths"],
  ["/cs", "computer science"],
  ["/music", "music & video"],
  ["/sport", "sport"],
  ["/books", "books"],
  ["/physics", "physics"],
  ["/climate", "climate"],
  ["/languages", "languages"],
]);

export const Home = () => {
  const filteredPosts = blogPostsArray.filter(
    (post) => post.toDisplay
  );
  const [sortedPosts, setSortedPosts] =
    useState<BlogPostType[]>(filteredPosts);
  const [misc, setMisc] = useState(false);


  return (
    <div
      className=" w-screen h-screen overflow-x-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <div className="flex justify-center md:text-4xl text-3xl mb-1 mt-48 items-center">
          <Link
            to="/"
            className=" px-6 md:px-2 flex justify-center rounded-lg"
          >
            <div className="font-pinco text-8xl text-blue-400 text-3d">Osgood</div>
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <Link
            to="/about/1"
            className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:bg-black"
          >
            about
          </Link>
          <Link
            to="/maps/1"
            className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:bg-black"
          >
            maps
          </Link>
          <Link
            to="/gallery/1"
            className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:bg-black"
          >
            gallery
          </Link>
          <Link
            to="/music/1"
            className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:bg-black"
          >
            music
          </Link>
          <Link
            to="/contact/1"
            className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:bg-black"
          >
            contact
          </Link>
        </div>
        <div
          className=" px-2 font-bold  text-md rounded-lg hover:underline items-center text-center"
          onClick={() => setMisc(!misc)}
        >
          {misc ? "hide posts" : "show posts"}
        </div>
        <div className="flex justify-center">
          {misc && (
            <div className="md:w-1/2 p-2 mt-4">

              <ListOfPostsHeader blogPosts={sortedPosts} />
            </div>

          )}
        </div>
      </div>


      <div className="fixed bottom-4 right-4 text-gray-500 text-sm">
        made with love by Osgood and chatgpt
      </div>
    </div>
  );
};
