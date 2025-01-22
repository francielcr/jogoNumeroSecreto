alert('Bem vindo ao jogo do numero secreto');
let numeroMaximo = prompt("infome o numero máximo para o inrvalo")
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1

// enquanto chute for igual ao numero secreto.
while(chute !=numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao numero secreto
    if(numeroSecreto == chute){
        break;
        
    } else{
        if(chute > numeroSecreto){
            alert(`O numero secreto é menor que o ${chute}`);
        } else{
            alert(`O numero secreto é maior que o ${chute}`);
        }
        //tentativa = tentativas + 1
        tentativas++;
    }
}

if (tentativas > 1) {
    alert(` Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`)    
} else {
    alert(` Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`)
}