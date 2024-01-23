import { Header } from "../../Single/Header";
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";

import { useParams } from "react-router-dom";
import { GuitarSongs } from "./GuitarPosts/GuitarSongs";
import { Scales } from "./GuitarPosts/Scales";


export const blogPosts = {
  "1": {
    id: 1,
    date: "10/08/2023",
    title: "Guitar Songs",
    content: GuitarSongs,
  },
  "2": {
    id: 2,
    date: "2024",
    title: "Guitar Scales",
    content: Scales,
  },
};

export const GuitarPosts = () => {
  const { postID } = useParams<{ postID: string }>();

  const post = blogPosts[postID as keyof typeof blogPosts];
  const Component = post ? post.content : null;

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component title={post.title} date={post.date} />;
};

export const Guitar = () => {
  return (
    <>
      <ListOfPostsHeader topic="guitar" route="guitar" blogPosts={blogPosts} />
    </>
  );
};
