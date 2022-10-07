function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade: ${idade}`
        var gênero = ''
        var img = document.createElement('img') // -> Cria a tag <img> para o código HTML
        img.setAttribute('id', 'foto') // -> Atribui um ID à tag <img>
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 8) {
                // Criança
                img.setAttribute('src', 'imgbebemenino.png') // -> Insere a imagem no site
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imggaroto.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imghomem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imgidoso.png')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 8) {
                // Criança
                img.setAttribute('src', 'imgbebemenina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imggarota.png')
            } else if (idade < 60) {
                // Adulta
                img.setAttribute('src', 'imgmulher.png')
            } else {
                // Idosa
                img.setAttribute('src', 'imgidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // -> Adiciona a tag <img> no código HTML
    }
}