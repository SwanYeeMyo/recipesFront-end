/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#2d4458",
        "green-leave": "#58686c",
        classic: "#A18F79",
        secondary: "#D9D9D9",
      },
      fontFamily: {
        nunito: "nunito sans",
        merri: "merriweather",
      },
      fontSize: {
        "sub-title": "32px",
        body: "18px",
        section: "42px",
        regular: "22px",
      },
    },
  },
  plugins: [],
};
