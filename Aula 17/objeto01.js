let eu = {
    nome: 'André',
    sexo: 'M',
    peso: 67.5,
    engordar(p = 0) {
        this.peso += p
    }
}

eu.engordar(3)
console.log(`${eu.nome} pesa ${eu.peso}kg.`)