/** @type {import('tailwindcss').Config} */
export default {
  content: ['.src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4724c8',
        secondary: '#6465f1',
        light: '#c6d4ff',
        'extra-light': '#eef2fe',
      },
    },
  },
  plugins: [],
};
