// Atividade
// 1 - Altere o conteúdo da tag h1 com document.querySelector e atribua o texto: Hora do desafio
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

// 2 - Crie uma função que exiba no console a mensagem (O botão foi clicado) sempre que o botão console for pressionado.
function botaoConsole() {
    console.log("clicou")
}
//3 - Crie uma função que exiba um alerta com a mensagem: (Eu amo Js), sempre que o botão Alert for pressionado.
function botaoAlert (){
    alert("Eu Amo Js")
}
//4 - Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguinda, exiba um alerta com a mensagem concatenando a resposta com o texto: estive em {Cidade} e lembrei de você.
function botaoPrompt(){
    let cidadeBrasil = prompt('Qual o nome de uma cidade do Brasil?');
    alert(`Estive em ${cidadeBrasil} e lembrei de você.`);
}
//5 - Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function botaoSoma() {
    let x = parseInt(prompt("Infome o primeiro número"));
    let y = parseInt(prompt("Informe o segundo número"));
    let soma = x + y;
    alert(` A soma dos números informados é ${soma}`);
}