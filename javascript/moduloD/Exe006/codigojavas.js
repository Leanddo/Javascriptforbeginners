function carregar() {
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ' + hora + ' horas'
    if (hora >= 0 && hora < 12) {
        img.src = 'manhã.png'
        document.body.style.backgroundColor='#F8A305'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.backgroundColor='#D92E2E'
    } else {
        img.src = 'noite.png'
        document.body.style.backgroundColor='#352854'
        
    }
}
