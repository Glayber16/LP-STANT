import withMT from "@material-tailwind/react/utils/withMT";
 
// eslint-disable-next-line no-undef
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px', 
        'med': '360px',
        'note': '1360px',
      },
      colors: {
        'violeta': '#4F29E4',
        'lblue': '#411CBB',
        'cases': '#2235BE80',
        'casos': '#411CBB80',
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
  
});