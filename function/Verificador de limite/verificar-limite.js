function verificador(valorAtual, limiteMaximo) {
    if (valorAtual > limiteMaximo) {
        return "Limite excedido"
    } else {
        return "Dentro do limite"
    }
}       console.log(verificador(600, 500))