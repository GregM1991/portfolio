import { CanvaPalette, Palette } from "@/types/palette";

export const canvaPalette: CanvaPalette = {
  blue: "#b4f0f0",
  primary: "#7d2ae8",
  secondary: "#280f91",
  pink: "#ffa5f0",
  "light-pink": "#ffe6ff",
  red: "#ff5055",
  "dark-red": "#6e0f2d",
  orange: "#f15852",
  yellow: "#ffd200",
  green: "#28c878",
  teal: "#20c997",
  cyan: "#00c4cc",
  white: "#fff",
  gray: "#6c757d",
  "gray-light": "#f8f9f9",
  "gray-dark": "#293039",
  light: "#e9ecef",
  dark: "#0e1318",
  blendBlue: "#5a32fa",
};

export const palette: Palette = {
  primary: "#1B5452",
  secondary: "#7BC7B3",
  white: "#fff",
  gray: "#6c757d",
  "gray-light": "#f8f9f9",
  "gray-dark": "#293039",
  light: "#e9ecef",
  dark: "#0e1318",
};

// TODO: Get rid of this in lieu of what's implemented in Typography?
function isCanvaPaletteKey(key: string): key is keyof CanvaPalette {
  return key in canvaPalette;
}

export function getColorFromPalette(
  color: string,
  isCanva: boolean,
): string | undefined {
  let colorValue: string | undefined;
  if (isCanva && isCanvaPaletteKey(color)) {
    colorValue = canvaPalette[color];
  } else if (!isCanva && color in palette) {
    colorValue = palette[color as keyof Palette];
  }

  return colorValue;
}
