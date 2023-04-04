/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'kh': 'Noto Sans Khmer'
      },
      colors: {
        'banner-color': '#009879',
        'filter-color': '#fbfbfc',
        'location-color': '#95939347' 
      },
      fontSize: {
        banner: '2vw',
        h5: '18px'
      }
      
      
    },
  },
  plugins: [],
}