/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        vibrant: {
          pink: "#FF4D6D",
          blue: "#4DBDFF",
          yellow: "#FFD74D",
          green: "#4DFF85",
        },
      },
      fontFamily: {
        custom: ['Starborn', 'sans-serif'],
        title: ['Poppins-Bold', 'sans-serif'],
        sono: ['Sono', 'sans-serif'],
        sf: ['SF-Pro-Display-Regular', 'sans-serif']
      },
      animation: {
        swim: 'swim 5s ease-in-out infinite',
        bob: 'bob 2s ease-in-out infinite',
      },
      keyframes: {
        swim: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100px)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
