function limites(atual, maximo) {

    if (atual > maximo) {
        return 'Dentro do limite'
    } else {
        return 'Limite excedido'
    }

}
let msg= limites(3000, 2000)
console.log(msg)

//console.log(limites(1500, 3000)) esse tambem é um jeito de escrever as duas linhas de cima