import { getBlogPosts } from '../../utils/blogUtils';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log("Attempting to get blog posts...");
    const posts = getBlogPosts();
    console.log("Retrieved posts:", posts);
    
    if (posts.length === 0) {
      // Return an empty array instead of a 204 status
      return NextResponse.json([]);
    }
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error in GET /api/blogPosts:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}