"use client";

import "./styles.css";
import { NavBar } from "./nav";
import Skills from "./skills";
import ContactForm from "./contact";
import About from "./about";
import Projects from "./projects";
import Experience from "./experience";
import Blog from "./blogs";

export function HomeScreen() {
  return (
    <div className="flex flex-col min-h-[100vh] bg-black">
      <NavBar />
      <main className="flex-1">
        <About />
        <div className="first-seperator"></div>
        <Projects />
        <div className="second-seperator"></div>
        <Experience />
        <div className="first-seperator"></div>
        <Skills />
        <div className="second-seperator"></div>
        <ContactForm />
        <div className="first-seperator"></div>
        <Blog />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-indigo-300">
        <p className="text-base text-white">
          © 2024 Vani Ramesh. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
