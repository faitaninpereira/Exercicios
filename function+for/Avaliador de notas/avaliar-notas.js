function avaliacao(notasFinais) {
let resultados = []

    for (let i= 0; i < notasFinais.length; i++) {

        if (notasFinais >= 7) {
           resultados.push('Aprovado')
        } else {resultados.push('Reprovado')}

    } return resultados
    

}   
    console.log(avaliacao([5, 7, 6, 9, 10]))