import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";


import { useParams } from "react-router-dom";
import { Russian } from "./LanguagesPosts/Russian";

export const blogPosts = {
    "1": {
        id: 1,
        date: "02/05/2023",
        title: "Russian 🇷🇺",
        content: Russian,
    },

};

export const LanguagesPosts = () => {
    const { postID } = useParams<{ postID: string }>();

    const post = blogPosts[postID as keyof typeof blogPosts];
    const Component = post ? post.content : null;

    if (!Component) {
        return <div>Loading...</div>;
    }

    return <Component title={post.title} date={post.date} />;
};

export const Languages = () => (

    <ListOfPostsHeader topic="languages" blogPosts={blogPosts} />

);

