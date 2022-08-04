// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  content: ['./src/**/*.js'],
  darkMode: 'class',
  theme: {},
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms"), require("daisyui")],
  daisyui: {
    themes: false,
  },
};
