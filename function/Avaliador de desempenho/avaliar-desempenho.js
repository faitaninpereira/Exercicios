function desempenho(n) {

    if (typeof n !== 'number' || n < 0 || n > 100) {
        return 'Valor inválido'
    } else if (n < 50) {
        return 'Desempenho Baixo'
    } else if (n < 70) {
        return 'Desempenho Médio'
    } else {
        return 'Desempenho Alto'
    }
} 
    console.log(desempenho(29))
    console.log(desempenho(55))
    console.log(desempenho(90))
    console.log(desempenho(-10))
    console.log(desempenho('Ab'))