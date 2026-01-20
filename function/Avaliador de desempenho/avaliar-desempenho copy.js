function desempenho(n) {
    
    return n < 50 ? 'Desempenho Baixo' :
           n < 70 ? 'Desempenho Médio' :
                     'Desempenho Alto';

} 
    console.log(desempenho(29))
    console.log(desempenho(55))
    console.log(desempenho(90))