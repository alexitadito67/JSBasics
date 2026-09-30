function sumarDeclaration(n1=0, n2=0){
    return n1 + n2

}

console.log(sumarDeclaration(10,10))

const sumarExpresion = function(n1=0, n2=0){
    return n1 + n2
}

console.log(sumarDeclaration(10 + 15))

const sumarArrow = (n1=0, n2=0) => {
    return n1 + n2
}

console.log(sumarArrow(5, 50))

const sumarArrow2 = (n1=0, n2=0) => n1 + n2
console.log(sumarArrow2(10,20))

const lenguajedeprogramacion = ["JavaScript","Python","C#","Ruby","PHP","LISP"]

const nuevoarray = lenguajedeprogramacion.map(function(lenguaje){
    if(lenguaje == "Python"){
        return "Mojo"
    }else{
        return lenguaje
    }
})

const nuevoarraymap = lenguajedeprogramacion.map(function(lenguaje){
    if(lenguaje == "Python"){
        return "ArrowMojo"
    }else{
        return lenguaje
    }
})

console.log(nuevoarray)
console.log(nuevoarraymap)

const nuevoarray2 = lenguajedeprogramacion.filter(function(lenguaje){
    return lenguaje === 'JavaScript'
})

const nuevoarrayfilterarrow = lenguajedeprogramacion.filter(function(lenguaje){
    return lenguaje !== 'JavaScript'
})
console.log(nuevoarray2)
console.log(nuevoarrayfilterarrow)