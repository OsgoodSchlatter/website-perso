
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";

import PianoSongs from "./PianoPosts/PianoSongs";
import { useParams } from "react-router-dom";
import PianoChords from "./PianoPosts/PianoChords";

export const blogPosts = {
  "1": {
    id: 1,
    date: "02/05/2023",
    title: "Piano Songs",
    content: PianoSongs,
  },
  "2": {
    id: 2,
    date: "02/05/2023",
    title: "Chords of songs",
    content: PianoChords,
  },
};

export const PianoPosts = () => {
  const { postID } = useParams<{ postID: string }>();

  const post = blogPosts[postID as keyof typeof blogPosts];
  const Component = post ? post.content : null;

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component title={post.title} date={post.date} />;
};


export const Piano = () => (

  <ListOfPostsHeader topic="piano" blogPosts={blogPosts} />

);
