let palavras= ["sol", "cachorro", "lua", "elefante", "rio"]
let grandes= 0

    for (let i= 0; i < palavras.length; i++) {

            if (palavras[i].length > 4) {
                console.log(`${palavras[i]}`)
                grandes++
            }
    } console.log(`${grandes} palavras têm mais de 4 letras`)