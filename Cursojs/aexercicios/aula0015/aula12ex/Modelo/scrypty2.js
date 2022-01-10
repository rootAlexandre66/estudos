function verificar(){
var data = new Date()
var ano = data.getUTCFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || Number(fano.value) >ano){
    alert('dados invalidos')
}else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero =''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        gênero = 'homem'
        if(idade <=16){
        //criança
        img.setAttribute('src','iconsmenino2.png')
        } else if(idade <50){
    //adulto
        img.setAttribute('src','iconshomem.png')
        }else{
        //idoso
        img.setAttribute('src','iconsidoso2.png')
        }
    }else if (fsex[1].checked){
        gênero = 'mulher'
        if(idade <=16){
            //criança
            } else if(idade <50){
        //adulta
            }else{
            //idosa
            }
    }
    res.innerHTML = `detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
    res.appendChild(img2)
}

}