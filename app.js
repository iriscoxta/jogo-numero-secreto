let listaNumeroSorteados = [];
let numLimite = 10;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let elemento = document.querySelector(tag);
  elemento.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){

    exibirTextoNaTela("h1", "Jogo do numero secreto");
    exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
}

function verificarChute() {
  let chuteUsuario = document.querySelector("input").value;
  if (chuteUsuario == numSecreto) {
    exibirTextoNaTela('h1', 'acertou!');
    let palavraTentaiva = tentativas > 1 ? 'tentativas' : 'tentativa'
    let qtdTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentaiva}!`;
    exibirTextoNaTela('p', qtdTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    if(chuteUsuario > numSecreto){
        exibirTextoNaTela('p', 'O numero secreto é menor');
    }else{
        exibirTextoNaTela('p', 'O numero secreto é maior');
    }
    tentativas++;
    limparInput();
  }
}

function gerarNumAleatorio() {
  let numEscolhido = parseInt(Math.random() * numLimite + 1);
  let qtdNumEscolhidos = listaNumeroSorteados.length;
  if(qtdNumEscolhidos == numLimite){
    listaNumeroSorteados = [];
  }
  if(listaNumeroSorteados.includes(numEscolhido)){
    return gerarNumAleatorio();
  }else{
    listaNumeroSorteados.push(numEscolhido);
    console.log(listaNumeroSorteados);
    return numEscolhido;
  }
}

function limparInput(){
    chuteUsuario = document.querySelector('input');
    chuteUsuario.value = ''
}

function reiniciarJogo(){
    location.reload();
    // numSecreto = gerarNumAleatorio();
    // limparInput();
    // tentativas = 1; 
    // exibirMensagemInicial();
    // document.getElementById('reiniciar').setAttribute('disabled', true)
}

exibirMensagemInicial();

