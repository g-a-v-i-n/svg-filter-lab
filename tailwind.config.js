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
        primary: "hsla(0, 0%, 0%, 90%)",
        secondary: "hsla(0, 0%, 20%, 100%)",
        tertiary: "hsla(0, 0%, 50%, 100%)",

        background: "hsla(0, 0%, 100%, 100%)",
        surfaceBase: "hsla(0, 0%, 97%, 100%)",
        surfaceMiddle: "hsla(0, 0%, 99%, 100%)",
        surfaceHigh: "hsla(0, 0%, 100%, 100%)",

        surfaceBaseTheme: "hsla(210, 100%, 90%, 100%)",

        stroke: "hsla(0, 0%, 0%, 10%)",
        connection: "hsla(0, 0%, 80%, 100%)",

        theme: "hsla(210, 100%, 50%, 100%)",
        warn: "rgb(255, 165, 0)",

        // Dark mode
        inversePrimary: "hsla(0, 0%, 100%, 100%)",
        inverseSecondary: "hsla(0, 0%, 80%, 100%)",
        inverseTertiary: "hsla(0, 0%, 50%, 100%)",

        inverseBackground: "hsla(0, 0%, 3%, 100%)",
        inverseSurfaceBase: "hsla(0, 0%, 8%, 100%)",
        inverseSurfaceMiddle: "hsla(0, 0%, 100%, 5%)",
        inverseSurfaceHigh: "hsla(0, 0%, 25%, 100%)",

        inverseSurfaceBaseTheme: "hsla(210, 100%, 10%, 100%)",

        inverseStroke: "hsla(0, 0%, 100%, 8%)",
        inverseConnection: "hsla(0, 0%, 40%, 100%)",

        inverseTheme: "hsla(215, 100%, 65%, 100%)",
        inverseWarn: "rgb(255, 165, 0)",

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
        inverseField: "0px 0 0 0.75px hsla(180, 00%, 100%, 20%), 0px 0.25px 0.25px rgba(0, 0, 0, 0.15), 0px 1px 0.75px rgba(0, 0, 0, 0.05)",
        field: "0px 0 0 0.75px hsla(180, 00%, 0%, 10%), 0px 0.25px 0.25px rgba(0, 0, 0, 0.15), 0px 1px 0.75px rgba(0, 0, 0, 0.05)"
      },
      text: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
}
