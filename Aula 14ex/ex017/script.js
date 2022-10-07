function calcular() {
    let num = document.querySelector('input#txtb')
    let tab = document.querySelector('select#seltab')
    
    if (num.value.length == 0) {
        alert('[ERRO] Preencha o campo requisitado!')
    
    } else {
        let n = Number(num.value)
        let t = 1

        tab.innerHTML = '' // -> Limpa o '<select>' antes de gerar a nova tabuada

        /*while (t <= 10) {
            let item = document.createElement('option') // -> Cria o elemento '<option>' para o '<select>' no HTML
            item.text = `${n} x ${t} = ${n * t}`
            item.value = `tab${t}` // -> Dá um valor à opção
            tab.appendChild(item) // -> Adiciona o elemento em '<select>'
            t++
        }*/

        /*for (t; t <= 10; t++) {
            let item = document.createElement('option')
            item.text = `${n} x ${t} = ${n * t}`
            item.value = `tab${t}`
            tab.appendChild(item)
        }*/

        do {
            let item = document.createElement('option')
            item.text = `${n} x ${t} = ${n * t}`
            item.value = `tab${t}`
            tab.appendChild(item)
            t++
        } while (t <= 10)
    }    
}