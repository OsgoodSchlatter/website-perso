import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";
import { blogPosts } from "./LanguagesPosts/LanguagesPosts";

export const Languages = () => (

    <ListOfPostsHeader topic="languages" route="languages" blogPosts={blogPosts} />

);

