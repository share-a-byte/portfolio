// ICONS FOR PROJECTS SECTION
export const NatureIcon = () => {
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
        d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
      />
    </svg>
  );
};

export const StockIcon = () => {
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
        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};

export const HappyIcon = () => {
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
        d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
      />
    </svg>
  );
};

export const projects = [
  {
    title: "Graphics Projects",
    color: "fuchsia",
    description: "Some custom graphics I've created in WebGL.",
    image: "/projects/graphics_img.png",
    link: "https://www.vaniramesh.com/graphics",
    icon: <HappyIcon />,
    accomplishments: "Learning computer graphics from scratch.",
    tech: "WebGL2",
  },
  {
    title: "Nebula",
    color: "indigo",
    description:
      "Designed a fun website highlighting some of my own favorite websites!",
    image: "/projects/nebula.png",
    link: "https://nebula-i8nv.vercel.app/",
    icon: <HappyIcon />,
    accomplishments: "Created in a few hours!",
    tech: "Next.js, TailwindCSS, Supabase",
  },
  {
    title: "Natra",
    color: "emerald",
    description:
      "A globally-used cross-platform mobile app focused on environmental sustainability.",
    image: "/projects/natra.png",
    link: "https://www.wearenatra.com/",
    icon: <NatureIcon />,
    accomplishments:
      "1000+ users. 300,000+ gallons water saved. $5000+ saved. 2000+ kg solid waste saved.",
    tech: "GoogleMLKit, Flutter, MySQL, Firebase, React.js",
  },

  {
    title: "Incluso",
    color: "fuchsia",
    description:
      "A unique search engine that prioritizes diversity and inclusion.",
    image: "/projects/incluso.png",
    link: "https://github.com/share-a-byte/incluso",
    icon: <HappyIcon />,
    accomplishments: "Winner of Code ADA Hackathon, chosen out of 20+ teams",
    tech: "React.js, MongoDB, TailwindCSS",
  },
  {
    title: "GreenThread",
    color: "emerald",
    description:
      "A full-stack web app enabling users to shop sustainably with ease.",
    image: "/projects/greenthread.png",
    link: "https://github.com/share-a-byte/greenthread",
    icon: <NatureIcon />,
    accomplishments: "Winner of CSBase Climate Hackathon",
    tech: "Next.js, TailwindCSS, Python, GPT-4, BeautifulSoup",
  },
  {
    title: "Ticker",
    color: "indigo",
    description:
      "A trading algorithm built with market indicators and historical data.",
    image: "/projects/trading.jpg",
    link: "#",
    icon: <StockIcon />,
    accomplishments:
      "Executed 40+ successful trades based on algorithm designed. 3.0 Win/Loss Ratio",
    tech: "Python, Alpaca, PyAlgoTrade, AWS Lambda",
  },
  {
    title: "Carbonation Depth of Cement",
    color: "emerald",
    description:
      "An accurate ML model for sustainable cementation, trained on historical data.",
    image: "/projects/concrete.png",
    link: "https://drive.google.com/file/d/1mxNpmqsYREPbqoT1MVREoRShW2rqjxPX/view?usp=sharing",
    icon: <NatureIcon />,
    accomplishments: "Awarded 'Best Research Presentation' at PURE Symposium",
    tech: "Python, TensorFlow, Numpy, ScikitLearn",
  },
  {
    title: "Playlist Generator",
    color: "fuchsia",
    description: "A script for generating personalized user playlists.",
    image: "/projects/spotify.jpg",
    link: "https://github.com/share-a-byte/playlist_generator/",
    icon: <HappyIcon />,
    accomplishments: "Generated 100+ playlists for friends and family :)",
    tech: "Spotify API, Python, BeautifulSoup",
  },
];
