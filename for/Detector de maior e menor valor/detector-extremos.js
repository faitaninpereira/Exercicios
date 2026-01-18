let numeros= [1, 3, 7, 10, 4, -5, 11, -6, 0, 33, 20]
let maior= numeros[0]
let menor= numeros[0]

for (let i= 0; i < numeros.length; i++) {

    if (numeros[i] > maior) {
        maior = numeros[i]
    }

    if (numeros[i] < menor) {
        menor = numeros[i]
}
}
    console.log(`${maior} é o maior valor`)
    console.log(`${menor} é o menor valor`)