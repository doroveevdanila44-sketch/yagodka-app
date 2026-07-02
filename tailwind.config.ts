import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#D92D5A",
        accent: "#FF4D7D",
        light: "#FFE6EE",
        ink: "#1A1A1A",
      },
      maxWidth: {
        app: "390px",
      },
    },
  },
  plugins: [],
};

export default config;
