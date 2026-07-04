import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#FF8C00",
        accent: "#E07B00",
        light: "#FFF5E6",
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
