function classificarIdade(idade) {
let res= []

    for (let i= 0; i < idade.length; i++) {

        if (idade[i] < 0) {
           res.push('Idade inválida')
        }
        else if (idade[i] < 12) {
            res.push('criança')
        } 
        else if (idade[i] <= 17) {
            res.push('adolescente')
        } 
        else if (idade[i] <= 59) {
            res.push('adulto')
        } 
        else {
            res.push('idoso')
        }
    } return res
}
    console.log(classificarIdade([-5, 0, 7, 10, 16, 18, 22, 59, 60, 78]))