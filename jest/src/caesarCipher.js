const stringParse = (entry) => entry.toString().toLowerCase()
const encryptExpresion = (letter,shift) => String.fromCharCode((letter.charCodeAt(0) + shift - 97) % 26 + 97)
const decryptExpresion = (letter,shift) => String.fromCharCode((letter.charCodeAt(0) - shift - 122) % 26 + 122)

export const encrypt = (entry, shift) => stringParse(entry).replace(/[a-z]/g, l => encryptExpresion(l, shift) )

export const decrypt = (entry, shift) => stringParse(entry).replace(/[a-z]/g, l => decryptExpresion(l, shift) )