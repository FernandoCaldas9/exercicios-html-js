// Solicita ao usuário um número para calcular a tabuada
const numero = parseFloat(
  prompt("De qual número você deseja calcular a tabuada?")
);

// Inicializa uma variável para armazenar o resultado da tabuada
let resultado = "";

// Loop que calcula a tabuada do número informado
for (let fator = 1; fator <= 20; fator++) {
  // Concatena o resultado da multiplicação na string de resultado
  // Utiliza parênteses para garantir a ordem das operações
  resultado += " -> " + numero + " x " + fator + " = " + numero * fator + "\n";
}

// Exibe o resultado da tabuada ao usuário
alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado);
