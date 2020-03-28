import { capitalize } from '../src/capitalize'

describe('Valid inputs', () => {
  test('Capitalize andrecio', () => expect(capitalize('andrecio')).toBe('Andrecio'))

  test('Capitalize lICIA', () => expect(capitalize('lICIA')).toBe('Licia'))

  test('Capitalize GUSTAVO', () => expect(capitalize('GUSTAVO')).toBe('Gustavo'))

  test('Capitalize long string', () => expect(capitalize('god is dead!')).toBe('God is dead!'))
})

describe('Invalid inputs', () => { 
  test('Enter a number', () => expect(()=>capitalize(666)).toThrow('Invalid input!'))
})