function avaliar(nota1, nota2) {
    let media= (nota1 + nota2) / 2

        if (media > 5) {
            return "Aprovado"
        } else if (media == 5) {
            return "Recuperação"
        } else {
            return "Reprovado"
        }
}
        
        console.log(avaliar (6, 10))
        console.log(avaliar (1, 8))
        console.log(avaliar (4, 7))