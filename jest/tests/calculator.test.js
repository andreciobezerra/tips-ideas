import { calculator } from '../src/calculator.js'

describe('Valid inputs', () => {
  test('Sum of postives', () => expect(calculator.sum(6, 660)).toBe(666))

  test('Sum of negatives', () => expect(calculator.sum(-200, -466)).toBe(-666))

  test('Sum mix', () => expect(calculator.sum(672, -6)).toBe(666))

  test('Subtraction of postives', () => expect(calculator.sub(690, 24)).toBe(666))

  test('Subtraction of negatives', () => expect(calculator.sub(-1200, -534)).toBe(-666))

  test('Subtraction mix', () => expect(calculator.sub(660, -6)).toBe(666))

  test('Multiplication of postives', () => expect(calculator.mult(333, 2)).toBe(666))

  test('Multiplication of negatives', () => expect(calculator.mult(-111, -6)).toBe(666))

  test('Multiplication mix', () => expect(calculator.mult(222, -3)).toBe(-666))

  test('Division of postives', () => expect(calculator.div(1332, 2)).toBe(666))

  test('Division of negatives', () => expect(calculator.div(-666, -1)).toBe(666))

  test('Division mix', () => expect(calculator.div(6660, -10)).toBe(-666))
})

describe('Invalid inputs', () => {
  test('Input !== number', () => expect(() => calculator.sum('Samael', 'Belzebub')).toThrow('Invalid input!'))

  test('Input !== number', () => expect(() => calculator.sub('Lucifer', 666)).toThrow('Invalid input!'))

  test('Input !== number', () => expect(() => calculator.mult('Mephisto', 'Me')).toThrow('Invalid input!'))

  test('Input !== number', () => expect(() => calculator.div('Hell', 2)).toThrow('Invalid input!'))

  test('Division by 0', () => expect(() => calculator.div(666, 0)).toThrow('Error: Division by zero!'))
})