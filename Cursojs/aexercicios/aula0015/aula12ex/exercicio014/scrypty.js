function carregar(){
    var msm = window.document.getElementById('hora')
    var img = window.document.getElementById('imagem')
    var dataatual = new Date()
    var hora = dataatual.getHours()
    var minuto=dataatual.getMinutes()
    msm.innerHTML = `agora são ${hora}horas`
   // var hora = 20
    if(hora<=12){
        msm.innerHTML = `agora são ${hora}:${minuto} horas, bom diaa!!`
        img.src="novodia.png"
        document.body.style.background = '#e2cd9f'
    }else if(hora <=18){
        msm.innerHTML = `agora são ${hora}:${minuto} horas, boa tardee!!`
        img.src="novatarde.png"
        document.body.style.background = '#CC9966'
    }else{
        msm.innerHTML = `agora são ${hora}:${minuto} horas boa noite!!`
        img.src="novanoite.png"
        document.body.style.background = '#660033'
    }
}

