let numeros= [1, 3, 7, 10, 4, -5, 11, -6, 0, 33, 20]
let par= []
let impar= []
for (let i= 0; i < numeros.length; i++) {

    if (numeros[i] % 2 == 0) {
        console.log(`${numeros[i]} é par`)
        par.push(numeros[i])
    } else {
        console.log(`${numeros[i]} é impar`)
        impar.push(numeros[i])
    }
} console.log(`Pares: [${par}], Impares: [${impar}]`)

