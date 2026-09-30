//Tipos de datos
// Undefined
// Number
// Function
// Objet
// String
// Boolean
// Symbol
// Big Int
// Null

//undefined
let cliente
console.log(cliente)
console.log(typeof cliente)

//boolean
let descuento = true
console.log(descuento)
console.log(typeof descuento)

//number
let num1 = 7
let num2 = 7.77
let num3 = -7

console.log(num1)
console.log(num2)
console.log(num3)

//string o cadena de texto
const alumno = "Alexis"
const producto = "Mini dick"
console.log(alumno)
console.log(producto)

const myNum = "77"
const myNum2 = 77
console.log(typeof myNum)
console.log(typeof myNum2)

//Big Int
const bigNumber = BigInt(12345678901234567890123456789012345678901234567890)
console.log(typeof bigNumber)

const a = 1
const b = 3
console.log(a + b)
//console.log(a + bigNumber) //error
//inicializamos conversion
console.log(a + Number(bigNumber))

//symbol
const mySymbol1 = Symbol(30)
const mySymbol2 = Symbol(30)

console.log(mySymbol1 === mySymbol2)
console.log(mySymbol1.valueOf())
console.log(mySymbol2.valueOf())

//null
const myVar = null
console.log(typeof myVar)