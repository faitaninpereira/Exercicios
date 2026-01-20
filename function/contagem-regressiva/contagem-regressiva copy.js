
function contagem(inicio) {
    if (inicio < 0) {
        console.log("Valor inválido");
    } else {
        for (let i = inicio; i >= 0; i--) {
            console.log(`${i} ...`);
        }
        console.log("Acabou o tempo");
    }
}

contagem(10);