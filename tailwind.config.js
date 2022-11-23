/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#FBFBFC",
        elevatedSurface: "#F0F2F5",

        stroke: "#EEEEF7",

        primary: "#2B2F43",
        secondary: "#6B7384",
        tertiary: "#A3ADC2",
        quaternary: "#DEE2E8",

        theme: "#6187FE",
        warn: "rgb(255, 165, 0)",

        red: "#FF5800",
        green: "#00C843",
        blue: "#008FFF",
      },
      fontFamily: {
        sans: ["system-ui", "BlinkMacSystemFont", "Inter", "sans-serif"],
        mono: ["system-mono", "SF Mono", "Roboto Mono", "monospace"],
        icon: ["system-ui", "SF Pro Rounded", "sans-serif"],
      },
      borderRadius: {
        // for radii-20px, padding-12px pattern
        card: 20,
        element: 8,
      },
      boxShadow: {
        icon: "0px 4px 15px #6187FE40", //rgba(97, 135, 254, 0.3)
        field: "0px 2px 8px #2B2F4310",
        high: "0px 4px 12px rgba(43, 47, 67, 0.2);",
      },
      text: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
