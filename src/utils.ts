export const chunk = <T>(arr: T[], size: number): T[][] => {
  return arr.reduce((chunks, _, i) => {
    if (i % size === 0) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }, [] as T[][]);
};
