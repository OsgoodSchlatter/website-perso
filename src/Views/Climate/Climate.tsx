import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";

import { useParams } from "react-router-dom";
import OOM from "./ClimatePosts/OOM";
import DisplayIngredients from "../CarbonCalculator/DisplayIngredients";
import generalArray from "./ClimatePosts/OOMdata";
import { blogPostsArray, BlogPostType } from "../Home/Home"

const climateBlogPosts = Object.values(blogPostsArray)
  .filter((post: BlogPostType) => post.category === "Climate");

export const ClimatePosts = () => {
  const { postID } = useParams<{ postID: string }>();
  const post = climateBlogPosts[postID as keyof typeof blogPostsArray];
  const Component = post ? post.content : null;

  if (!Component) {
    return <div>Loading...</div>;
  }

  return (
    <Component dataArray={generalArray} title={post.title} date={post.date} />
  );
};

export const Climate = () => (
  <ListOfPostsHeader topic="climate" route="climate" blogPosts={climateBlogPosts} />
);
