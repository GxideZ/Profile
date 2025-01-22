/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors : {
        primary: '#0A6EBD',
        secondary: '#5A96E3',
        tertiary: '#A1C2F1',
        quaternary: '#EDF7FF',
        'dark-primary': '#005DA7',
        'darker=primary': '#003C6C',
        grey: '#CCC',
        red: '#E0115F',
        'dark-red': '8b0000',
      }
    },
  },
  plugins: [],
}

