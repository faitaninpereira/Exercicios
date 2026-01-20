function faixaEtaria(idade) {
    
    if (idade < 0) {
        return "idade inválida"
    } else if (idade <= 12) {
        return "criança"
    } else if (idade <=17) {
        return "adolescente"
    } else if (idade <= 45) {
        return "adulto"
    } else {
        return "idoso"
    }
}       console.log(faixaEtaria(70))