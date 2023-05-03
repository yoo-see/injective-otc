/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "omi-blue": "#2864ff",
        "omi-black": "#22252e",
        "grey/1": "#FAFAFB",
        "grey/2": "#EAEAEA",
        "grey/3": "#E0E0E0",
        "grey/4": "#C6C6C6",
        "grey/5": "#8E8E93",
        "grey/9": "#22252e",
        "grey/10": "#191B23",
      },
      fontFamily: {
        sans: ["Pretendard", "Poppins"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
