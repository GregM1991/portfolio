"use client";
import { useWindowSize } from "@uidotdev/usehooks";

export function useIsMobile() {
  const { width } = useWindowSize();
  let isMobile = false;
  if (width !== null && width < 992) {
    isMobile = true;
  }
  return isMobile;
}
