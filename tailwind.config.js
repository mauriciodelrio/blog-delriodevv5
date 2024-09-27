/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
    screens: {

      'mobile': {'max': '640px'},
      // => @media (max-width: 640px) { ... }
  
      'tablet': {'max': '1399px', 'min': '641px'},
      // => @media (max-width: 1279px) { ... }
  
      'desktop': {'min': '1400px'},
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
