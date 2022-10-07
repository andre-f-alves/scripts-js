var idade = 66
/*if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade < 18) {
        console.log('Voto facultativo')
    } else {
        console.log('Voto obrigatório')
    }   
}*/
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto facultativo')
} else {
    console.log('Voto obrigatório')
}