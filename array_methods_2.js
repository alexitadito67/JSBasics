const lenguajesDeProgramacion = ["JavaScript", "Python", "C#", "Ruby", "PHP", "LISP"]

//Filtro
nuevoArray = lenguajesDeProgramacion.filter(Lenguaje => Lenguaje === 'JavaScript')
console.log(nuevoArray)
//comrpobar si un elemento existe

const resultado = lenguajesDeProgramacion.includes("Ruby")
console.log(resultado)

//some - devuelve si al menos un cumple con la condicion
const numeros = [10, 20, 30, 40, 50]
const resultadoNum = numeros.some ( numero => numero > 15)
console.log("Resultado", resultadoNum)

// find - devuelve si el primer elemento que cumpla con la condicion
const resultadoNum2 = numeros.find(numero => numero > 15)
console.log("Resultado num 2", resultadoNum2)

//every - retorna true o false si todos cumplen la condicion
const resulNum3 = numeros.every(numero => numero > 15)
console.log("Resultado num 3", resulNum3)

//reduce - acumulador de algun total
const resultadoNum4 = numeros.reduce((total, numero)=> numero + total, 0)
console.log("Resultado num 4", resultadoNum4)

//foreach - itera en cada un de los elementos de un array
const nuevoArray2 = lenguajesDeProgramacion.forEach((Lenguaje, index) => console.log(Lenguaje))

//crea un nuevo array apartir de uno original
const arrayMap = lenguajesDeProgramacion.map( Lenguaje => Lenguaje)
console.log("arrayMap: ", arrayMap)