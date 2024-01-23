// default app theme and colors
export const defaultTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 430,
      tablet: 1024,
    },
  },
  palette: {
    primary: {
      main: "#ed1c24",
      black: "#000000",
      white: "#ffffff",
      mainGradient:
        "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(241,249,246,1) 35%, #f7b0c1 100%)",
    },
    accents: {
      cards: "#171717",
      overlayBar: "#2e2e2e",
      dividerDark: "#333333",
      grey: "#909090",
      strokes: "#e9e9e9",
      neutral: "#fafafa",
    },
    status: {
      error: "#ff0e14",
      caution: "#dfa510",
      success: "#1a932e",
      critical: "#e85f11",
    },
    background: {
      main: "#0f0f13",
    },
    text: {
      greyText: "#909090",
      placeholder: "#b3b3b3",
      main: "#111111",
      white: "#EEEEEE",
    },
  },

  typography: {
    fontFamily:
      "'PlusJakartaSans', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    title: {
      fontSize: 40,
      lineHeight: 74 / 34,
      fontWeight: 500,
    },
    h1: {
      fontSize: 40,
      lineHeight: 74 / 34,
      fontWeight: 400,
    },
    h2: {
      fontSize: 32,
      lineHeight: 68 / 30,
      fontWeight: 400,
    },
    h3: {
      fontSize: 20,
      lineHeight: 48 / 26,
      fontWeight: 600,
    },
    h4: {
      fontSize: 20,
      lineHeight: 40 / 24,
      fontWeight: 400,
    },
    subHeading1: {
      fontSize: 24,
      lineHeight: 24 / 20,
      fontWeight: 400,
    },
    subHeading2: {
      fontSize: 16,
      lineHeight: 24 / 18,
      fontWeight: 400,
    },
    primaryBodyText: {
      fontSize: 16,
      lineHeight: 24 / 15,
      fontWeight: 400,
    },
    inputField: {
      fontSize: 16,
      lineHeight: 22 / 14,
      fontWeight: 500,
    },
    secondaryBodyText: {
      fontSize: 14,
      lineHeight: 22 / 14,
      fontWeight: 400,
    },
    chipsText: {
      fontSize: 12,
      lineHeight: 22 / 14,
      fontWeight: 500,
    },
    button: {
      fontSize: 14,
      lineHeight: 18 / 13,
      letterSpacing: 0.2,
      fontWeight: 500,
      textTransform: "unset",
    },
    c1: {
      fontSize: 13,
      lineHeight: 20 / 13,
      fontWeight: 500,
    },
    c2: {
      fontSize: 12,
      lineHeight: 17 / 12,
      fontWeight: 600,
    },
    label: {
      fontSize: 11,
      lineHeight: 15 / 11,
      fontWeight: 600,
    },
  },
  shadows: ["1", "2", "3", "4", "none"],
  overrides: {},
};
