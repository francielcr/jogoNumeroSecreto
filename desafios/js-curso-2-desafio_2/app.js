function saudacao(params) {
    console.log("Olá, mundo!");
}

function saudacaoNominal(nome) {
    console.log(`Olá," ${nome}!`)
}

function dobroDoNumero(numero) {
    return numero * 2
}

function mediaDeTresNumeros(num1, num2, num3) {
   return media = (num1 + num2 + num3) / 3
}

function maiorDeDoisNumeros(x,y) {
    if (x > y) {
        return x;        
    } else {
        return y;
    } 
}

function multplicacaoPorEleMesmo(numero1) {
   return resultado = numero1 * numero1
}

saudacao()

saudacaoNominal("Franciel")

console.log(dobroDoNumero(10))

console.log(mediaDeTresNumeros(2,4,3))

console.log(maiorDeDoisNumeros(7,13))

console.log(multplicacaoPorEleMesmo(3))