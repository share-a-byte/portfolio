import { projects } from "@/lib/project_constants";
import Modal from "./modal";
import { useState } from "react";

export const bgColorClasses = {
  emerald: "bg-emerald-400",
  fuchsia: "bg-fuchsia-400",
  indigo: "bg-indigo-400",
};

export default function Projects() {
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (project) => {
    setModalContent(project);
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
    setModalContent({});
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
            These are my favorite projects, click on a project to learn more!
          </p>
        </div>
        <div className="flex justify-center space-x-3 mt-5 text-black items-center">
          <div className="text-white">Categories:</div>
          {/* <button className="bg-blue-400 py-2 px-5 rounded-full">
            All Projects
          </button> */}
          <button className="bg-emerald-400 py-2 px-5 rounded-full flex hover:bg-emerald-300 cursor-auto">
            {/* <span className="mr-1">
              <NatureIcon />
            </span> */}
            Environment
          </button>
          <button className="bg-indigo-400 py-2 px-5 rounded-full flex hover:bg-indigo-300 cursor-auto">
            {/* <span className="mr-1">
              <StockIcon />
            </span> */}
            Finance
          </button>
          <button className="bg-fuchsia-400 py-2 px-5 rounded-full flex hover:bg-fuchsia-300 cursor-auto">
            {/* <span className="mr-1">
              <HappyIcon />
            </span> */}
            Extraneous!
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              color={project.color}
              description={project.description}
              image={project.image}
              icon={project.icon}
              onClick={() => openModal(project)}
            />
          ))}
        </div>
      </div>
      <Modal
        isVisible={modalState}
        onClose={closeModal}
        content={modalContent}
      />
    </section>
  );
}

function Project(props) {
  const colorClass = bgColorClasses[props.color] || "bg-cyan-400";

  return (
    <div className="relative group overflow-visible rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <div className="relative">
        <img
          alt={props.title}
          className="object-cover w-full h-64"
          height={400}
          src={props.image}
          style={{
            aspectRatio: "500/400",
            objectFit: "cover",
          }}
          width={500}
          onClick={props.onClick}
        />
        <div
          className={`absolute -top-4 right-1 w-10 h-10 ${colorClass} rounded-full flex items-center justify-center shadow-md border-2 text-black border-black`}
        >
          {props.icon}
        </div>
      </div>
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="font-bold text-xl">{props.title}</h3>
        <p className="text-sm">{props.description}</p>
      </div>
    </div>
  );
}
