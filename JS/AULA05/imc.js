function imc(peso, altura) {
    return peso / (altura * altura)
}
let peso = 1000
let altura = 1.85
let imc1 = imc(peso, altura)

// Menor que 18,5: Abaixo do peso (magreza)
// 18,5 a 24,9: Peso normal (ideal)
// 25,0 a 29,9: Sobrepeso
// 30,0 a 34,9: Obesidade Grau I
// 35,0 a 39,9: Obesidade Grau II (severa)
// 40,0 ou mais: Obesidade Grau III (mórbida)
if (imc1 <= 18.5){
    console.log("Você está abaixo do peso");
}
else if (imc1 => 18.5 && 24.9 ) {
    console.log("Você está no peso normal");
}
else if (imc1 => 18.5 && 24.9 ) {
    console.log("Você está no peso normal");
}
else if (imc1 => 18.5 && 24.9 ) {
    console.log("Você está no peso normal");
}
else {
    console.log("Você está na Obesidade Grau III");
}