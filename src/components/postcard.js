// src/components/PostCard.js

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { useEffect } from "react";

function PostCard({ post }) {
  const controls = useAnimation();
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const postVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  return (
    <Link href={`/posts/${post.slug}`}>
      <motion.div
        ref={ref}
        className="bg-white rounded-lg shadow-lg overflow-hidden border-double border-4 border-sky-500"
        variants={postVariants}
        initial="hidden"
        animate={controls}
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative h-56 rounded-t-lg border-b-2 border-sky-500">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit={post.imagePos}
            objectPosition="top"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-2 text-gray-500 text-sm italic">
            <span>{post.timeAgo}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h2 className="mt-2 font-bold text-xl text-gray-900">{post.title}</h2>
          <p className="text-gray-700 mt-1">{post.excerpt}</p>
        </div>
      </motion.div>
    </Link>
  );
}

export default PostCard;
