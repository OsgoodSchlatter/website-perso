
import NuclEnergy from "./NuclEnergy";
import Radio from "./Radioactivity";

import { useParams } from "react-router-dom";
import SchroEq from "./SchroEq";

export const blogPosts = {
  "1": {
    id: 1,
    date: "02/10/2023",
    title: "Radioactivity",
    content: Radio,
  },
  "2": {
    id: 2,
    date: "02/05/2023",
    title: "Nuclear Energy",
    content: NuclEnergy,
  },
  "3": {
    id: 3,
    date: "07/10/2023",
    title: "About the Schrodinger Equation",
    content: SchroEq,
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
