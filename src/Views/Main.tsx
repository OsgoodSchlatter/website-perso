

import { Home } from "./Home/Home";
import { blogPostsArray } from "./Home/Data"
import { Route, Routes } from "react-router-dom";
import { CategoryDisplayer, PostDisplayer } from "../Single/CategoryDisplayer";
import { ContourHome } from "./Contour/Contour";

export const Pages2 = new Map<string, string>([
  ["chess", "chess"],
  ["trips", "maps"],
  ["maths", "maths"],
  ["cs", "computer science"],
  ["music_video", "music & video"],
  ["sport", "sport"],
  ["books", "books"],
  ["physics", "physics"],
  ["climate", "climate"],
  ["languages", "languages"],
  ["publi_talks", "publi"],
  ["contact", "contact"],
  ["about", "about"],
  ["gallery", "gallery"],
  ["maps", "maps"],
  ["contour", "contour"],
]);

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contour/1" element={<ContourHome />} />
        {Array.from(Pages2.entries()).map(([route]) => (
          <>
            <Route key={route} path={`/${route}`} element={<CategoryDisplayer blogPosts={blogPostsArray} route={route} />} />
            <Route key={route} path={`/${route}/:postID`} element={<PostDisplayer blogPosts={blogPostsArray} route={route} />} />
          </>
        ))}
      </Routes>
    </>
  );
};
