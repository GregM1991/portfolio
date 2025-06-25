import { canvaPalette } from "@/theme/theme";
import { CanvaPalette } from "@/types/palette";

export interface CanvaSectionConfig {
  bgColor?: keyof CanvaPalette;
  variant?: "hero";
  className?: string;
}

export function createCanvaSectionProps({
  bgColor = "white",
  variant,
  className = ""
}: CanvaSectionConfig) {
  const style = {
    "--background-color": canvaPalette[bgColor],
  } as React.CSSProperties;

  const combinedClassName = [
    "canva-section", // Base class
    variant ? `canva-section--${variant}` : "",
    className
  ].filter(Boolean).join(" ");

  return {
    style,
    className: combinedClassName
  };
}

// For cases where we need the motion version
export const createAnimatedCanvaSectionProps = createCanvaSectionProps;