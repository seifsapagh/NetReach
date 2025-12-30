/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#7c3aed',
        dark: '#0a0a0f',
        card: '#1a1a2e',
        border: '#2a2a3e',
      },
    },
  },
  plugins: [],
};
