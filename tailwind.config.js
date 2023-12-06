/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "Josefin-Sans": ["Josefin Sans", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "Bright-Blue": "hsl(220, 98%, 61%)",
      "Check-Background1": "hsl(192, 100%, 67%)",
      "Check-Background2": "hsl(280, 87%, 65%)",
      "Very-Light-Gray": "hsl(0, 0%, 98%)",
      "Very-Light-Grayish Blue": "hsl(236, 33%, 92%)",
      "Light-Grayish-Blue": "hsl(233, 11%, 84%)",
      "Dark-Grayish-Blue": "hsl(236, 9%, 61%)",
      
      "Very-Dark-Blue": "hsl(235, 21%, 11%)",
      "Very-Dark-Desaturated-Blue": "hsl(235, 24%, 19%)",
      "Light-Grayish-Blue": "hsl(234, 39%, 85%)",
      "Light-Grayish-Blue": "hsl(236, 33%, 92%)",
      "Dark-Grayish-Blue": "hsl(234, 11%, 52%)",
      
      "Very-Dark-Grayish-Blue": "hsl(237, 14%, 26%)",
      white: " #FFFFFF",
    },
    extend: {
      backgroundImage: {
        "desktop-dark": "url('../src/assets/images/bg-desktop-dark.jpg')",
        "mobile-dark": "url('../src/assets/images/bg-mobile-dark.jpg')",
        "desktop-light": "url('../src/assets/images/bg-desktop-light.jpg')",
        "mobile-light": "url('../src/assets/images/bg-mobile-light.jpg')",
      },
    },
    plugins: [],
  },
};
