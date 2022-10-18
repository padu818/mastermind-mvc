export const MAX_ATTEMPT = 10;
export const COMBINATION_SIZE = 4;
export const SIZE_COLORS = 6;

export const COLORS = {
  "r": '#e11d48',
  "g": '#008000',
  "y": '#FFFF00',
  "b": '#3b82f6',
  "c": '#FF7F50',
  "m": '#92400e',
}

export const RANGE_COLOR = ["r","g","y","b","c","m"];

export type ColorID = keyof typeof COLORS;
export type TokenGuess = ColorID | null;