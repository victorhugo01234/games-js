alert ('Boas vindas ao nosso site!');
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
let nomeUsuario = prompt('Informe o seu nome:');
let idadeUsuario = prompt('Informe a sua idade:');
let maiorIdade = 18;
if (idadeUsuario >= maiorIdade){
    alert('Olá ' + nomeUsuario + ', você já pode tirar habilitação!')
}else{
    alert('Olá ' + nomeUsuario + ' você está abaixo da idade mínima para tirar habilitação')
};