let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, list) {
    if (list.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) >= 1 && ! inList(num.value, valores)) {
        
        let n = Number(num.value)
        valores.push(n)
        
        let item = document.createElement('option')
        
        for (let pos in valores) {
            item.value = `v${pos}`
        }
        
        item.text = `Número ${n} adicionado.`
        lista.appendChild(item)

        res.innerHTML = ''

    } else {
        alert('[ERRO] valor inválido ou já encontrado na lista!')
    }

    num.value = ''
    num.focus()
}

function soma(list) {
    let soma = 0
    for (let pos in list) {
        soma += list[pos]
    }
    return soma
}

function média(list) {
    return soma(list) / list.length
}

function analisar() {
    if (valores.length == 0) {
        alert('[ERRO] Adicione um número na lista!')
    } else {
        
        res.innerHTML = `<p>${valores.length} números foram adicionados à lista.</p>`
        
        let maior = valores[0]
        let menor = valores[0]

        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
    
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        res.innerHTML += `<p>O maior valor é ${maior} e o menor é ${menor}.</p>`
        
        res.innerHTML += `<p>A soma dos valores adicionados é ${soma(valores)}.</p>`
        
        res.innerHTML += `<p>A média entre os valores adicionados é de ${média(valores)}.</p>`
    }
}