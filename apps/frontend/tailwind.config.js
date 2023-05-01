/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "omi-blue": "#2864ff;",
        "omi-black": "#22252e;",
        "grey/9": "#22252e;",
        "grey/10": "#191B23;",
      },
      fontFamily: {
        sans: ["Pretendard", "Poppins"],
      },
    },
  },
};
