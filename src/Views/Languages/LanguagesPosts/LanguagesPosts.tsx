import { useParams } from "react-router-dom";
import { Russian } from "./Russian";

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

    return <Component postID={postID!} />;
};
