import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          400: "#C9A227",
          500: "#B8941F",
          600: "#A68517",
        },
        dark: "#1A1A1A",
      },
    },
  },
  plugins: [],
};

export default config;
