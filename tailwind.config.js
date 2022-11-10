/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themePrimary: "#068179",
        themePrimaryLighter: "#E6F2F2",
        themeSecondary: "#F27125",
      },
      boxShadow: {
        boxShadow: "0px 3px 6px rgba(0, 119, 111, 0.08)",
      }
    },
  },
  plugins: [],
}
