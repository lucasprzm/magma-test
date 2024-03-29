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
      "purple-2": "#C4B5FD",
      "purple-3": "#EDE9FE",
      "purple-4": "#6D28D9",
      "gray-1": "#F5F5F5",
      "gray-2": "#D4D4D4",
      "gray-3": "#A3A3A3",
      "gray-4": "#737373",
    },
    screens: {
      mobile: "426px",
      tablet: "769px",
      laptop: "1025px",
      desktop: "1281px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
