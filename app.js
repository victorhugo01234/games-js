alert('Boas vindas ao jogo de números secretos');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
console.log(numeroSecreto);
let palpite;
let tentativas = 1;

//enquanto palpite não for igual ao numero secreto
while (palpite != numeroSecreto) {
    palpite = prompt('Escolha um número entre 1 e ' + numeroMaximo);
    // se o palpite for ao número secreto
    if (palpite == numeroSecreto) {
        break;
    }else{
        if (palpite > numeroSecreto) {
            alert('O número secreto é menor que ' + palpite);
        } else {
            alert('O número secreto é maior que ' + palpite);
        }
        //tentativa = tentativas + 1;
        tentativas ++;
    }
};
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert('Isso ai! Você descobriu o número secreto: ' + numeroSecreto + ' com ' + tentativas +' '+ palavraTentativas);