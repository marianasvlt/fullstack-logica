// ---- ** Dia da Semana ** ----

let diaDaSemana = prompt('Qual é o dia da semana?');

if (diaDaSemana == 'Sábado') {
    alert ('Bom fim de semana!');

} else if (diaDaSemana == 'Domingo') {
    alert ('Bom fim de semana!');

} else {
    alert ('Boa semana!');
}


// ---- ** Positivo ou Negativo ** ----

let numero = prompt ('Digite um positivo ou negativo');

if (numero > 0){
    alert ('Número positivo!')
} else { 
    alert ('Número negativo!')
}


// ---- ** Pontuação ** ----

let pontuacao = prompt ('Insira uma pontuação.');

if (pontuacao >= 100) {
    alert ('Parabéns, você venceu!')
} else {
    alert ('Tente novamente para ganhar.')
}


// ---- ** Saldo e contatenação ** ----

let saldoConta = 1000;
alert(`Seu saldo é de R$${saldoConta}.`);

let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);


//Funcionando.
