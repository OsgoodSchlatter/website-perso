
import NuclEnergy from "./NuclEnergy";
import Radio from "./Radioactivity";

import { useParams } from "react-router-dom";
import SchroEq from "./SchroEq";
import Battery from "./Battery_Fuel_Cell";
import Neutronics from "./Neutronics";

export const blogPosts = {
  "1": {
    id: 1,
    date: "02/10/2023",
    title: "Radioactivity",
    content: Radio,
  },

  "3": {
    id: 3,
    date: "07/10/2023",
    title: "Quantum Mechanics",
    content: SchroEq,
  },
  "4": {
    id: 4,
    date: "16/10/2023",
    title: "Battery and Fuel Cell",
    content: Battery,
  },
  "5": {
    id: 5,
    date: "17/11/2023",
    title: "Neutronics",
    content: Neutronics,
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
