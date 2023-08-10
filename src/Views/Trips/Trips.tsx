import { Header } from "../../Single/Header";
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";
import { blogPosts } from "./TripsPosts/TripsPosts";

export const Trips = () => {
  return (
    <>
      <ListOfPostsHeader topic="trips" blogPosts={blogPosts} />

    </>
  );
};
