/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'bg-card': "linear-gradient(163deg, #00ff75 0%, #3700ff 100%)",
      },
      backgroundImage: {
        'bg-aboutUs': "url('https://wallpaperaccess.com/full/1426870.png')",
        "background": "linear-gradient(240deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%)",
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
        "82vh": "82vh",
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
        txtFav: "9px",
        10: "10px"
      },
      zIndex: {
        1: "1",
      },
      backgroundColor: {
        "bg-card": "rgb(7, 10, 82)"
      }
      
    },
  },
  plugins: [],
};
