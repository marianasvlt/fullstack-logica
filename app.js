alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 17;
console.log(numeroSecreto);
let chute;


//enquanto o chute não for igual ao nS
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 20');
     //se chute for igual ao nS
     if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
     } else {
         if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
         } else {
            alert(`O número secreto é maior que ${chute}`);
        }

    }

}
