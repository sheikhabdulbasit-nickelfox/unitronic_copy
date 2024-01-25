const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "430px",
      tablet: "1024px",
    },
    extend: {
      colors: {
        body: {
          main: `#0F0F13`,
        },
        primary: {
          main: "#ED1C24",
          black: "#000000",
          white: "#FFFFFF",
          mainGradient:
            "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(241,249,246,1) 35%, #f7b0c1 100%)",
        },
        secondary: {
          main: "#121212",
          main2: "#171717",
          charcoal: "#2C2C2C",
          charcoalLight: "#333333",
          darkGray: "#D9D9D9",
          normalGray: "#E9E9E9",
          lightGray: "#EFEFEF",
          extraLightGray: "#F0F0F0",
        },
        supportive: {
          green_main: "#00AB1B",
          orange_main: "#FF9900",
          pink_main: "#FF4E64",
        },
        error: {
          main: "#FF4E64",
        },
        background: {
          main: "#FFFFFF",
        },
        font: {
          main: "#111111",
          white: "#EEEEEE",
          lightGray: "#B0B0B0",
          gray: "#575757",
          darkGray: "#7D7D7D",
          whiteGray: "#DCDCDC",
        },
      },
      backgroundImage: {
        categoryGradient: "linear-gradient(180deg, #ED1C24 0%, #FF6B71 100%)",
      },
      fontFamily: {
        sans: ['"PlusJakartaSans"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Heading
        large: [
          "128px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        large2: [
          "64px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        title: [
          "48px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        title2: [
          "40px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        title3: [
          "32px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        title4: [
          "24px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        // Paragraph
        largeParagraph: [
          "20px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        mediumParagraph: [
          "18px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        normalParagraph: [
          "16px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        smallParagraph: [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        xsParagraph: [
          "12px",
          {
            lineHeight: "normal",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],
        exsParagraph: [
          "10px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        // Accent
        accent: [
          "20px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        accent2: [
          "16px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        accent3: [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        accent4: [
          "12px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        accent5: [
          "10px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
      },
    },
  },
  plugins: [],
};
