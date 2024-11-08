/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: {
          ghost: "#fdfdff",
          webSafe: "#fbfdfb",
        },
        pastel: {
          yellow: "#faedcb",
          green: "#c9e4de",
          blue: "#c6def1",
          purple: "#dbcdf0",
          pink: "#f2c6de",
          orange: "#f7d9c4",
        },
      },
    },
  },
  plugins: [],
};
