import { blogPosts } from "./PublicationsPosts";
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";



export const Publications = () => (

    <ListOfPostsHeader topic="Publications and talks" blogPosts={blogPosts} />

);

