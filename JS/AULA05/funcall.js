// Declaração de Váriavel
let nome = "Gustavo";
let soma = 5 + 5;

// Exibição do valor armazenado das variáveis
console.log(nome);
console.log(soma);

// Estrutura de decisão
if (soma > 5){
  console.log("A soma é maior que 5")
} else {
  console.log("A soma é menor que 5")
}

// Laço de repetição
for (let i = 0; i < 10; i++) {
  console.log("O valor de i é: " + i);
}

//Função se refere a uma lógica que é repedita mais de uma vez, mas diferente de um laço de repetição, a função é para ser invocada quando o programador escolher, indepedente de um contador
function somador(a, b) {
  return a + b;
}

// A função pode ser invocada para passar valor a uma variavel, como no exemplo abaixo. Observe que a e b da criação da função foram substituidos pelos valores a ser somados, assim como variaveis da matematica.
let total = somador(5, 4)
console.log(total);

let total2 = somador(6, 7)
console.log(total2);

// A função também pode ser invocado dentro de outras funções ou métodos, como no exemplo abaixo, onde invocamos a função somador dentro do console.log()
console.log(somador(15,25));


