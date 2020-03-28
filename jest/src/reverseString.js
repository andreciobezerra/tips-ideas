export const reverseString = (str) =>{
  if(typeof str !== 'string') throw Error('Invalid input!')

  return [...str].reverse().join('')
}