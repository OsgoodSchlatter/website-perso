
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";

import PianoSongs from "./PianoPosts/PianoSongs";
import { useParams } from "react-router-dom";

export const blogPosts = {
  "1": {
    id: 1,
    date: "02/05/2023",
    title: "Piano Songs",
    content: PianoSongs,
  },
};

export const PianoPosts = () => {
  const { postID } = useParams<{ postID: string }>();

  const post = blogPosts[postID as keyof typeof blogPosts];
  const Component = post ? post.content : null;

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component title={post.title} />;
};


export const Piano = () => (

  <ListOfPostsHeader topic="piano" route="piano" blogPosts={blogPosts} />

);
