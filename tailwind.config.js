/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0009",
        secondary: "#0005",
        tercery: "#5a84a2",
      },
    },
  },
  plugins: [],
};
