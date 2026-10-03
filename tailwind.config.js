/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#FAF8F5',
        'surface-container': '#F4F0E8',
        'surface-container-low': '#F9F6F0',
        'sand-canvas': '#FAF8F5',
        'sand-surface': '#F5F1EA',
        'sand-border': '#EAE4D8',
        primary: '#1C382B',
        'primary-container': '#244A39',
        'eucalyptus-light': '#3D6B57',
        secondary: '#8A5A43',
        'secondary-fixed': '#F3E3DA',
        'on-surface': '#242A27',
        'on-surface-variant': '#596560',
        'outline-variant': '#DCD6C9',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
