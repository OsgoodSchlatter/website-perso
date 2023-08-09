import { blogPosts } from "./PianoPosts/PianoPosts";
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";



export const Piano = () => (

  <ListOfPostsHeader topic="piano" blogPosts={blogPosts} />

);
