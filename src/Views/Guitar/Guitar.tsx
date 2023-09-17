import { Header } from "../../Single/Header";
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";
import { blogPosts } from "./GuitarPosts/GuitarPosts";

export const Guitar = () => {
  return (
    <>
      <ListOfPostsHeader topic="guitar" route="guitar" blogPosts={blogPosts} />
    </>
  );
};
