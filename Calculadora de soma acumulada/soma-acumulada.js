let numeros= [5, 8, 12, 3, 10]
let soma= 0

    for (let i= 0; i < numeros.length; i++) {

            soma = soma + numeros[i]
            console.log(`Número: ${numeros[i]} → Soma acumulada: ${soma}`)       
    }


// sempre que eu quiser que uma variável assuma outro valor de forma contínua, crio uma variável = 0 (let soma= 0)