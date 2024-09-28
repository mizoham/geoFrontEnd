/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    darkMode: 'class',
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
