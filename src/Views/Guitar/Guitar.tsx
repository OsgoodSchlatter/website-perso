import { Header } from "../../Single/Header";
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";

import { useParams } from "react-router-dom";
import { GuitarSongs } from "./GuitarPosts/GuitarSongs";

export const blogPosts = {
  "1": {
    id: 1,
    date: "10/08/2023",
    title: "Guitar Songs",
    content: GuitarSongs,
  },
};

export const GuitarPosts = () => {
  const { postID } = useParams<{ postID: string }>();

  const post = blogPosts[postID as keyof typeof blogPosts];
  const Component = post ? post.content : null;

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component title={post.title} />;
};

export const Guitar = () => {
  return (
    <>
      <ListOfPostsHeader topic="guitar" route="guitar" blogPosts={blogPosts} />
    </>
  );
};
