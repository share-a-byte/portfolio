import { projects } from "@/lib/project_constants";
import Modal from "./modal";
import { useEffect, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

export const bgColorClasses = {
  emerald: "bg-emerald-400",
  fuchsia: "bg-fuchsia-400",
  indigo: "bg-indigo-400",
};

export default function Projects() {
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const controls = useAnimation();
  const [ref, inView] = useIntersectionObserver();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const openModal = useCallback((project) => {
    setModalContent(project);
    setModalState(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalState(false);
    setModalContent({});
  }, []);

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 text-white"
      id="projects"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto px-4 md:px-6"
      >
        <motion.div variants={headerVariants} className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
            These are my favorite projects, click on a project to learn more!
          </p>
        </motion.div>
        <motion.div
          variants={headerVariants}
          className="flex flex-wrap justify-center space-x-3 mt-5 text-black items-center"
        >
          <div className="text-white">Categories:</div>
          <button className="bg-emerald-400 py-2 px-5 rounded-full flex hover:bg-emerald-300 cursor-auto">
            Environment
          </button>
          <button className="bg-indigo-400 py-2 px-5 rounded-full flex hover:bg-indigo-300 cursor-auto">
            Finance
          </button>
          <button className="bg-fuchsia-400 py-2 px-5 rounded-full flex hover:bg-fuchsia-300 cursor-auto">
            Extraneous!
          </button>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={projectVariants}>
              <Project {...project} onClick={() => openModal(project)} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Modal
        isVisible={modalState}
        onClose={closeModal}
        content={modalContent}
      />
    </section>
  );
}

function Project({ title, color, description, image, icon, onClick }) {
  const colorClass = bgColorClasses[color] || "bg-cyan-400";
  return (
    <motion.div
      className="relative group overflow-visible rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative">
        <img
          alt={title}
          className="object-cover w-full h-64"
          height={400}
          src={image}
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
          width={500}
          onClick={onClick}
        />
        <motion.div
          className={`absolute -top-4 right-1 w-10 h-10 ${colorClass} rounded-full flex items-center justify-center shadow-md border-2 text-black border-black`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
      </div>
      <div className="p-4 dark:bg-gray-950">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
