import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "../../Single/Header";
import { blogPosts } from "./CSPosts/CSPosts";
import React from "react";
import { HeaderPost } from "../../Single/HeaderPost";

export const CS = () => {
  const navigate = useNavigate();

  const handleClick = (postId: number) => {
    navigate(`/cs/${postId}`);
  };
  return (
    <>
      <Header name={"computer science"} posts={2} />
      <div className="flex justify-center py-12 px-2">
        <div className="grid grid-rows-4 gap-4">
          {Object.keys(blogPosts).map((postID) => {
            const post = blogPosts[postID as keyof typeof blogPosts];
            return (
              <HeaderPost
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
