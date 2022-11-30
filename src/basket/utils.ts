export const round005 = (num: number) =>
  parseFloat((Math.ceil(num * 20) / 20).toFixed(2));

export const round = (num: number) => {
  if (Number.isInteger(num)) {
    return num;
  }

  if (num.toString().split(".")[1].length > 3) {
    return parseFloat((Math.ceil(num * 20) / 20).toFixed(2));
  }

  return parseFloat(num.toFixed(2));
};
