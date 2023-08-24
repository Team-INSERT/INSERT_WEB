export const changeGenString = (genNum: number) => {
  if (genNum === 1 || genNum === 31) {
    return `${genNum}st`;
  }
  if (genNum === 2 || genNum === 32) {
    return `${genNum}nd`;
  }
  if (genNum === 3 || genNum === 33) {
    return `${genNum}rd`;
  }
  return `${genNum}th`;
};
