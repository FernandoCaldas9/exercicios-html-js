// Pedimos o saldo inicial ao usuário
let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"));
let opcao = ""; // Variável para armazenar a opção escolhida pelo usuário

// Loop que continua até que o usuário escolha a opção 3 (Sair)
do {
  // Mostramos o saldo atual e as opções disponíveis ao usuário
  opcao = prompt(
    "Saldo disponível: R$ " +
      saldo +
      "\n1 - Adicionar dinheiro" +
      "\n2 - Remover dinheiro" +
      "\n3 - Sair"
  );

  // Switch para lidar com a opção escolhida pelo usuário
  switch (opcao) {
    case "1":
      // Adicionamos o valor informado pelo usuário ao saldo
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"));
      break;
    case "2":
      // Subtraímos o valor informado pelo usuário do saldo
      saldo -= parseFloat(prompt("Informe o valor a ser removido:"));
      break;
    case "3":
      // Mostramos uma mensagem de saída ao usuário
      alert("Saindo...");
      break;
    default:
      // Mostramos uma mensagem de erro se o usuário informar uma opção inválida
      alert("Entrada inválida.");
      break;
  }
} while (opcao !== "3"); // Continuamos o loop até que o usuário escolha a opção 3
