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
      "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  );

  switch (opcao) {
    case "1":
      // Cria um objeto para armazenar os dados do imóvel
      const imovel = {};
      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:");
      imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"));
      imovel.banheiros = parseFloat(
        prompt("Quantos banheiros possui o imóvel?")
      );
      imovel.garagem =
        prompt("O imóvel possui garagem? (Sim/Não)").toLowerCase() === "sim";

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

      if (confirma) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Inclusão cancelada.");
      }
      break; // <--- importante

    case "2":
      if (imoveis.length === 0) {
        alert("Nenhum imóvel cadastrado.");
      } else {
        let lista = "";
        for (let i = 0; i < imoveis.length; i++) {
          lista += `Imóvel ${i + 1}\n`;
          lista += `Proprietário: ${imoveis[i].proprietario}\n`;
          lista += `Quartos: ${imoveis[i].quartos}\n`;
          lista += `Banheiros: ${imoveis[i].banheiros}\n`;
          lista += `Garagem: ${imoveis[i].garagem ? "Sim" : "Não"}\n\n`;
        }
        alert(lista);
      }
      break; // <--- importante

    case "3":
      alert("Saindo...");
      break; // <--- opcional, mas bom para consistência

    default:
      alert("Opção inválida! Digite 1, 2 ou 3.");
  }
} while (opcao !== "3");
