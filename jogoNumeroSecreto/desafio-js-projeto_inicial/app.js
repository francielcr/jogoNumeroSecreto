alert('Boas Vindas ao nosso site!');
let nome = prompt('Escreva seu nome:');
let idade = prompt("Digite sua idade:");
if (idade>=18) {
    alert('Bem Vindo' + nome + ' Acesso ao site liberado! Você é maior de idade.')
} else {
    alert('Bem Vindo' + nome + ' Você não pode acessar nosso site, pois é menor de idade.')
}
let mensagemDeErro = ("Erro! Preencha todos os campos")
alert(mensagemDeErro)