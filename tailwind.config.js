/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nutri-primary': '#2D5B4F',
        'nutri-secondary': '#A8DADC', 
        'nutri-background': '#F1FAEE',
        'nutri-light': '#F1FAEE',
        'nutri-accent': '#E63946',
        'nutri-data': '#457B9D',
        'nutri-steel': '#457B9D',
      },
      fontFamily: {
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}