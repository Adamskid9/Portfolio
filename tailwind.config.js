/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "transparent":['Rubik Doodle Shadow, system-ui'],
        "adams":['Pacifico, cursive'],
        "changa":['Changa, sans-serif'],
        "garamond":['EB Garamond, serif']
      },
      colors:{
        "prime":["#291d1d8c"]
      }
    },
  },
  plugins: [],
}

