//Em seguida vamos começar obtendo os nomes e velocidades dos dois veículos://

const veiculo1 = prompt("Informe o nome do primeiro veículo:");
const velocidade1 = parseFloat(
  prompt("Informe a velocidade do primeiro veículo:")
);

const veiculo2 = prompt("Informe o nome do segundo veículo:");
const velocidade2 = parseFloat(
  prompt("Informe a velocidade do segundo veículo:")
);

//Agora vamos escrever um IF para exibir o resultado apropriado na tela://

if (velocidade1 > velocidade2) {
  alert(veiculo1 + " é mais rápido que " + veiculo2);
} else if (velocidade2 > velocidade1) {
  alert(veiculo2 + " é mais rápido que " + veiculo1);
} else {
  alert(veiculo1 + "e" + veiculo2 + "possuem velocidade iguais.");
}
