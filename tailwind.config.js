/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D1D1B',
        secondary: '#64C2B7',
        accent: {
          blue: '#74B0DA',
          red: '#E84C4A',
        }
      },
      fontFamily: {
        sans: ['MyFontsWebfontsKit', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5em', { lineHeight: '1.2' }],
        'h2': ['2em', { lineHeight: '1.2' }],
        'h3': ['1.75em', { lineHeight: '1.2' }],
        'h4': ['1.5em', { lineHeight: '1.2' }],
        'lead': ['1.25em', { lineHeight: '1.5' }],
        'cta': ['1.125em', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '2rem',
        'button': '1.5rem',
      },
    },
  },
  plugins: [],
}