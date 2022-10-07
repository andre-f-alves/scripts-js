let valores = [8, 1, 9, 7, 6, 5]

/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`Posição ${pos} = valor ${valores[pos]}`)
}*/

for (let pos in valores) {
    console.log(`Posição ${pos} = valor ${valores[pos]}`)
}

let pos = valores.indexOf(4)

if (pos == -1) {
    console.log('[ERRO] Valor não encontrado!')
} else {
    console.log(`O valor está na posição ${valores.indexOf(pos)}.`)
}