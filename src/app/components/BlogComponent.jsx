"use client";
import React, { useState, useEffect } from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const BlogPost = ({ title, content, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleShare = () => {
    alert("Share options will be implemented here");
  };

  return (
    <div className="bg-[#c0c0c0] p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="mb-4">{content}</div>
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
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        console.log("Fetching blog posts...");
        const response = await fetch("/api/blogPosts");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `HTTP error! status: ${response.status}, message: ${errorData.error}`
          );
        }
        const data = await response.json();
        console.log("Fetched blog posts:", data);
        setBlogPosts(data);
      } catch (e) {
        console.error("Fetching blog posts failed:", e);
        setError(`Failed to load blog posts. Error: ${e.message}`);
      }
    }
    fetchBlogPosts();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-gray-600 to-indigo-800 text-white text-center py-12 mb-8 rounded-lg">
        <h1
          className="text-7xl font-bold"
          style={{
            fontFamily: "Kallisto Lined",
            display: "inline-block",
          }}
        >
          expansive music
        </h1>
      </div>
      {blogPosts.length > 0 ? (
        blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            content={<ReactMarkdown>{post.content}</ReactMarkdown>}
            initialLikes={post.likes}
          />
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
};

export default BlogComponent;
