var agora = new Date()
var horas = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()
if(horas <=12 ){
    console.log(`são exatamente ${horas}:${minutos}:${segundos} horas`)
}
else if(horas <=18){
    console.log(`são exatamente ${horas}:${minutos}:${segundos} horas`)
        }
        else{
    console.log(`são exatamente ${horas}:${minutos}:${segundos} horas`)
        }