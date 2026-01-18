let numeros= [1, -3, 7, -10, 4, -5, 11, -6, 0, 33, 20]
let soma= 0
let media= 0

    for (let i = 0; i < numeros.length; i++) {

        console.log(`Item ${i} → valor: ${numeros[i]}`)
        soma= soma + numeros[i]
        media= soma / numeros.length
    }      

        console.log(soma)
        console.log(media)