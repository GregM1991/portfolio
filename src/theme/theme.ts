const palette = {
  blue: "#b4f0f0",
  indigo: "#280f91",
  purple: "#7d2ae8",
  pink: "#ffa5f0",
  red: "#ff5055",
  orange: "#f15852",
  yellow: "#ffd200",
  green: "#28c878",
  teal: "#20c997",
  cyan: "#00c4cc",
  white: "#fff",
  gray: "#6c757d",
  "gray-dark": "#293039",
  primary: "#7d2ae8",
  secondary: "#280f91",
  light: "#e9ecef",
  dark: "#0e1318",
};

const shadows = {
  small: "0.5px 1px 1px hsl(0deg, 0%, 50%,)",
  medium:
    "1px 2px 2px hsl(0deg, 0%, 50% / 0.333), 2px 4px 4px hsl(0deg, 0%, 50% / 0.333), 3px 6px 6px hsl(0deg, 0%, 50% / 0.333)",
};

const typography = {
  heading: "ezramedium, sans-serif",
  body: "sans-serif",
  steps: {
    minus2: "clamp(0.56rem, calc(0.48rem + 0.41vw), 0.80rem)",
    minus1: "clamp(0.68rem, calc(0.56rem + 0.56vw), 1.00rem)",
    zero: "clamp(0.81rem, calc(0.66rem + 0.76vw), 1.25rem)",
    one: "clamp(0.98rem, calc(0.77rem + 1.02vw), 1.56rem)",
    two: "clamp(1.17rem, calc(0.90rem + 1.36vw), 1.95rem)",
    three: "clamp(1.40rem, calc(1.04rem + 1.80vw), 2.44rem)",
    four: "clamp(1.69rem, calc(1.21rem + 2.38vw), 3.05rem)",
    five: "clamp(2.02rem, calc(1.40rem + 3.12vw), 3.82rem)",
  },
};

const radii = {
  none: "0",
  medium: "6px",
  large: "1rem",
  full: "9999px",
};

const breakpoints = {
  xs: "0",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",


  
  xxl: "1400px",
  xxxl: "1600px",
};

const spaces = {
  xxxSmall: "clamp(0.31rem, calc(0.31rem + 0.00vw), 0.31rem)",
  xxSmall: ".5rem",
  xSmall: ".625rem",
  small: "1rem",
  medium: "clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)",
  large: "1.5rem",
  xLarge: "2rem",
  xxLarge: "clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem)",
  xxxLarge: "10rem",
};

export const theme = {
  palette,
  shadows,
  typography,
  radii,
  breakpoints,
  spaces,
};
