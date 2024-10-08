let listaDeNumerosSorteados = [];
let limiteMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
 
function exibirMensagemInicial() {
    exibirTextoNaTela('h1' , 'Jogo do número secreto!');
    exibirTextoNaTela('p' , 'Escolha um número entre 1 e 100.');
}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteMaximo + 1);
    let quantidadeElementos = listaDeNumerosSorteados.length;
    if (quantidadeElementos == limiteMaximo){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
    
function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraFinal = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraFinal}.`;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', "Acertou!");
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor.');
        }   else {
        exibirTextoNaTela('p', 'O número secreto é maior.');
        } 
        tentativas++;
        limparCampo();
    }   
    
} 

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}