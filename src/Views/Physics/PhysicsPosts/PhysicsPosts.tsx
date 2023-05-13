import EPR from "./EPR";
import NuclEnergy from "./NuclEnergy";
import SchroEq from "./SchroEq";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const blogPosts = {
  "1": {
    id: 1,
    date: "02/05/2023",
    title: "EPR",
    content: EPR,
  },
  "2": {
    id: 2,
    date: "02/05/2023",
    title: "Nuclear Energy",
    content: NuclEnergy,
  },
};

export const PhysicsPosts = () => {
  const { postID } = useParams<{ postID: string }>();

  const post = blogPosts[postID as keyof typeof blogPosts];
  const Component = post ? post.content : null;

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component postID={postID!} />;
};
