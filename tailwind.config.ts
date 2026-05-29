import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        accent: "#FF7426",
        light: "#FDF8EE",
        tertiary: "#f7f7f7",
        highlight: "#4D2C5E",
        forest: "#2f4a3a",
        clay: "#b5683a",
        mist: "#cfd6d3",
      },
      lineClamp: {
        2: "2",
      },
    },
  },
  plugins: [],
};

export default config;
