// components/PostCard.js
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { useEffect } from "react";

function PostCard({ post }) {
  const controls = useAnimation();
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1 });

  // Start the animation when the component is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Define animation variants
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
  );
}

export default function BlogCards() {
  const posts = [
    {
      image: "/food_pic.png",
      timeAgo: "October 28, 2024",
      readTime: "10 min",
      title: "Best food in Champaign",
      excerpt:
        "First and foremost, I'm a foodie 😋. Let me tell you about some of my favorite spots in Champaign, both well-known and hidden gems!",
      imagePos: "cover",
    },
    {
      image: "/memora_screenshot.png",
      timeAgo: "November 3, 2024",
      readTime: "5 min",
      title: "Sprained ankle x hackathon",
      excerpt:
        "Spraining my ankle right after the hackathon started was rough 🤕, but I started working on my first AR project in the hospital waiting room!",
      imagePos: "contain",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
