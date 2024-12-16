/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all relevant files in your src directory
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for light/dark mode
      },
    },
  },
  plugins: [],
  darkMode: "class", // Enable dark mode based on a class
};
