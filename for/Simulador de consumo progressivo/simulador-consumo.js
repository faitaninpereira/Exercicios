let n= 100
let consumo= 7

for (let i = 1; i <= 20; i++) {

    n -= consumo
    console.log(`ciclo ${i} > saldo atual é ${n}`)

    if (n - consumo < 0) {
        console.log("Saldo zerado. Encerrando simulação.")
        break
    }
}   
    