import Link from "next/link";

const colorClasses = {
  emerald: "border-emerald-400",
  fuchsia: "border-fuchsia-400",
  indigo: "border-indigo-400",
};

const textColorClasses = {
  emerald: "text-emerald-300",
  fuchsia: "text-fuchsia-300",
  indigo: "text-indigo-300",
};

export default function Modal({ isVisible, onClose, content }) {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  const colorClass = colorClasses[content.color] || "border-cyan-400";
  const textColor = textColorClasses[content.color] || "text-cyan-400";

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end mb-1"
          onClick={() => onClose()}
        >
          <Exit />
        </button>
        <div
          className={`bg-black p-2 text-white rounded-md border-double border-4 ${colorClass} text-center m-2`}
        >
          <b className="text-2xl">{content.title}</b>
          <div className="my-2">
            <b>Accomplishments:</b> {content.accomplishments}
          </div>
          <div className="my-2">
            <b>Tech Used:</b> {content.tech}
          </div>
          {content.link != "#" ? (
            <div className="my-1">
              <Link
                href={content.link}
                target="_blank"
                className={`underline ${textColor}`}
              >
                Check it out!
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

function Exit() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
