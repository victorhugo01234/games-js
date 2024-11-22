//exibir no console a contagem progressiva do contador
let contador = 1;
while (contador <=10) {
    console.log(contador)
    contador++
};

//exibir no console a contagem regresiva do contador
let contador1 = 10;
while (contador1 >= 0) {
    console.log(contador1)
    contador1--
}

let numeroMaximo = prompt('Informe o numero para que possamos realizar a contagem regressiva:');
while (numeroMaximo >= 0) {
    console.log(numeroMaximo)
    numeroMaximo--
}

let numeroMaximo1 = prompt('Informe o numero para que possamos realizar a contagem progressiva:');
let contador2 = 0;
while (contador2 <= numeroMaximo1) {
    console.log(contador2)
    contador2++
}