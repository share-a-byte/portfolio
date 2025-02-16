import { motion } from "framer-motion";
import { NotebookPen } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-cyan-200 tracking-normal">
              Vani Ramesh
            </h1>
            <p className="max-w-[600px] text-white md:text-xl pl-1">
              <b>Hi there, I&apos;m Vani! 👋🏽</b>
            </p>
            <p className="max-w-[600px] text-white md:text-xl pl-1">
              I&apos;m a dedicated CS student @ UIUC with a passion for
              leveraging technology to tackle <b>systemic challenges</b> and
              drive <b>meaningful change!</b>
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
                <div className="ml-1">
                  <DownloadIcon />
                </div>
              </Link>
              <Link
                className="inline-flex justify-center items-center rounded-lg px-2 py-1 bg-cyan-400 hover:bg-cyan-500"
                href="http://linkedin.com/in/vani-ramesh/"
                target="_blank"
              >
                <svg
                  class="w-6 h-6 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clip-rule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </Link>
              <Link
                className="inline-flex justify-center items-center rounded-lg px-2 py-1 bg-violet-400 hover:bg-violet-500"
                href="https://vaniramesh.substack.com/"
                target="_blank"
              >
                <NotebookPen className="text-black" />
              </Link>
              {/* <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#projects"
              >
                My Projects
              </Link> */}
            </div>
          </motion.div>
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img
              alt="Vani Ramesh"
              className="rounded-lg object-cover shadow-md shadow-white"
              height={400}
              src="/projects/me.jpg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
                objectPosition: "center 20%",
              }}
              width={400}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="size-6"
    >
      <path
        fill-rule="evenodd"
        d="M9.75 6.75h-3a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3h-3V1.5a.75.75 0 0 0-1.5 0v5.25Zm0 0h1.5v5.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V6.75Z"
        clip-rule="evenodd"
      />
      <path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z" />
    </svg>
  );
}
