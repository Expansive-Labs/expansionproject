import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getBlogPosts() {
  console.log("Posts directory:", postsDirectory);
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    console.log("Found files:", fileNames);

    if (fileNames.length === 0) {
      console.log("No blog posts found.");
      return [];
    }

    return fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        id,
        title: matterResult.data.title || "Untitled",
        content: matterResult.content,
        likes: matterResult.data.likes || 0,
      };
    });
  } catch (error) {
    console.error("Error in getBlogPosts:", error);
    if (error.code === "ENOENT") {
      console.log("Blog directory does not exist.");
      return [];
    }
    throw error;
  }
}
