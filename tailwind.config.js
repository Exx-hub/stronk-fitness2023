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
        "deadlift-man": "url('/bg-images/deadliftbg.png')",
        deadlift2: "url('/bg-images/deadlift2.jpg')",
      },
    },
  },
  plugins: [],
};
