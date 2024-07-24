/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        CinzelDecorativeRegular: ["CinzelDecorativeRegular"],
        CinzelDecorativeBold: ["CinzelDecorativeBold"],
        CinzelDecorativeBlack: ["CinzelDecorativeBlack"],
        SimulateMinds: ["SimulateMinds"],
      },
    },
  },
  plugins: [],
};
