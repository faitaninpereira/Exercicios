function calcularTempo(minutos) {
    let horas= Math.floor(minutos/60)
    let restoMinutos= minutos % 60

        return `${horas}h ${restoMinutos}min`
}
    console.log(calcularTempo(120))
    console.log(calcularTempo(73))
    console.log(calcularTempo(348))