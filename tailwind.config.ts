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
        cream: {
          50: "#FFFEF7",
          100: "#FEFCF3",
          200: "#FDF9E7",
          300: "#FCF6DB",
          400: "#F9EFC5",
          500: "#F5E6A8",
        },
        lavender: {
          50: "#F8F6FC",
          100: "#F0ECF9",
          200: "#E4DCF5",
          300: "#D4C8EF",
          400: "#C0ADE6",
          500: "#A78BDB",
          600: "#8B6BC1",
          700: "#6F4FA3",
        },
        gold: {
          50: "#FFFDF5",
          100: "#FFF9E6",
          200: "#FFF0BF",
          300: "#FFE699",
          400: "#FFD966",
          500: "#D4A853",
          600: "#B8912F",
          700: "#8B6914",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Source Sans Pro", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
