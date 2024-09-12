"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHeart, FaSearch, FaShareAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const BlogPostPreview = ({ id, title, content, likes }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const previewContent = content.slice(0, 100) + "..."; // Reduced preview length
  const truncatedTitle = title.length > 50 ? title.slice(0, 50) + "..." : title; // Truncate long titles

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      router.push(`/blog/${id}`);
    }, 150); // Delay navigation to allow animation to complete
  };

  return (
    <div
      className={`bg-[#c0c0c0] rounded-lg cursor-pointer overflow-hidden transition-all duration-300 ease-in-out h-full ${
        isHovered
          ? "transform translate-y-[-4px] translate-x-[-4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
          : "shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
      } ${
        isClicked
          ? "transform translate-y-[2px] translate-x-[2px] shadow-[1px_1px_0px_0px_rgba(0,0,0,0.1)]"
          : ""
      }`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 sm:p-6 border-2 border-[#a0a0a0] rounded-lg h-full flex flex-col">
        <div className="flex-grow">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 transition-colors duration-300 ease-in-out line-clamp-2">
            {truncatedTitle}
          </h2>
          <div className="mb-2 sm:mb-4 text-sm sm:text-base line-clamp-3">
            {previewContent}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="flex items-center">
            <FaHeart
              className={`mr-2 transition-colors duration-300 ease-in-out ${
                isHovered ? "text-red-500" : ""
              }`}
            />
            {likes}
          </span>
          <span className="flex items-center">
            <FaShareAlt className="mr-2" /> Share
          </span>
        </div>
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
        console.log("Fetching blog posts...");
        const response = await fetch("/api/blogPosts");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        console.log("Fetched posts:", posts);
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
    const results = blogPosts.filter(
      (post) =>
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
    <div className="blog-content bg-[#121212] min-h-screen">
      <div className="container mx-auto px-4 pt-4 sm:pt-8 pb-8 sm:pb-16">
        <Link href="/" className="block text-center mb-4 sm:mb-8">
          <Image
            src="/images/infiniteLogo.webp"
            alt="Infinite Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
        </Link>
        <div className="relative bg-gradient-to-r from-gray-600 to-indigo-800 text-white text-center py-8 sm:py-12 mb-8 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-silver via-blue-400 to-blue-800 opacity-50"></div>
          <div className="relative z-10">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold px-4"
              style={{
                fontFamily: "Kallisto Lined",
                display: "inline-block",
              }}
            >
              expansive music
            </h1>
          </div>
        </div>
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-12 border rounded-lg bg-[#1e1e1e] text-white"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="blog-post-area mb-6 sm:mb-8">
                <BlogPostPreview
                  id={post.id}
                  title={post.title}
                  content={post.content}
                  likes={post.likes}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white text-center text-lg">No blog posts available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogComponent;
