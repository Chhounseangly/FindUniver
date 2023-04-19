/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-aboutUs': "url('https://wallpaperaccess.com/full/1426870.png')",
      },
      width: {
        "10percent": "10%",
        "12vh": "12vh",
        "15vh": "15vh",
        "20percent": "20%",
        "80percent": "80%",
        "450px": "450px"
      },
      height: {
        "10percent": "10%",
        "8vh": "8vh",
        "80vh": "80vh",
        "70percent": "70%",
        "30percent": "30%",
        "500px": "43.75rem",
      },

      fontFamily: {
        kh: "Noto Sans Khmer",
        khBtB: "Battambang,Arial, Helvetica, sans-seri"
      },
      colors: {
        "banner-color": "#009879",
        "filter-color": "#fbfbfc",
        "location-color": "#95939347",
        "paragraph": "#222222",
        "footer": "#f3f4f6"
      },
      fontSize: {
        banner: "2vw",
        h5: "18px",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};
