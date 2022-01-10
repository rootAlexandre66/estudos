var n1 = 3
var n2 = 5
var resultado = 0
var operacao = "subtração"
//switch break e obrigátorio
switch(operacao)
{
    case "soma":
    console.log(resultado = n1+n2)
    break
    case 'subtração':
    console.log(resultado = n1-n2)
    break
    case 'multiplicação':
    console.log(resultado = n1*n2)
    break
    case 'divisão':
    console.log(resultado = n1/n2)
    break
    default:
        console.log('operação  invalida')
}