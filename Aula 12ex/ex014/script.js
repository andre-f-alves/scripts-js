function carregar() {
    var msg = window.document.getElementById('msg')

    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        // Manhã
        img.src = 'Imagem manhã.jpg'
        document.body.style.background = 'rgb(190, 212, 223)' // -> Código para mudar a cor de fundo do site
    
    } else if (hora < 18) {
        // Tarde
        img.src = 'Imagem tarde.jpg'
        document.body.style.background = 'rgb(254, 205, 140)'
    
    } else {
        // Noite
        img.src = 'Imagem noite.jpg'
        document.body.style.background = 'rgb(3, 47, 72)'
    }
}
