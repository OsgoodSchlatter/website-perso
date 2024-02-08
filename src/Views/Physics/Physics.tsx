import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";
import SchroEq from "./PhysicsPosts/SchroEq";
import Battery from "./PhysicsPosts/Battery_Fuel_Cell";
import Neutronics from "./PhysicsPosts/Neutronics";
import Radio from "./PhysicsPosts/Radioactivity";
import DIY from "./PhysicsPosts/DIY"
import { useParams } from "react-router-dom";


export const blogPosts = {
    "4": {
        id: 4,
        date: "02/10/2023",
        title: "Radioactivity",
        content: Radio,
    },

    "3": {
        id: 3,
        date: "07/10/2023",
        title: "Quantum Mechanics",
        content: SchroEq,
    },
    "1": {
        id: 1,
        date: "16/10/2023",
        title: "Battery and hydrogen",
        content: Battery,
    },
    "5": {
        id: 5,
        date: "17/11/2023",
        title: "Neutronics",
        content: Neutronics,
    },
    "2": {
        id: 2,
        date: "19/01/2024",
        title: "DIY",
        content: DIY,
    },
};

export const Physics = () => (

    <ListOfPostsHeader topic="physics" blogPosts={blogPosts} />

);

export const PhysicsPosts = () => {
    const { postID } = useParams<{ postID: string }>();

    const post = blogPosts[postID as keyof typeof blogPosts];
    const Component = post ? post.content : null;

    if (!Component) {
        return <div>Loading...</div>;
    }

    return <Component title={post.title} date={post.date} />;
};

