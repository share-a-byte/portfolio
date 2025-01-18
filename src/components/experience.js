import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { BriefcaseBusinessIcon, FuelIcon, Recycle, Sun } from "lucide-react";

export default function Experience() {
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
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const jobVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-12 md:py-24 lg:py-32 mx-10 text-white"
      id="experience"
    >
      <motion.h2
        variants={headerVariants}
        className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl"
      >
        Past Experience
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-10">
        <Job
          variants={jobVariants}
          icon={<BriefcaseBusinessIcon />}
          color="bg-emerald-300"
          timePeriod="June 2023 - May 2024"
          jobTitle="Software Intern"
          company="Versogen"
          description="Developed a database system and a proprietary web dashboard that streamlined hundreds of hours of data collection and plotting, deployed it on a Linux server."
        />
        <Job
          variants={jobVariants}
          icon={<Sun />}
          color="bg-cyan-300"
          timePeriod="May 2024 - July 2024"
          jobTitle="SWE Intern"
          company="California ISO"
          description="Created Python scripts to interact with various APIs, developing real-time responsiveness to critical power grid issues."
        />
        <Job
          variants={jobVariants}
          icon={<Recycle />}
          color="bg-violet-300"
          timePeriod="July 2024 - September 2024"
          jobTitle="Full-Stack Intern"
          company="Ensaras"
          description="Created complex visualizations with Grafana, developed web dashboards and APIs, and utilized CI/CD pipelines to ensure a smooth deployment process."
        />
        <Job
          variants={jobVariants}
          icon={<FuelIcon />}
          color="bg-pink-300"
          timePeriod="Nov 2024 - Present"
          jobTitle="Data Engineering Intern"
          company="Ameren"
          description="Worked with Databricks and AWS to streamline data processing pipelines."
        />
      </div>
    </motion.section>
  );
}

function Job({ variants, ...props }) {
  return (
    <motion.div variants={variants} className="relative mb-6 sm:mb-0">
      <div className="flex items-center text-black">
        <div
          className={`z-10 flex items-center justify-center w-10 h-10 ${props.color} rounded-full ring-1 ring-black shrink-0 transition-transform duration-300 ease-in-out hover:-translate-y-2`}
        >
          {props.icon}
        </div>
        <div className="sm:flex w-full bg-gray-200 h-0.5"></div>
      </div>
      <div className="mt-3 sm:pr-8 text-center sm:text-left">
        <h3 className="text-lg font-semibold text-white">
          {props.jobTitle} @ {props.company}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-300">
          {props.timePeriod}
        </time>
        <p className="text-base font-normal">{props.description}</p>
      </div>
    </motion.div>
  );
}
