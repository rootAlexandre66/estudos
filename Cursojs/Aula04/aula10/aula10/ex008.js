var velocidade = 80
 multa = 0
 if (velocidade > 80){
     multa +=10
 }else if(velocidade==80){
     console.log(`cuidado com sua velocidade ${velocidade} km/hora`)
    
 }else{
    console.log(`você não foi multado pois sua velocidade e ${velocidade} km/hora`)
 }