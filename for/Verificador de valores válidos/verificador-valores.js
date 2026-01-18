let valores= [10, -3, 0, 25, -1, 8, -5, -11, 17]
let valido= 0
let invalido= 0

    console.log(valores.sort((a, b) => a - b))

for (let i = 0; i < valores.length; i++) {

    if (valores[i] < 0) {
        console.log(`Valor inválido: ${valores[i]}`)
        invalido++
    } else {console.log(`Valor válido: ${valores[i]}`)
            valido++
        }
}      
        console.log(`Há ${valido} números válidos e ${invalido} invalidos`)