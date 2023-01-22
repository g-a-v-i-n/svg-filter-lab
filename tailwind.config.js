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
        surface: "hsla(180, 00%, 98%, 100%)",
        elevatedSurface: "hsla(180, 00%, 100%, 100%)",
        inverseSurface: "hsla(230, 00%, 7%, 100%)",
        inverseElevatedSurface: "hsla(180, 00%, 10%, 100%)",

        stroke: "hsla(230, 00%, 0%, 7%)",
        inverseStroke: "hsla(180, 00%, 100%, 10%)",

        primary: "hsla(230, 00%, 0%, 85%)",
        inversePrimary: "hsla(180, 00%, 100%, 85%)",

        secondary: "hsla(230, 00%, 0%, 70%)",
        inverseSecondary: "hsla(180, 00%, 100%, 70%)",

        tertiary: "hsla(230, 00%, 0%, 60%)",
        inverseTertiary: "hsla(180, 00%, 100%, 60%)",

        quaternary: "hsla(230, 00%, 0%, 40%)",
        inverseQuaternary: "hsla(180, 00%, 100%, 40%)",

        quinary: "hsla(230, 00%, 0%, 10%)",
        inverseQuinary: "hsla(180, 00%, 100%, 10%)",

        theme: "hsla(210, 100%, 50%, 100%)",
        themeInverse: "hsla(206, 100%, 60%, 100%)",
        themeSurface: "hsla(206, 100%, 95%, 100%)",

        warn: "rgb(255, 165, 0)",

        red: "#FF5800",
        green: "#00C843",
        blue: "hsla(206, 100%, 50%, 1)",
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
        field: "0px 2px 8px hsla(180, 00%, 0%, 6%)",
        high: "0px 4px 12px hsla(180, 00%, 0%, 6%)",
      },
      text: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
