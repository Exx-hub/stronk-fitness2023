/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/bg-images/deadliftbg.jpg')",
        wodList: "url('/bg-images/gear.jpg')",
        wodPage: "url('/bg-images/deadlift2.jpg')",
        prPage: "url('/bg-images/barbell3.jpg')",
        todaysWod: "url('/bg-images/motivation.jpg')",
        whiteBoard: "url('/whiteboard.jpg')",
        verticalBoard: "url('/verticalBoard.png')",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        slide: "slide 500ms ease-in-out",
        "fade-in": "fade-in 500ms ease-in",
      },
    },
  },
  plugins: [],
};
