/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-s": "url('/public/bg/11.png')",
        "background-m": "url('/public/bg/11@2x.png')",
        "background-l": "url('/public/bg/11@3x.png')",
      },
    },
  },
  plugins: [],
};
