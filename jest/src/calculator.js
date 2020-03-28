export const calculator = (() => {
  const validator = (a, b) => typeof a === 'number' && typeof b === 'number'

  const sum = (a, b) => {
    if (!validator(a, b)) throw Error('Invalid input!')

    return a + b
  }

  const sub = (a, b) => {
    if (!validator(a, b)) throw Error('Invalid input!')

    return a - b
  }

  const mult = (a, b) => {
    if (!validator(a, b)) throw Error('Invalid input!')

    return a * b
  }

  const div = (a, b) => {
    if (!validator(a, b)) throw Error('Invalid input!')
    if (b === 0) throw Error('Error: Division by zero!')

    return a / b
  }

  return { sum, sub, mult, div }
})()