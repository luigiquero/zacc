export const widths = (n: number) => {
  const partial = Math.floor(907 / n);
  const firstAddition = 907 - (partial * n);

  return [...(Array(n)).keys()].map((_, i) => {
    if (i === 0) return partial + firstAddition;

    return partial;
  });
};
