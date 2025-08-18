// Array para armazenar os imóveis
const imoveis = [];

// Variável para armazenar a opção do menu
let opcao = "";

// Loop do-while para manter o menu ativo até que o usuário escolha sair
do {
  // Exibe o menu e armazena a opção escolhida pelo usuário
  opcao = prompt(
    "Bem-vindo ao Cadastro de Imóveis. \nTotal de imóveis: " +
      imoveis.length +
      "\n\nEscolha um opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair "
  );

  // Switch para tratar a opção escolhida pelo usuário
  switch (opcao) {
    case "1":
      // Cria um objeto para armazenar os dados do imóvel
      const imovel = {};

      // Solicita os dados do imóvel ao usuário
      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:");
      imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"));
      imovel.banheiros = parseFloat(
        prompt("Quantos banheiros possui o imóvel?")
      );
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)");
      if (imovel.garagem.toLowerCase() === "sim") {
        imovel.garagem = true;
      } else {
        imovel.garagem = false;
      }

      // Solicita confirmação para salvar o imóvel
      const confirma = confirm(
        "Salvar este imóvel?\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nGaragem: " +
          (imovel.garagem ? "Sim" : "Não")
      );

      // Se o usuário confirmar, adiciona o imóvel ao array
      if (confirma) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso!");
      } else {
        // Se o usuário não confirmar, exibe uma mensagem de cancelamento
        alert("Inclusão cancelada.");
      }

    case "2":
      // Verifica se há imóveis cadastrados
      if (imoveis.length === 0) {
        // Se não há imóveis, exibe uma mensagem
        alert("Nenhum imóvel cadastrado.");
      } else {
        // Cria uma string para armazenar a lista de imóveis
        let lista = "";

        // Loop para exibir cada imóvel
        for (let i = 0; i < imoveis.length; i++) {
          // Adiciona os dados do imóvel à string
          lista += `Imóvel ${i + 1}\n`;
          lista += `Proprietário: ${imoveis[i].proprietario}\n`;
          lista += `Quartos: ${imoveis[i].quartos}\n`;
          lista += `Banheiros: ${imoveis[i].banheiros}\n`;
          lista += `Garagem: ${imoveis[i].garagem ? "Sim" : "Não"}\n\n`;
        }

        // Exibe a lista de imóveis
        alert(lista);
      }

    case "3":
      // Exibe uma mensagem de saída
      alert("Saindo...");
  }
} while (opcao !== "3");
