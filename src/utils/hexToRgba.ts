/**
 * Converts a hexadecimal color string to an RGBA color string.
 * @param hex - The hexadecimal color string to convert, in the format "#RRGGBB".
 * @param alpha - An optional alpha value between 0 and 1. Defaults to 1.
 * @returns The RGBA color string, in the format "rgba(R, G, B, A)".
 */
const hexToRgba = (hex: string, alpha = 1): string => {
  // Convert shorthand hex notation to full hex notation
  if (hex.length === 4) {
    hex = "#" + hex.slice(1).repeat(2);
  }

  // Parse the individual RGB component values from the hex string
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // Construct the RGBA color string
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default hexToRgba;
