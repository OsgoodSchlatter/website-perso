import { Header } from "../../Single/Header";
import { blogPosts } from "./PianoPosts/PianoPosts";
import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

export const PostHeader = ({
  date,
  title,
  choice,
  handleClick,
}: {
  date: string;
  title: string;
  choice: number;
  handleClick: (arg0: number) => any;
}) => {
  return (
    <div>
      <div>
        {date}
        <div
          className="text-4xl text-blue-700 hover:underline"
          onClick={() => handleClick(choice)}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export const Piano = () => {
  const navigate = useNavigate();

  const handleClick = (postId: number) => {
    navigate(`/piano/${postId}`);
  };
  return (
    <>
      <Header name={"piano"} posts={Object.keys(blogPosts).length} />
      <div className="flex justify-center py-12">
        <div className="grid grid-rows-4 gap-4">
          {Object.keys(blogPosts).map((postID) => {
            const post = blogPosts[postID as keyof typeof blogPosts];
            return (
              <PostHeader
                choice={post.id}
                date={post.date}
                handleClick={handleClick}
                title={post.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
