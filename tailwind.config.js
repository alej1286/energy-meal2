import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
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
});
