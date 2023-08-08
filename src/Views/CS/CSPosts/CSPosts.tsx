import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FHE from "./subCS/FHE";
import ZKP from "./subCS/ZKP";

export const blogPosts = {
  "1": {
    id: 1,
    date: "19/03/2023",
    title: "Fully Homomorphic Encryption Tool",
    content: FHE,
  },
  "2": {
    id: 2,
    date: "19/03/2023",
    title: "zkPROOF",
    content: ZKP,
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
