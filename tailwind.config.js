/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode based on a class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all relevant files in your src directory
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for light/dark mode
        darkblue: "hsl(209, 23%, 22%)",
        verydarkblue: "hsl(207, 26%, 17%)",
        lverydarkblue: "hsl(200, 15%, 8%)",
        ldarkgray: "hsl(0, 0%, 52%)",
        lverylightgray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
