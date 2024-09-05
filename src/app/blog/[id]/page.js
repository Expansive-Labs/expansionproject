"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { FaHeart, FaShareAlt, FaComment } from "react-icons/fa";

const Comment = ({ author, content, date }) => (
  <div className="bg-gray-100 p-4 rounded-lg mb-2">
    <p className="font-bold">{author}</p>
    <p>{content}</p>
    <p className="text-sm text-gray-500">{new Date(date).toLocaleString()}</p>
  </div>
);

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    async function fetchBlogPost() {
      try {
        console.log("Fetching post with id:", id);
        const response = await fetch(`/api/blogPosts?id=${id}`);
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const data = await response.json();
          if (!response.ok) {
            throw new Error(
              data.error || `HTTP error! status: ${response.status}`
            );
          }
          console.log("Fetched post:", data);
          setPost(data);
        } else {
          const text = await response.text();
          console.error("Received non-JSON response:", text);
          throw new Error("Received non-JSON response from server");
        }
      } catch (e) {
        console.error("Fetching blog post failed:", e);
        setError(`Failed to load blog post. Error: ${e.message}`);
      }
    }
    fetchBlogPost();

    // Load comments from local storage
    const storedComments = localStorage.getItem(`comments_${id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = {
      author: "Anonymous", // You can add user authentication later
      content: newComment,
      date: new Date().toISOString(),
    };
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
    setNewComment("");
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-content">
      <div className="container mx-auto px-4 py-8">
        <div className="blog-post-area mb-8">
          <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
          <div className="mb-4">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          <div className="flex items-center">
            <button className="flex items-center mr-4">
              <FaHeart className="mr-2" /> {post.likes}
            </button>
            <button className="flex items-center">
              <FaShareAlt className="mr-2" /> Share
            </button>
          </div>
        </div>
        <div className="mt-8 blog-post-area">
          <h3 className="text-xl font-bold mb-4">Comments</h3>
          {comments.map((comment, index) => (
            <Comment key={index} {...comment} />
          ))}
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <textarea
              className="w-full p-2 border rounded"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              required
            />
            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
