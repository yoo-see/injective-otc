/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,tsx}", "./common/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "omi-blue": "#2864ff;",
        "omi-black": "#22252e;",
        "grey/9": "#22252e;",
      },
      fontFamily: {
        sans: ["Pretendard", "Poppins"],
      },
      backgroundImage: {
        "search-icon": "url('/asset/search.svg')",
      },
    },
  },
};
