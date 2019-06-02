export const widths = (n: number) => {
  const relation = ((window.innerWidth - (50 + 83 + 91)) / 907) * 907;
  const partial = Math.floor(relation / n);
  const firstAddition = relation - (partial * n);

  return [...(Array(n)).keys()].map((_, i) => {
    if (i === 0) return partial + firstAddition;

    return partial;
  });
};
