"use client";

import React, { useState } from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";

const BlogPost = ({ title, content, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleShare = () => {
    alert("Share options will be implemented here");
  };

  return (
    <div className="bg-[#1E1E1E] p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-4">{content}</p>
      <div className="flex items-center">
        <button onClick={handleLike} className="flex items-center mr-4">
          <FaHeart className="mr-2" /> {likes}
        </button>
        <button onClick={handleShare} className="flex items-center">
          <FaShareAlt className="mr-2" /> Share
        </button>
      </div>
    </div>
  );
};

const BlogComponent = () => {
  const blogPosts = [
    {
      title: "BLOG #1",
      content: "CONTENT",
      initialLikes: 0,
    },
    {
      title: "BLOG #2",
      content: "CONTENT",
      initialLikes: 0,
    },
    {
      title: "BLOG #3",
      content: "CONTENT",
      initialLikes: 0,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        THIS PAGE IS UNDER CONSTRUCTION
      </h1>
      {blogPosts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogComponent;
