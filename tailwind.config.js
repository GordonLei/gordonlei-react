module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        metropolis_base: "#081f2c",
        arch_base: "#40464d",
        hammerhead_base: "#a2b2c8",
        playground_base: "#384967",
      },
      textColor: {
        metropolis_alpha_teal: "#3cdbc0",
        metropolis_alpha_yellow: "#f1be48",
        metropolis_alpha_red: "#e03c31",
        arch_alpha_mod: "#7ab5ae",
        arch_alpha_mod_base: "#24313d",
        hammerhead_teal: "#3BC4B7",
        hammerhead_darkblue: "#384967",
        hammerhead_darkbase: "#1C3354",
        playground_white: "#D2DEEE",
        playground_red: "#f8485e ",
        playground_yellow: "#FDDA24",
        playground_green: "#9be198",
        playground_blue: "#56B2E5",
        playground_purple: "#9678d3",
        playground_pink: "#FAA0CB",
      },
      borderColor: {
        metropolis_alpha_teal: "#3cdbc0",
        metropolis_alpha_yellow: "#f1be48",
        metropolis_alpha_red: "#e03c31",
        arch_alpha_mod: "#7ab5ae",
        arch_alpha_mod_base: "#24313d",
        hammerhead_teal: "#3BC4B7",
        hammerhead_darkblue: "#384967",
        hammerhead_darkbase: "#1C3354",
        playground_white: "#D2DEEE",
        playground_red: "#f8485e ",
        playground_yellow: "#FDDA24",
        playground_green: "#9be198",
        playground_blue: "#56B2E5",
        playground_purple: "#9678d3",
        playground_pink: "#FAA0CB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tw-elements/dist/plugin"),
  ],
};
