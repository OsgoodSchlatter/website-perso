import { blogPosts } from "./PubliArticle";
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";



export const Publications = () => (

    <ListOfPostsHeader topic="Publications and talks" blogPosts={blogPosts} />

);

