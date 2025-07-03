import React from "react";
import BlogComponent from "../components/BlogComponent";

export const metadata = {
  title: "Expansion Project Blog | Jazz Fusion News & Updates from Philadelphia",
  description: "Latest news, tour dates, album releases, and insights from Philadelphia jazz fusion band Expansion Project. Read about modern fusion, live shows, and the Philly music scene.",
  keywords: "Expansion Project blog, jazz fusion news, Philadelphia music blog, fusion band updates, live music Philadelphia, jazz fusion articles",
};

export default function BlogPage() {
  return (
    <div className="blog-content">
      <BlogComponent />
    </div>
  );
}
