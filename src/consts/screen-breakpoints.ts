export const firstDesktopBreakpoint = 1100;

export const isDesktop = (width: number): boolean =>
  width > firstDesktopBreakpoint;
