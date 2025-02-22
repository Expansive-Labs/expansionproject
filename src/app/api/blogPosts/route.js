import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function GET(request) {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/content/blog-posts');
    console.log('Posts directory:', postsDirectory);
    
    const filenames = await fs.readdir(postsDirectory);
    console.log('Found files:', filenames);

    if (filenames.length === 0) {
      console.log('No blog posts found.');
      return NextResponse.json([]);
    }

    const posts = await Promise.all(filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      // Extract the numeric prefix from the filename
      const numericPrefix = parseInt(filename.split('-')[0]);

      return {
        id: filename.replace(/\.md$/, ''),
        numericPrefix, // Add this to help with sorting
        ...data,
        content,
        likes: 0,
      };
    }));

    // Sort posts by numeric prefix in descending order (highest/newest first)
    const sortedPosts = posts.sort((a, b) => b.numericPrefix - a.numericPrefix);

    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    console.log('Requested ID:', id);

    if (id) {
      const post = sortedPosts.find(p => p.id === id);
      if (post) {
        console.log('Found post:', post);
        return NextResponse.json(post);
      } else {
        console.log('Post not found for id:', id);
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
    }

    // Remove the numericPrefix from the response
    const cleanedPosts = sortedPosts.map(({ numericPrefix, ...post }) => post);
    return NextResponse.json(cleanedPosts);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}