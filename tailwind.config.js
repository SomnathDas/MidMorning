module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "morningblue": "#84CAE7",
        "morningyellow": "#ffd000",
      },
      spacing: {
        "47%": "47%",
        "64": "64rem"
      },
      animation: {
        "peekRight": "1s ease-in alternate-reverse peekright infinite",
        "peekBottom": "1s ease-in alternate-reverse peekbottom infinite"
      },
      keyframes: {
        peekright: {
          '0%, 100%': {left: '0.25rem'},
          '50%': {left: '1.25rem'}
        },
        peekbottom: {
          '0%, 100%': {top: '0.25rem'},
          '100%': {top: '1.25rem'}
        }
      }
    },
  },
  plugins: [],
}