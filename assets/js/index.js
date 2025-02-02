const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = peso / (altura * altura);

    resultado.textContent = valorIMC.toFixed(1);

    let classificacao = "";

    if (valorIMC.toFixed(1) < 18.5) {
      classificacao = "abaixo do peso.";
    } else if (valorIMC.toFixed(1) < 25) {
      classificacao = "com peso ideal. Parabéns!";
    } else if (valorIMC.toFixed(1) < 30) {
      classificacao = "levemente acima do peso.";
    } else if (valorIMC.toFixed(1) < 35) {
      classificacao = "com obesidade grau I.";
    } else if (valorIMC.toFixed(1) < 40) {
      classificacao = "com obesidade grau II.";
    } else {
      classificacao = "com obesidade grau III. Cuidado!";
    }
    resultado.textContent = `${nome} seu IMC é ${valorIMC.toFixed(
      1
    )} e você está ${classificacao}`;
  } else {
    resultado.textContent = "Preencha todos os campos !!!";
  }
}
calcular.addEventListener("click", imc);
