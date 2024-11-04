// src/app/posts/[slug]/page.js

import posts from "@/data/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import { marked } from "marked"; // Ensure this import is correct

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  // Convert Markdown content to HTML
  const contentHtml = marked(post.content);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-8">{post.title}</h1>
        <div className="flex items-center space-x-2 text-gray-500 text-sm italic">
          <span>{post.timeAgo}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <div className="relative h-64 w-full mt-6 mb-6">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit={post.imagePos}
            objectPosition="top"
          />
        </div>
        <div
          className="prose prose-xl prose-invert"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        ></div>
      </div>
    </div>
  );
}
