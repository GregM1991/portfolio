import { isValidElement } from "react";
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType | JSX.Element;
  size: number;
}

export const TooltipIcon = ({ icon, size }: IconProps) => {
  if (typeof icon === "function") {
    const Icon = icon;
    return <Icon aria-hidden="true" style={{ fontSize: `${size}px` }} />;
  } else if (isValidElement(icon)) {
    return icon;
  }
  return null;
};
