import withMT from "@material-tailwind/react/utils/withMT";
 
// eslint-disable-next-line no-undef
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'violeta': '#4F29E4',
        'lblue': '#411CBB',
        'cases': 'rgba(34, 53, 190, 0.5)',
        'casos': 'rgba(65, 28, 187, 0.5)',
        'area': '#02045f',
        'card': 'rgba(110, 69, 244, 0.6)'
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