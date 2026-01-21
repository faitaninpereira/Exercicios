function descontoEmMassa(percentualDescontos) {
let arrayPrecos= [100, 50, 25]
let arrayDescontado= []
    
    for(let i= 0; i < arrayPrecos.length; i++) {
    arrayDescontado.push(arrayPrecos[i] - (arrayPrecos[i] * percentualDescontos))

    } return arrayDescontado
}
    console.log(descontoEmMassa(0.1))