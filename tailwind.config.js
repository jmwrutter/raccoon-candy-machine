module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    multiColumns: ["responsive", "dark"]    
  },
  plugins: [
    require('@markusantonwolf/tailwind-css-plugin-multi-columns')
  ],
}
