import withMT from "@material-tailwind/react/utils/withMT";
 
// eslint-disable-next-line no-undef
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'violeta': '#4F29E4',
      },
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
      },
    },
  },
  plugins: [],
});