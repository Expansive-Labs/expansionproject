// Script to generate sitemap.xml from static pages and blog posts
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.expansionprojectmusic.com';
const today = new Date().toISOString().split('T')[0];

// Static pages
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/#about', priority: '0.7', changefreq: 'monthly' },
  { url: '/#music', priority: '0.7', changefreq: 'monthly' },
  { url: '/#tour', priority: '0.9', changefreq: 'weekly' },
  { url: '/#videos', priority: '0.7', changefreq: 'monthly' },
  { url: '/#merch', priority: '0.6', changefreq: 'monthly' },
  { url: '/#contact', priority: '0.8', changefreq: 'monthly' }
];

// Get blog post slugs from src/content/blog-posts
const blogDir = path.join(__dirname, '../src/content/blog-posts');
const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
const blogPosts = blogFiles.map(f => f.replace(/^\d+-/, '').replace(/\.md$/, ''));

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

// Add static pages
staticPages.forEach(page => {
  sitemap += `\n  <url>\n    <loc>${baseUrl}${page.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`;
});

// Add blog posts
blogPosts.forEach(slug => {
  sitemap += `\n  <url>\n    <loc>${baseUrl}/blog/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`;
});

sitemap += '\n</urlset>\n';

// Write sitemap.xml to public/
const outPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outPath, sitemap);
console.log('✅ sitemap.xml generated with', staticPages.length + blogPosts.length, 'URLs.');
console.log('To notify Google, visit:');
console.log(`https://www.google.com/ping?sitemap=${baseUrl}/sitemap.xml`); 