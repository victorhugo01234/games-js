console.log('Boas Vindas!');

let nome = 'Victor';
console.log('Olá, ' + nome +'!');
alert('Olá, ' + nome + '!');

let linguagem = prompt('Qual a linguagem de programação você mais gosta?');
console.log('A linguagem que mais gosta é: ' + linguagem);

let valor1 = prompt('Digite um valor inteiro:');
let valor2 = prompt('Digite um valor inteiro:');
let resultado = parseInt(valor1) + parseInt(valor2);
console.log('A soma de '+ valor1 + ' e ' + valor2 + ' é igual a ' + resultado);
let resultado1 = parseInt(valor1) - parseInt(valor2);
console.log('A subtração de '+ valor1 + ' e ' + valor2 + ' é igual a ' + resultado1);

let idade = prompt('Digite a sua idade: ');
let maiorIdade = idade < 18 ? 'Você é menor de idade, circulando!':'Você é maior de idade, pode passar!';
console.log(maiorIdade);

let numero = parseInt(prompt('Digite um numero inteiro:'));
let numeroPN = numero < 0 ? 'O numero é negativo' : numero == 0 ? '0 é numero neutro': 'O numero é positivo';
console.log(numeroPN);

let contador = 1;
while (contador <= 10) {
    console.log(contador)
    contador++
};

let nota = 6;
if (nota >= 7 ) {
    console.log('Está aprovado!')
} else {
    console.log('Está reprovado!')
};

console.log(Math.random());

let sorteia10 = parseInt(Math.random() * 10) + 1;
console.log(sorteia10);

let sorteia1000 = parseInt(Math.random() * 1000) + 1;
console.log(sorteia1000);