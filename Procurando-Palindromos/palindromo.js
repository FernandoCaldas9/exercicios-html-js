// Solicita a palavra do usuário
const palavra = prompt("Informe uma palavra:");

// Cria uma variável para armazenar a palavra invertida
let palavraInvertida = "";

// Cria um laço for que percorre as posições da palavra, começando do último índice e indo até o primeiro
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

// Verifica se a palavra é um palíndromo e mostra as mensagens de acordo
if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!");
} else {
  alert(
    palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida
  );
}
