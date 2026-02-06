import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a3a4a",
        secondary: "#2d6a7a",
        accent: "#4ecdc4",
        dark: "#0d1b2a",
        light: "#f0f7f4",
        sale: "#e74c3c",
      },
    },
  },
  plugins: [],
};
export default config;
