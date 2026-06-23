export function isDesktopFinePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)").matches;
}

export function isMobileViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px)").matches;
}
