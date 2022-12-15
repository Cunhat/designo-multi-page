/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        peach: "#E7816B",
        lightPeach: "#FFAD9B",
        darkGrey: "#333136",
        lightGrey: "#f1f3f5",
      },
      fontFamily: {
        medium: "JostMedium",
        regular: "JostRegular",
      },
    },
  },
  plugins: [],
};
