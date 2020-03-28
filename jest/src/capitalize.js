export const capitalize = (str) => {
  if (typeof str !== 'string') throw Error('Invalid input!')

  const lowString = str.toLowerCase()

  return `${lowString.charAt(0).toUpperCase()}${lowString.slice(1)}`
}

