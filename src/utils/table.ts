export const widths = (n: number, relation = 907) => {
  const partial = Math.floor(relation / n);
  const firstAddition = relation - (partial * n);

  return [...(Array(n)).keys()].map((_, i) => {
    if (i === 0) return partial + firstAddition;

    return partial;
  });
};
