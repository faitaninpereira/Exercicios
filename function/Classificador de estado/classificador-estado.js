function situacao(n) {


    if (n <= 30) {
        return "Crítica"
    } else if (n <= 70) {
        return "Atenção"
    } else {
        return "Estável"
    }
}
    let numeros= [0, 10, 30, 50, 70, 90]

    for (let i= 0; i < numeros.length; i++) {


        let valor= (numeros[i])
        let res= situacao(valor);
        console.log(`Valor: ${valor} → Situação: ${res}`);
    }
