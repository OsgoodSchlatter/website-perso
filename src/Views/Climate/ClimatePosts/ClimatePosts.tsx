import { useParams } from "react-router-dom";
import OOM from "./OOM";
import EPR from "../../Physics/PhysicsPosts/EPR";

export const blogPosts = {
  "1": {
    id: 1,
    date: "17/07/2023",
    title: "Orders of magnitude",
    content: OOM,
  },
};

export const ClimatePosts = () => {
  const { postID } = useParams<{ postID: string }>();

  const post = blogPosts[postID as keyof typeof blogPosts];
  const Component = post ? post.content : null;

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component postID={postID!} />;
};