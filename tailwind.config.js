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
        Poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        normal: "24px",
        h1: "40px",
        h2: "28px",
      },
      colors: {
        background: {
          button: "#7050EE",
          800: "#2B3037",
          900: "#20252B",
        },
      },
    },
  },
  plugins: [],
};
