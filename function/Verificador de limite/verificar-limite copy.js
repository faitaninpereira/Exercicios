function verificador(valorAtual, limiteMaximo) {
    return valorAtual > limiteMaximo
        ? "Limite excedido"
        : "Dentro do limite"
}

console.log(verificador(600, 500))