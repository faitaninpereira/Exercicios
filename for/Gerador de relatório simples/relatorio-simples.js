let numeros= [1, -3, 7, -10, 4, -5, 11, -6, 0, 33, 20]
let soma= numeros.reduce((t, v) => t + v, 0)
let media= soma / numeros.length

    for (let i = 0; i < numeros.length; i++) {

        console.log(`Item ${i} → valor: ${numeros[i]}`)
    }
        console.log(soma)
        console.log(media)