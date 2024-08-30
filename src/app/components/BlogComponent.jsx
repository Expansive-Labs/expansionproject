"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { FaHeart, FaSearch } from "react-icons/fa";

const BlogPostPreview = ({ id, title, content, likes }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const previewContent = content.slice(0, 150) + "...";

  return (
    <div 
      className={`bg-[#c0c0c0] p-6 rounded-lg mb-8 cursor-pointer transition-all duration-300 ease-in-out ${
        isHovered ? 'transform scale-105 shadow-lg' : ''
      }`}
      onClick={() => router.push(`/blog/${id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-2xl font-bold mb-4 transition-colors duration-300 ease-in-out">
        {title}
      </h2>
      <div className="mb-4">{previewContent}</div>
      <div className="flex items-center">
        <span className="flex items-center">
          <FaHeart className={`mr-2 transition-colors duration-300 ease-in-out ${
            isHovered ? 'text-red-500' : ''
          }`} /> 
          {likes}
        </span>
      </div>
    </div>
  );
};

const BlogComponent = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        console.log('Fetching blog posts...');
        const response = await fetch('/api/blogPosts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        console.log('Fetched posts:', posts);
        setBlogPosts(posts);
      } catch (e) {
        console.error("Fetching blog posts failed:", e);
        setError(`Failed to load blog posts. Error: ${e.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogPosts();
  }, []);

  useEffect(() => {
    const results = blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm, blogPosts]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 border rounded"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <BlogPostPreview
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            likes={post.likes}
          />
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
};

export default BlogComponent;
