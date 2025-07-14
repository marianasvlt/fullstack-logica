let contador = 1;

while (contador <= 10) {
    alert (contador);
    contador++;
}


let contador2 = 9;

while (contador2 >= 0) {
    alert (contador2);
    contador2--;
}


let numeroMaximo = prompt ("Digite um número para contagem regressiva:");

while (numeroMaximo >= 0) {
    alert( numeroMaximo + " ");
    numeroMaximo--;
}


let numeroMaximo2 = prompt ("Digite um número para contagem progressiva:");
let contadorInicial = 0;

while (contadorInicial <= numeroMaximo2) {
    console.log( contadorInicial + " ");
    contadorInicial++;
}

