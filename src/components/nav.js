import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return <>{isMobile ? <MobileNavBar /> : <DesktopNavBar />}</>;
};

const DesktopNavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-5 flex justify-center">
      <SlideTabs />
    </div>
  );
};

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 z-50 p-2 bg-white rounded-full border-2 border-black"
      >
        <MenuIcon />
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 p-5 pt-20">
          <MobileTabs onItemClick={handleNavItemClick} />
        </div>
      )}
    </>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex rounded-full border-2 border-black bg-white p-1"
    >
      <NavItem
        href="#about"
        text="Home"
        Icon={HomeIcon}
        setPosition={setPosition}
      />
      <NavItem
        href="#projects"
        text="Projects"
        Icon={ProjectsIcon}
        setPosition={setPosition}
      />
      <NavItem
        href="#experience"
        text="Experience"
        Icon={ExperienceIcon}
        setPosition={setPosition}
      />
      <NavItem
        href="#skills"
        text="Skills"
        Icon={SkillIcon}
        setPosition={setPosition}
      />
      <NavItem
        href="#contact"
        text="Contact"
        Icon={ContactIcon}
        setPosition={setPosition}
      />
      <Cursor position={position} />
    </ul>
  );
};

const MobileTabs = ({ onItemClick }) => {
  return (
    <ul className="space-y-4 flex flex-col items-end">
      {" "}
      {/* Right-aligned items */}
      <MobileNavItem
        href="#about"
        text="Home"
        Icon={HomeIcon}
        onClick={onItemClick}
      />
      <MobileNavItem
        href="#projects"
        text="Projects"
        Icon={ProjectsIcon}
        onClick={onItemClick}
      />
      <MobileNavItem
        href="#experience"
        text="Experience"
        Icon={ExperienceIcon}
        onClick={onItemClick}
      />
      <MobileNavItem
        href="#skills"
        text="Skills"
        Icon={SkillIcon}
        onClick={onItemClick}
      />
      <MobileNavItem
        href="#contact"
        text="Contact"
        Icon={ContactIcon}
        onClick={onItemClick}
      />
    </ul>
  );
};

const NavItem = ({ href, text, Icon, setPosition }) => {
  return (
    <a href={href}>
      <Tab setPosition={setPosition}>
        <div className="flex items-center space-x-2">
          <span>{text}</span>
          <Icon className="w-5 h-5" />
        </div>
      </Tab>
    </a>
  );
};

const MobileNavItem = ({ href, text, Icon, onClick }) => {
  return (
    <li className="w-full">
      {" "}
      {/* Full width to allow right alignment */}
      <a
        href={href}
        className="flex items-center justify-end space-x-4 text-lg text-black"
        onClick={onClick}
      >
        <span>{text}</span>
        <Icon className="w-6 h-6" />
      </a>
    </li>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-sm text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-8 rounded-full bg-black md:h-12"
    />
  );
};

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#000000"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>
  );
}

function SkillIcon(props) {
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
        d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
      />
    </svg>
  );
}

function ProjectsIcon(props) {
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
        d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
      />
    </svg>
  );
}

function HomeIcon(props) {
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
        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
      />
    </svg>
  );
}

function ExperienceIcon(props) {
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
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
      />
    </svg>
  );
}
