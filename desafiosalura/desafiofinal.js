console.log("Bem-vindo ao nosso site!");
// vai ser exibido no console


let nome = "Mariana";
// console.log(`Olá, ${nome}!`);
alert(`Olá, ${nome}!`);



let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log("Você respondeu: " + linguagem);

 

let valor1 = 15;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultado + ".");


let valor3 = 20;
let valor4 = 5;
let resultado2 = valor3 - valor4;
console.log("A subtração de " + valor3 + " e " + valor4 + " é igual a " + resultado2 + ".");


let idade = prompt("Qual a sua idade?");
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}



let numero = prompt("Digite um número:");
numero = Number(numero);
if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}


let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}


let nota = 6;
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}


let numeroAleatorio = Math.random(); 
console.log("Número aleatório: " + numeroAleatorio);

let aleatorio2 = parseInt(Math.random() * 10 + 1);
console.log("Número aleatório entre 1 e 10: " + aleatorio2);

let aleatorio3 = parseInt(Math.random() * 1000 + 1);
console.log("Número aleatório entre 1 e 1000: " + aleatorio3);
