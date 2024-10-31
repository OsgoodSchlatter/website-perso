import { ListOfPostsHeader } from "../../../Single/ListOfPostsHeader";
import { useParams } from "react-router-dom";
import Electrolysis from "./Electrolysis";
import Geiger from "./ParticleDetector";


export const blogPosts = {
    "1": {
        id: 1,
        date: "2024",
        title: "Electrolysis",
        content: Electrolysis,
    },
    "2": {
        id: 2,
        date: "2024",
        title: "Geiger Counter",
        content: Geiger,
    },

};

const DIY = () => (

    <ListOfPostsHeader blogPosts={blogPosts} />

);

export default DIY;

export const DIYPosts = () => {
    const { postID } = useParams<{ postID: string }>();

    const post = blogPosts[postID as keyof typeof blogPosts];
    const Component = post ? post.content : null;

    if (!Component) {
        return <div>Loading...</div>;
    }

    return <Component title={post.title} date={post.date} />;
};


