
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";
import { blogPosts } from "./ClimatePosts/ClimatePosts";



export const Climate = () => (

  <ListOfPostsHeader topic="climate" route="climate" blogPosts={blogPosts} />

);
