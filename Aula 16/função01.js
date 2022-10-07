function parOuÍmpar(n) {
    if (n % 2 == 0) {
        return 'par!'
    } else {
        return 'ímpar!'
    }
}

let res = parOuÍmpar(14)
console.log(`O número é ${res}`)