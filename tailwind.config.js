/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js}",],
  theme: {
    extend: {
      colors: {
        cl_blueDark: '#021526',
        cl_blueLight: '#03346E',
        cl_blueClear: '#6EACDA',
        cl_greyLight: '#E2E2B6',
        cl_ccc: '#ccc',
      }
    },
    container: {
      center: true
    },
    fontFamily: {
      Nunito: ["Nunito", "sans-serif"]
    }
  },
  plugins: [],
}

