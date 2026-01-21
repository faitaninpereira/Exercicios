function pares(numerosPares) {
    let arrayPar= []

    for (let i= 0; i < numerosPares.length; i++) {
       if (numerosPares[i] % 2 == 0) {
            arrayPar.push(numerosPares[i])
       }  
    } return arrayPar

}   let array= [2, 4, 6, 7, 9, 1, 5, 8, 12]
    
console.log(array)
console.log(pares(array))
    