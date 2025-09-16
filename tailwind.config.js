/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#ff4000',
        'primary-blue': '#004e89',
        'accent-green': '#4ebf66',
        'bg-neutral': '#e5ece9',
        'text-primary': '#020202',
      },
      fontFamily: {
        'heading': ['League Spartan', 'sans-serif'],
        'body': ['Garet', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-motion')
  ],
};