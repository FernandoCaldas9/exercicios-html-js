// Variável para armazenar a opção do usuário
let opcao = "";

// Laço do-while para manter o programa rodando até que o usuário escolha a opção 5
do {
  // Prompt para exibir o menu e solicitar a opção do usuário
  opcao = prompt(
    "Seja bem-vindo(a)!\n" +
      "\nEscolha uma das opções abaixo:" +
      "\n1 - Opção Um" +
      "\n2 - Opção Dois" +
      "\n3 - Opção Três" +
      "\n4 - Opção Quatro" +
      "\n5 - Encerrar"
  );

  // Switch para controlar o comportamento de cada opção
  switch (opcao) {
    case "1":
      // Exibe uma mensagem para o usuário quando escolhe a opção 1
      alert("Você escolheu a opção 1.");
      break;
    case "2":
      // Exibe uma mensagem para o usuário quando escolhe a opção 2
      alert("Você escolheu a opção 2.");
      break;
    case "3":
      // Exibe uma mensagem para o usuário quando escolhe a opção 3
      alert("Você escolheu a opção 3.");
      break;
    case "4":
      // Exibe uma mensagem para o usuário quando escolhe a opção 4
      alert("Você escolheu a opção 4.");
      break;
    case "5":
      // Exibe uma mensagem para o usuário quando escolhe a opção 5 e encerra o programa
      alert("Encerrando o programa...");
      break;
    default:
      // Exibe uma mensagem de erro quando o usuário digita uma opção inválida
      alert("Entrada inválida! Escolha uma das cinco opções.");
  }
} while (opcao !== "5");
// Condição para manter o laço rodando até que o usuário escolha a opção 5
// Adiciona um log para registrar a opção escolhida pelo usuário
console.log(`Opção escolhida: ${opcao}`);
