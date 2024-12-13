// src/components/BlogCards.js

import posts from "@/data/posts";
import PostCard from "./postcard";

export default function BlogCards() {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 gap-6 max-w-2xl">
        {posts.map((post, index) =>
          !post.hidden ? <PostCard key={index} post={post} /> : null
        )}
      </div>
    </div>
  );
}
