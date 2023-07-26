const palette = {
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
  md: "6px",
  full: "9999px",
};

const breakpoints = {
  sm: "768px",
  md: "1024px",
  lg: "1280px",
  xlg: "1440px",
};

const spaces = {
  xxxSmall: "clamp(0.31rem, calc(0.31rem + 0.00vw), 0.31rem)",
  xxSmall: "clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem)",
  xSmall: "clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem)",
  small: "clamp(1.44rem, calc(1.39rem + 0.22vw), 1.55rem)",
  medium: "clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)",
  large: "clamp(2.3rem, calc(2.2rem + 0.43vw), 2.4rem)",
  xLarge: "clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem)",
  xxLarge: "clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem)",
  xxxLarge: "clamp(6.75rem, calc(6.49rem + 1.30vw), 7.50rem)",
};

export const theme = {
  palette,
  shadows,
  typography,
  radii,
  breakpoints,
  spaces,
};
