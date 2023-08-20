/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: {
        50: "hsla(0, 0%, 95%, 100%)",
        100: "hsla(0, 0%, 90%, 100%)",
        200: "hsla(0, 0%, 80%, 100%)",
        300: "hsla(0, 0%, 70%, 100%)",
        400: "hsla(0, 0%, 60%, 100%)",
        500: "hsla(0, 0%, 50%, 100%)",
        600: "hsla(0, 0%, 40%, 100%)",
        700: "hsla(0, 0%, 30%, 100%)",
        800: "hsla(0, 0%, 20%, 100%)",
        900: "hsla(0, 0%, 10%, 100%)",
        950: "hsla(0, 0%, 5%, 100%)",
        DEFAULT: "hsla(0, 0%, 0%, 100%)",
      },
      white: {
        50: "hsla(0, 0%, 5%, 100%)",
        100: "hsla(0, 0%, 10%, 100%)",
        200: "hsla(0, 0%, 20%, 100%)",
        300: "hsla(0, 0%, 30%, 100%)",
        400: "hsla(0, 0%, 40%, 100%)",
        500: "hsla(0, 0%, 50%, 100%)",
        600: "hsla(0, 0%, 60%, 100%)",
        700: "hsla(0, 0%, 70%, 100%)",
        800: "hsla(0, 0%, 80%, 100%)",
        900: "hsla(0, 0%, 90%, 100%)",
        950: "hsla(0, 0%, 97%, 100%)",
        DEFAULT: "hsla(0, 0%, 100%, 100%)",
      },
      blue: {
        50: "hsla(206, 100%, 98%, 100%)",
        100: "hsla(206, 100%, 95%, 100%)",
        200: "hsla(206, 100%, 90%, 100%)",
        300: "hsla(206, 100%, 75%, 100%)",
        400: "hsla(206, 100%, 55%, 100%)",
        500: "hsla(210, 100%, 50%, 100%)",
        600: "hsla(210, 100%, 45%, 100%)",
        700: "hsla(210, 100%, 40%, 100%)",
        800: "hsla(210, 100%, 30%, 100%)",
        900: "hsla(210, 100%, 20%, 100%)",
        950: "hsla(210, 100%, 10%, 100%)",
        DEFAULT: "hsla(210, 100%, 50%, 100%)",
      },
      transparent: "transparent",
    },

    extend: {
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
      // borderRadius: {
      //   // for radii-20px, padding-12px pattern
      //   card: 20,
      //   element: 8,
      // },
      boxShadow: {
        inverseField: "0px 0 0 0.75px hsla(180, 00%, 100%, 20%), 0px 0.25px 0.75px rgba(0, 0, 0, 1), 0px 1px 0.75px rgba(0, 0, 0, 0.50)",
        field: "0px 0 0 0.75px hsla(180, 00%, 0%, 10%), 0px 0.25px 0.25px rgba(0, 0, 0, 0.15), 0px 1px 0.75px rgba(0, 0, 0, 0.05)",
        inverseFieldBottom: "0 0.75px 0 0 hsla(180, 00%, 100%, 20%)",
        fieldBottom: "0 0.75px 0 0 hsla(180, 00%, 0%, 10%)",
        inverseFieldRight: "0.75px 0 0 0 hsla(180, 00%, 100%, 20%)",
        fieldRight: "0.75px 0 0 0 hsla(180, 00%, 0%, 10%)"
      },
      // text: {
      //   xl: "1.5rem",
      // },

        // Light mode
        // primary: "hsla(0, 0%, 0%, 90%)",
        // secondary: "hsla(0, 0%, 20%, 100%)",
        // tertiary: "hsla(0, 0%, 50%, 100%)",

        // background: "hsla(0, 0%, 100%, 100%)",
        // surface: "hsla(0, 0%, 97%, 100%)",
        // surfaceSecondary: "hsla(0, 0%, 99%, 100%)",
        // surfaceTertiary: "hsla(0, 0%, 100%, 100%)",

        // surfaceTheme: "hsla(210, 100%, 90%, 100%)",

        // stroke: "hsla(0, 0%, 0%, 10%)",
        // connection: "hsla(0, 0%, 80%, 100%)",

        // theme: "hsla(210, 100%, 50%, 100%)",
        // warn: "rgb(255, 165, 0)",

        // // Dark mode
        // inversePrimary: "hsla(0, 0%, 100%, 100%)",
        // inverseSecondary: "hsla(0, 0%, 80%, 100%)",
        // inverseTertiary: "hsla(0, 0%, 50%, 100%)",

        // inverseBackground: "hsla(0, 0%, 3%, 100%)",
        // inversesurface: "hsla(0, 0%, 8%, 100%)",
        // inversesurfaceSecondary: "hsla(0, 0%, 100%, 5%)",
        // inversesurfaceTertiary: "hsla(0, 0%, 25%, 100%)",

        // inversesurfaceTheme: "hsla(210, 100%, 10%, 100%)",

        // inverseStroke: "hsla(0, 0%, 100%, 8%)",
        // inverseConnection: "hsla(0, 0%, 40%, 100%)",

        // inverseTheme: "hsla(215, 100%, 65%, 100%)",
        // inverseWarn: "rgb(255, 165, 0)",

        // red: "#FF5800",
        // green: "#00C843",
        // blue: "hsla(206, 100%, 50%, 1)",

      },
    
  },
  plugins: [],
}
