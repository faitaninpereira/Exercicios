function calcularDesconto(valorOriginal, percentualDesconto) {
    let desconto= valorOriginal * percentualDesconto/100
    let valorFinal= valorOriginal - desconto
      
    return valorFinal

}
    let valor= calcularDesconto(200, 15)
    console.log(valor)