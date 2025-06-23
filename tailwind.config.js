/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Reemplaza la fuente base por Poppins
        sans: ["Poppins", "sans-serif"],
      },
      // También puedes mantener la paleta de colores aquí
      colors: {
        primary: "#1A5691",
        "primary-dark": "#1F467F",
        accent: "#0B90C9",
        info: "#03ACE5",
        "gray-light": "#D8D9D8",
        "text-dark": "#161518",
        white: "#FEFEFE",
      },
    },
  },
  plugins: [],
}
