import { arrayAnalyze } from '../src/arrayAnalyze'

describe('Valids inputs', () => {
  test('Array with positive values', () => {
    const arrayTest = [1, 8, 3, 4, 2, 6]
    const result = { average: 4, min: 1, max: 8, length: 6 }
    expect(arrayAnalyze(arrayTest)).toEqual(result)
  })
  
  test('Array with negative values', () => {
    const arrayTest = [-1, -8, -3, -4, -2, -6]
    const result = { average: -4, min: -8, max: -1, length: 6 }
    expect(arrayAnalyze(arrayTest)).toEqual(result)
  })
  
  test('Array with mixed values', () => {
    const arrayTest = [1, -8, -2,]
    const result = { average: -3, min: -8, max: 1, length: 3 }
    expect(arrayAnalyze(arrayTest)).toEqual(result)
  })
})

describe('Invalid Inputs',()=>{
  test('A non-number', ()=>{
    const arrayTest = ['666', 169, 151]
    expect(()=> arrayAnalyze(arrayTest)).toThrow('Invalid Input!')
  })

  test('A non-array', ()=>{
    const nonArrayTest = 171
    expect(()=> arrayAnalyze(nonArrayTest)).toThrow('Invalid Input!')
  })
})