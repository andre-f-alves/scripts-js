function contar() {
    let início = document.querySelector('input#início')
    let final = document.querySelector('input#final')
    let passo = document.querySelector('input#passo')
    let res = document.querySelector('div#res')

    if (início.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:<br>'
        let i = Number(início.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        
        if (p <= 0) {
            window.alert('Passo inválido para a contagem! Considerando PASSO = 1.')
            p = 1
        }

        let c = i

        if (i < f) { // Contagem crescente
            do {
                res.innerHTML += `${c} \u{27A1}`
                c += p
            } while (c < f)
        } else { // Contagem decrescente
            do {
                res.innerHTML += `${c} \u{27A1}`
                c -= p
            } while (c > f)
        }

        /*if (i < f) { // Contegem crescente
            while (c < f) {
                res.innerHTML += `${c} \u{27A1} `
                c += p
            }
        } else { // Contagem decrescente
            while (c > f) {
                res.innerHTML += `${c} \u{27A1} `
                c -= p
            }
        }*/

        /*if (i < f) { // Contagem crescente
            for (c; c <= f; c += p) {
                res.innerHTML += `${c} \u{27A1} `
            }
        } else { // Contagem decrescente
            for (c; c > f; c -= p) {
                res.innerHTML += `${c} \u{27A1} `
            }
        }*/
        res.innerHTML += 'FIM'
    }
}