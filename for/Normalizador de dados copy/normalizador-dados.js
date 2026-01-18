let numeros= [1, -3, 7, -10, 4, -5, 11, -6, 0, 33, 20]
let numerosNovos= []

for (let i= 0; i < numeros.length; i++) {
    
    numerosNovos.push(numeros[i])
    
    if (numerosNovos[i] < 0) {
        numerosNovos[i] = 0
    }
}   
    console.log(numeros)
    console.log(numerosNovos)