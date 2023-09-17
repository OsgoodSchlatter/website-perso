import { blogPosts } from "./PianoPosts/PianoPosts";
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";



export const Piano = () => (

  <ListOfPostsHeader topic="piano" route="piano" blogPosts={blogPosts} />

);
