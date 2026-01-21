function somaArray () {
    let numeros= [2, 7, 4, 6, 9]
    let soma= 0

    for (let i= 0; i < numeros.length; i++) {
         (soma += numeros[i])
        
    }   return soma

}   console.log(somaArray())