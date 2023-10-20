import withMT from "@material-tailwind/react/utils/withMT";
 
// eslint-disable-next-line no-undef
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'violeta': '#4F29E4',
        'lblue': '#411CBB',
        'cases': '#2235BE80',
        'casos': '#411CBB80'
      },
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
      },
      fontSize: {
        sto: ['350px', '225px'],
      }
    },
  },
  plugins: [],
});