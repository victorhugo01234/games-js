let fimDesemana = "Sábado";
let fimDesemana1 = "Domingo";
let diaDaSemanaUsuario = prompt('Digite o dia da semana:(Domingo, Segunda, Terça, Quarta, Quinta, Sexta ou Sábado)');
if(diaDaSemanaUsuario == fimDesemana){
    alert('Bom fim de semana!')
}if(diaDaSemanaUsuario == fimDesemana1){
    alert('Bom fim de semana!')
}else{
    alert('Boa semana!')
};

let numeroUsuario = prompt('Digite um numero inteiro de -10 a 10:');
if(numeroUsuario >= 0){
    alert('É um numero positivo')
}else{
    alert('É um numero negativo')
}

let pontuacao = 200;
if(pontuacao>=100){
    console.log('Parabens, você venceu!')
}else{
    console.log('Tente novamente para ganhar.')
}

saldoDaConta = 'R$1500';
alert('O salda da sua conta é ' + saldoDaConta);

let nomeUsuario = prompt('digite seu nome:');
alert('Boas vindas ' + nomeUsuario);