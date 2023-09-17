import { blogPosts } from "./CSPosts/CSPosts";
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";

export const CS = () => (

  <ListOfPostsHeader topic="computer science" route="cs" blogPosts={blogPosts} />

);
