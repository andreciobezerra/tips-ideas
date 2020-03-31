export const arrayAnalyze = (arr) => {
  if (!Array.isArray(arr) || arr.some((elem) => typeof elem !== 'number')) throw Error('Invalid Input!')

  return {
    average: arr.reduce((x, y) => x + y) / arr.length,
    min: Math.min.apply(null, arr),
    max: Math.max.apply(null, arr),
    length: arr.length
  }
}