function contarDe1a10() {
  let contador = 1;
  let resultado = "";

  while (contador <= 10) {
    resultado += contador + " ";
    contador++;
  }

  document.getElementById("saida1a10").textContent = resultado.trim();
}

function contarDe10a0() {
  let contador = 10;
  let resultado = "";

  while (contador >= 0) {
    resultado += contador + " ";
    contador--;
  }

  document.getElementById("saida10a0").textContent = resultado.trim();
}

function contagemRegressiva() {
  let numero = parseInt(prompt("Digite um número para contagem regressiva:"));

  if (isNaN(numero)) {
    alert("Digite um número válido.");
    return;
  }

  console.log("Contagem regressiva:");
  while (numero >= 0) {
    console.log(numero);
    numero--;
  }
}

function contagemProgressiva() {
  let limite = parseInt(prompt("Digite um número para contagem progressiva:"));

  if (isNaN(limite)) {
    alert("Digite um número válido.");
    return;
  }

  let atual = 0;

  console.log("Contagem progressiva:");
  while (atual <= limite) {
    console.log(atual);
    atual++;
  }
}