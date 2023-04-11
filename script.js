/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/

let numberOne = Number(prompt("Insira o primeiro número: "))
let numberTwo = Number(prompt("Insira o segundo número: "))

const sum = (number1, number2) => {
  return number1 + number2
}
const sub = (number1, number2) => {
  return number1 - number2
}
const mult = (number1, number2) => {
  return number1 * number2
}
const div = (number1, number2) => {
  return number1 / number2
}
const rest = (number1, number2) => {
  return number1 % number2
}

alert(`A soma dos dois números é: ${sum(numberOne, numberTwo)}`)
alert(`A subtração dos dois números é: ${sub(numberOne, numberTwo)}`)
alert(`A multiplicação dos dois números é: ${mult(numberOne, numberTwo)}`)
alert(`A divisão dos dois números é: ${div(numberOne, numberTwo)}`)
alert(`A resto dos dois números é: ${rest(numberOne, numberTwo)}`)

let soma = sum(numberOne, numberTwo)

alert(soma % 2 == 0 ? 
  `A soma dos números é par: ${soma}` : 
  `A soma dos números é impar: ${soma}`)

alert(numberOne == numberTwo ? 
  `Os números são iguais!`: 
  `Os números são diferentes!`)

