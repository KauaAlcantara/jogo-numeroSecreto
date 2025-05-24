alert("Boa vindas ao jogo do numero secreto");
let numeroMaximo = 500;
var numeroSecreto = Number.parseInt(Math.random() * numeroMaximo) + 1;
var numero;
var tentativas = 1;

while (numero !== numeroSecreto) {
  numero = prompt(`Escolha um numero de 0 e ${numeroMaximo}`);

  if (numero > 100 || isNaN(numero)) {
    alert("Apenas numeros de 1 a 10");
  }
  numero = Number(numero);
  numeroSecreto = Number(numeroSecreto);
  if (numero == numeroSecreto) {
    break;
    // } else if (isNaN(numero) || numero > 10) {
    //   alert("Apenas numeros de 1 a 10");
    //   break;
  } else if (numero > numeroSecreto) {
    alert("O numero secreto e MENOR, tente novamente");
  } else if (numero < numeroSecreto) {
    alert("O numero secreto e MAIOR, tente novamente");
  }
  tentativas++;
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Parabens, voce acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
);
