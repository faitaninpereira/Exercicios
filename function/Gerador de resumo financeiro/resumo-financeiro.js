function resumoFinanceiro(ganhos, gastos) {
let saldo= ganhos - gastos

    if (saldo < 0) {
    return `${saldo}: Prejuízo`
    } else {
        return `${saldo}: Lucro`
    }
}
    console.log(resumoFinanceiro(15000, 9500))
    console.log(resumoFinanceiro(7300, 10000))
    console.log(resumoFinanceiro(71394, 43097))