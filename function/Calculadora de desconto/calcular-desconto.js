function calcularDesconto(valorOriginal, percentualDesconto) {
      
    return valorOriginal - (valorOriginal * percentualDesconto/100)

}
    let valor= calcularDesconto(300, 20)
    console.log(valor)