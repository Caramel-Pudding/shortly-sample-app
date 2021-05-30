export const firstDesktopBreakpoint = 800;

export const isDesktop = (width: number): boolean =>
  width > firstDesktopBreakpoint;
