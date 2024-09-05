import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10">
        <Job
          variants={jobVariants}
          icon={<BriefcaseSVG />}
          color="bg-emerald-600"
          timePeriod="June 2023 - May 2024"
          jobTitle="Software Intern"
          company="Versogen"
          description="I developed a database system and a proprietary web dashboard that streamlined hundreds of hours of data collection and plotting, and deployed it on a Linux server."
        />
        <Job
          variants={jobVariants}
          icon={<SunSVG />}
          color="bg-cyan-600"
          timePeriod="May 2024 - July 2024"
          jobTitle="SWE Intern"
          company="California ISO"
          description="Created Python scripts to interact with various APIs, developing real-time responsiveness to critical power grid issues."
        />
        <Job
          variants={jobVariants}
          icon={<RecycleSVG />}
          color="bg-violet-700"
          timePeriod="July 2024 - September 2024"
          jobTitle="Machine Learning Intern"
          company="Ensaras"
          description="Created complex visualizations with Grafana, developed web dashboards and APIs, and utilized CI/CD pipelines to ensure a smooth deployment process."
        />
      </div>
    </motion.section>
  );
}

function Job({ variants, ...props }) {
  return (
    <motion.div variants={variants} className="relative mb-6 sm:mb-0">
      <div className="flex items-center text-white">
        <div
          className={`z-10 flex items-center justify-center w-10 h-10 ${props.color} rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0 transition-transform duration-300 ease-in-out hover:-translate-y-2`}
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

function BriefcaseSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
      />
    </svg>
  );
}

function SunSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
}

function RecycleSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
      />
    </svg>
  );
}
