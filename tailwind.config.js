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
        // Light mode
        primary: "hsla(0, 0%, 0%, 100%)",
        secondary: "hsla(0, 0%, 20%, 100%)",
        tertiary: "hsla(0, 0%, 30%, 100%)",

        background: "hsla(0, 0%, 100%, 100%)",
        surfaceBase: "hsla(0, 0%, 98%, 100%)",
        surfaceMiddle: "hsla(0, 0%, 94%, 100%)",
        surfaceHigh: "hsla(0, 0%, 90%, 100%)",

        stroke: "hsla(0, 0%, 93%, 100%)",
        connection: "hsla(0, 0%, 80%, 100%)",

        theme: "hsla(210, 100%, 50%, 100%)",

        // Dark mode
        inversePrimary: "hsla(0, 0%, 100%, 100%)",
        inverseSecondary: "hsla(0, 0%, 80%, 100%)",
        inverseTertiary: "hsla(0, 0%, 60%, 100%)",

        inverseBackground: "hsla(0, 0%, 2%, 100%)",
        inverseSurfaceBase: "hsla(0, 0%, 8%, 100%)",
        inverseSurfaceMiddle: "hsla(0, 0%, 11%, 100%)",
        inverseSurfaceHigh: "hsla(0, 0%, 14%, 100%)",

        inverseStroke: "hsla(0, 0%, 16%, 100%)",
        inverseConnection: "hsla(0, 0%, 40%, 100%)",

        inverseTheme: "hsla(215, 100%, 65%, 100%)",

        warn: "rgb(255, 165, 0)",

        red: "#FF5800",
        green: "#00C843",
        blue: "hsla(206, 100%, 50%, 1)",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "SF Pro Text",
          "BlinkMacSystemFont",
          "Inter",
          "sans-serif",
        ],
        mono: ["system-mono", "SF Mono", "Roboto Mono", "monospace"],
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
}
