
function contar(){
    let ini = document.getElementById('init')
    let fim = document.getElementById('fi')
    let passo = document.getElementById('pas')
    let res = document.getElementById('res')
    //teste se os campos estão zerados
    if(ini.value.length ==0 ||fim.value.length==0 || passo.value.length==0){
        alert('dados invalidos')
    }else{
        res.innerHTML = 'contando:...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //falta testar se o passo e valido
        if(p <=0){
            p =1
        }
        //testa se o inicio e menor que o fim
        if(i <f){
            res.innerHTML +=`\u{1f3c1}`
            for(let c =i; c <= f;c+=p){
                res.innerHTML += `${c} \u{1f449}`
      
            }
            res.innerHTML +=`\u{1f3c1}`
        }else{
            res.innerHTML +=`\u{1f3c1}`
            for(let c =i; c >= f;c -=p){
                res.innerHTML += `${c} \u{1f449}`
      
            }
            res.innerHTML +=`\u{1f3c1}`
        }
    }
}
