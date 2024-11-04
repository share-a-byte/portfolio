/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: (theme) => ({
        invert: {
          css: {
            "--tw-prose-body": theme("colors.gray.300"),
            "--tw-prose-headings": theme("colors.white"),
            "--tw-prose-lead": theme("colors.gray.400"),
            "--tw-prose-links": theme("colors.blue.400"),
            "--tw-prose-bold": theme("colors.white"),
            "--tw-prose-counters": theme("colors.gray.400"),
            "--tw-prose-bullets": theme("colors.gray.600"),
            "--tw-prose-hr": theme("colors.gray.700"),
            "--tw-prose-quotes": theme("colors.gray.100"),
            "--tw-prose-quote-borders": theme("colors.gray.700"),
            "--tw-prose-captions": theme("colors.gray.400"),
            "--tw-prose-code": theme("colors.white"),
            "--tw-prose-pre-code": theme("colors.gray.100"),
            "--tw-prose-pre-bg": theme("colors.gray.800"),
            "--tw-prose-th-borders": theme("colors.gray.700"),
            "--tw-prose-td-borders": theme("colors.gray.800"),
            // Additional customizations
            "h1, h2, h3, h4, h5, h6": {
              lineHeight: theme("lineHeight.tight"),
            },
            p: {
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
              lineHeight: theme("lineHeight.relaxed"),
            },
            img: {
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.6"),
            },
            blockquote: {
              fontStyle: "italic",
              color: theme("colors.gray.300"),
              borderLeftColor: theme("colors.gray.700"),
              paddingLeft: theme("spacing.4"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
