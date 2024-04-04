/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#2d4458",
        "green-leave": "#58686c",
        classic: "#A18F79",
        secondary: "#D9D9D9",
        danger: "#FF0000",
      },
      fontFamily: {
        nunito: "nunito sans",
        merri: "merriweather",
      },
      fontSize: {
        "sub-title": "32px",
        body: "18px",
        section: "42px",
        regular: "20px",
        small: "10px",
      },
      fontWeight: {
        black: "900",
      },
    },
  },
  plugins: [require("preline/plugin"), require("flowbite/plugin")],
};
