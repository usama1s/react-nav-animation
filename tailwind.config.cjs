/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ded4bf',
        'black': '#181818'
      },
      letterSpacing: {
        'tightest': '-0.25em',
        'tighter': '-0.125em',
        'tight': '-0.075em',
        'wide': '0.075em',
        'wider': '0.125em',
        'widest': '0.25em'
      }
    },
    
  },
  plugins: [],
}
