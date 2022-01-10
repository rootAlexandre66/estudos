

function caucular(){
    var num = document.getElementById('init')
    var tab = document.getElementById('seltab')
    if( num.value.length ==0){
        tab.innerHTML= ''
        alert('dados inválidos')
        
}  else{
      let numconvertido = Number(num.value)
      c= 0
      tab.innerHTML = ''
       while(c <=10){
    let item = document.createElement('option')
    item.text = `${numconvertido} x ${c} = ${numconvertido*c}`
    item.value = `tab${c}`
    tab.appendChild(item)
    c++
       }
       
}

}