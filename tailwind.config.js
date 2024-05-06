/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8C52FF",
        "primary-light": "#DCCAFF",
        dark: "#242424",
        light: "#FFFFFF",
      },
    },
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
  },
  plugins: [],
};
