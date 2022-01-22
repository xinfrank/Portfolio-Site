module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "360px",
      xs: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        normal: "30px",
        h1: "48px",
        h2: "32px",
      },
      colors: {
        background: {
          button: "#7050EE",
          900: "#20252B",
        },
      },
    },
  },
  plugins: [],
};
