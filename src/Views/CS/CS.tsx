import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PubliArticle } from "../Publi/PublicationsPosts";

import FHE from "./CSPosts/FHE";
import Tuto from "./CSPosts/Tuto";
import ZKP from "./CSPosts/ZKP";

// export const blogPosts = {
//   "1": {
//     id: 1,
//     date: "19/03/2023",
//     title: "Fully Homomorphic Encryption Tool",
//     content: FHE,
//   },
//   "47": {
//     id: 2,
//     date: "2023",
//     title: "Publications",
//     content: PubliArticle,
//   },
//   "75": {
//     id: 3,
//     date: "2023",
//     title: "Tuto",
//     content: Tuto,
//   },
// };

import { blogPostsArray, BlogPostType } from "../Home/Home"

const csBlogPosts = Object.values(blogPostsArray)
  .filter((post: BlogPostType) => post.category === "Computer Science");

export const CSPosts = () => {
  const { postID } = useParams<{ postID: string }>();

  const post = csBlogPosts[postID as keyof typeof blogPostsArray];
  const Component = post ? post.content : null;

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component title={post.title} date={post.date} />;
};

export const CS = () => (
  <ListOfPostsHeader
    topic="computer science"
    route="cs"
    blogPosts={csBlogPosts}
  />
);
