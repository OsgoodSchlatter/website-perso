import { Home } from "./Home/Home";
import { blogPostsArray } from "./Home/Data"
import { Route, Routes } from "react-router-dom";
import { CategoryDisplayer, PostDisplayer } from "../Single/CategoryDisplayer";
import { ContourHome } from "./Contour/Contour";
import React from "react";

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
  ["success", "success"],
  ["cancel", "cancel"],
  ["agenda", "agenda"],
  ["shop", "shop"],
  ["pictures", "pictures"],
  ["form", "form"],

]);

export const Main = () => {
  const site = process.env.REACT_APP_SITE;

  return (
    <Routes>
      {site === "contour" ? (
        <>
          {/* Contour homepage */}
          <Route path="/" element={<ContourHome />} />
          {/* Optional sub-pages for Contour */}
          {Array.from(Pages2.entries()).map(([route]) => (
            <React.Fragment key={route}>
              <Route path={`/${route}`} element={<CategoryDisplayer blogPosts={blogPostsArray} route={route} />} />
              <Route path={`/${route}/:postID`} element={<PostDisplayer blogPosts={blogPostsArray} route={route} />} />
            </React.Fragment>
          ))}
          {/* Fallback */}
          <Route path="*" element={<ContourHome />} />
        </>
      ) : (
        <>
          {/* Personal homepage */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {Array.from(Pages2.entries()).map(([route]) => (
            <React.Fragment key={route}>
              <Route path={`/${route}`} element={<CategoryDisplayer blogPosts={blogPostsArray} route={route} />} />
              <Route path={`/${route}/:postID`} element={<PostDisplayer blogPosts={blogPostsArray} route={route} />} />
            </React.Fragment>
          ))}
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </>
      )}
    </Routes>
  );
};
