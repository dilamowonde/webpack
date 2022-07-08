export const inputsAreValid = (...input) => {
  return input.every(num => Number(num)==num);
};
