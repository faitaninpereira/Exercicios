let passo= 10

for (let i= 0; i <= 100; i += passo) {
        
        console.log(`Progresso: ${i}%`)
        
        if (i + passo > 100) {
        console.log('Processo Finalizado')
        break
    } 
    }