let numeros= [3, 7, 8, 12, 13, 17, 22, 24, 30, 35, 41, 47]

let baixos= 0
let altos= 0

console.log(`O array tem: ${numeros.length} posições`)

for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] < 25) {
            console.log(`o número ${numeros[i]} é baixo`)
            baixos++
        } else {console.log(`o número ${numeros[i]} é alto`)
                altos++
            }

} 

console.log(`o array tem ${baixos} números baixos e ${altos} números altos`)