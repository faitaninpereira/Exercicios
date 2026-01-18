let numeros = [1, -3, 7, -10, 4, -5, 11, -6, 0, 33, 20]
let numerosNovos = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
        numerosNovos.push(0)
    } else {
        numerosNovos.push(numeros[i])
    }
}

console.log(numeros)
console.log(numerosNovos)