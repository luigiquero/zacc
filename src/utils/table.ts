export const widths = (n: number) => {
  const partial = Math.floor(907 / n);
  const firstAddition = 907 - (partial * n);
  const response = [...(Array(n)).keys()].map((_, i) => {
    if (i === 0) return partial + firstAddition;

    return partial;
  });

  console.log({ response });

  return response;
};
