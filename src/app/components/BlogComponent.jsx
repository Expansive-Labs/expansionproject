"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHeart, FaSearch, FaShareAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const BlogPostPreview = ({ id, title, content, likes }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const previewContent = content.slice(0, 100) + "..."; // Reduced preview length on mobile

  return (
    <div
      className={`bg-[#c0c0c0] rounded-lg cursor-pointer overflow-hidden transition-all duration-300 ease-in-out ${
        isHovered
          ? "transform translate-y-[-4px] translate-x-[-4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
          : "shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
      }`}
      onClick={() => router.push(`/blog/${id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 sm:p-6 border-2 border-[#a0a0a0] rounded-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 transition-colors duration-300 ease-in-out">
          {title}
        </h2>
        <div className="mb-2 sm:mb-4 text-sm sm:text-base">
          {previewContent}
        </div>
        <div className="flex items-center">
          <span className="flex items-center mr-4">
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
    <div className="blog-content">
      <div className="container mx-auto px-4 pt-1 sm:pt-2 pb-4 sm:pb-8">
        <Link href="/" className="block text-center mb-2 sm:mb-4">
          <Image
            src="/images/infiniteLogo.webp"
            alt="Infinite Logo"
            width={60}
            height={60}
            className="mx-auto"
          />
        </Link>
        <div className="relative bg-gradient-to-r from-gray-600 to-indigo-800 text-white text-center py-6 sm:py-8 mb-6 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-silver via-blue-400 to-blue-800 opacity-50"></div>
          <div className="relative z-10">
            <h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold px-4"
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
              className="w-full p-2 pl-10 border rounded"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="blog-post-area mb-4 sm:mb-8">
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
          <p className="text-white">No blog posts available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogComponent;
