/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9538E2",
        secondary: "#F6F6F6",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
}

