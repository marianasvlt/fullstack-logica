//desafio 1
console.log("Bem-vindo ao nosso site!");

//desafio2 e 3
let nome = "Mariana";
// console.log(`Olá, ${nome}!`);
alert(`Olá, ${nome}!`);


//desafio 4
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log("Você respondeu: " + linguagem);

 //desafio 5
let valor1 = 15;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultado + ".");

// desafio 6
let valor3 = 20;
let valor4 = 5;
let resultado2 = valor3 - valor4;
console.log("A subtração de " + valor3 + " e " + valor4 + " é igual a " + resultado2 + ".");

//desafio 7
let idade = prompt("Qual a sua idade?");
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}


//desafio 8
let numero = prompt("Digite um número:");
numero = Number(numero);
if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}


// desafio 9
let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

//desafio 10
let nota = 6;
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

//desafio 11
let numeroAleatorio = Math.random(); 
console.log("Número aleatório: " + numeroAleatorio);

//desafio 12
let aleatorio2 = parseInt(Math.random() * 10 + 1);
console.log("Número aleatório entre 1 e 10: " + aleatorio2);

//desafio 13
let aleatorio3 = parseInt(Math.random() * 1000 + 1);
console.log("Número aleatório entre 1 e 1000: " + aleatorio3);
