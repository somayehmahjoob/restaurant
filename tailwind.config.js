module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    appearance: ["responsive"],
    // ...
    borderColor: ["responsive", "hover", "focus"],
    // ...
    outline: ["responsive", "focus"],
    // ...
    zIndex: ["responsive"],
  },
  plugins: [require("@tailwindcss/forms")],
};
