import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: 'url("/images/signin.jpeg")',
      },
      colors: {
        accent: "545454",
        "gray-color": "#eeeeee",
        secondary: "#f2c23b",
        primary: "#3f97c0",
        purple: "#943fd7",
        orange: "#fa4340",
      },
    },
  },
  plugins: [],
};
export default config;
