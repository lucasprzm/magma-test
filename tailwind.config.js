/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      "orange-1": "#FAEDDE",
      "orange-4": "#FFA750",
      "orange-5": "#F2683A",
      "purple-1": "#8B5CF6",
      "purple-3": "#EDE9FE",
      "purple-4": "#6D28D9",
      "gray-1": "#F5F5F5",
      "gray-2": "#D4D4D4",
      "gray-4": "#737373",
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1281px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
