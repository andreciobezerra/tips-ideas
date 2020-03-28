import { reverseString } from '../src/reverseString'

describe('Valid inputs', () => {
  test('Reverse andrecio', () => expect(reverseString('andrecio')).toBe('oicerdna'))

  test('Reverse Licia', () => expect(reverseString('Licia')).toBe('aiciL'))

  test('Reverse Gustavo Emanuel', () => expect(reverseString('Gustavo Emanuel')).toBe('leunamE ovatsuG'))
})

describe('Invalid inputs', ()=>{
  test('Invalid string', ()=> expect(()=>reverseString(666)).toThrow('Invalid input!'))
})