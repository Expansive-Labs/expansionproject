import React from 'react';
import markdownContent from '../content/blog-posts/first-post.md'; // Adjust the import as necessary

export default function BlogComponent() {
  return (
    <div className="markdown-background">
      <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
    </div>
  );
}