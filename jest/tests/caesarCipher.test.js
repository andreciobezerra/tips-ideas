import { encrypt, decrypt } from '../src/caesarCipher'

describe('Encrypt', () => {
  test('Word with z and  shift 1', () => expect(encrypt('zebra', 1)).toBe('afcsb'))

  test('Phrase with pontuction and shift 1', () => expect(encrypt('hell awaits!', 1)).toBe('ifmm bxbjut!'))

  test('Word with uppper letters and  shift 1', () => expect(encrypt('Are you ready, boy?', 1)).toBe('bsf zpv sfbez, cpz?'))

  test('Word with z and  shift 5', () => expect(encrypt('zebra', 5)).toBe('ejgwf'))

  test('Phrase with pontuction and shift 2', () => expect(encrypt('hell awaits!', 2)).toBe('jgnn cyckvu!'))

  test('Word with uppper letters and  shift 25', () => expect(encrypt('Are you ready, boy?', 25)).toBe('zqd xnt qdzcx, anx?'))
})

describe('Decrypt', () => {
  test('Word with z and  shift 1', () => expect(decrypt('afcsb', 1)).toBe('zebra'))

  test('Phrase with pontuction and shift 1', () => expect(decrypt('ifmm bxbjut!', 1)).toBe('hell awaits!'))

  test('Word with uppper letters and  shift 1', () => expect(decrypt('bsf zpv sfbez, cpz?', 1)).toBe('are you ready, boy?'))

  test('Word with z and  shift 5', () => expect(decrypt('ejgwf', 5)).toBe('zebra'))

  test('Phrase with pontuction and shift 2', () => expect(decrypt('jgnn cyckvu!', 2)).toBe('hell awaits!'))

  test('Word with uppper letters and  shift 25', () => expect(decrypt('zqd xnt qdzcx, anx?', 25)).toBe('are you ready, boy?'))
})

describe('Numbers', () => {
  test('Encrypt numbers', () => expect(encrypt(666, 1)).toBe('666'))

  test('Encrypt numbers and letters', () => expect(encrypt('apocalypse 666', 15)).toBe('pedrpaneht 666'))

  test('Decrypt numbers', () => expect(decrypt(666, 1)).toBe('666'))

  test('Decrypt numbers and letters', () => expect(decrypt('pedrpaneht 666', 15)).toBe('apocalypse 666'))
})