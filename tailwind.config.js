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
        home: "url('/bg-images/deadliftbg.png')",
        wodList: "url('/bg-images/gear.jpg')",
        wodPage: "url('/bg-images/deadlift2.jpg')",
        prPage: "url('/bg-images/barbell3.jpg')",
        todaysWod: "url('/bg-images/motivation.jpg')",
        whiteBoard: "url('/whiteboard.png')",
        verticalBoard: "url('/verticalBoard.png')",
      },
    },
  },
  plugins: [],
};
