export const isSortValueValid = (value: string | null, arr: string[]): boolean => {
  if (value === null) { return true; }
  return arr.includes(value);
};
