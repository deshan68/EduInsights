/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        darkblack: "#05070a",
        darkblue: "#0C1017",
        lightbluestroke: "#232A37",
        lightblue: "#1E2430",
        grayfont: "#6B7587",
      },
    },
  },
  plugins: [],
};
