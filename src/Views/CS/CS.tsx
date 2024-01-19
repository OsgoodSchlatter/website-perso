
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PubliArticle } from "../Publi/PublicationsPosts";

import FHE from "./CSPosts/FHE";
import Tuto from "./CSPosts/Tuto";
import ZKP from "./CSPosts/ZKP";

export const blogPosts = {
  "1": {
    id: 1,
    date: "19/03/2023",
    title: "Fully Homomorphic Encryption Tool",
    content: FHE,
  },
  "2": {
    id: 2,
    date: "2023",
    title: "Publications",
    content: PubliArticle,
  },
  "3": {
    id: 3,
    date: "2023",
    title: "Tuto",
    content: Tuto,
  },
};

export const CSPosts = () => {
  const { postID } = useParams<{ postID: string }>();

  const post = blogPosts[postID as keyof typeof blogPosts];
  const Component = post ? post.content : null;

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component postID={postID!} />;
};


export const CS = () => (

  <ListOfPostsHeader topic="computer science" route="cs" blogPosts={blogPosts} />

);
