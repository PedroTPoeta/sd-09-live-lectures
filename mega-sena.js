// REGRA DE NEGOCIO DA MEGA SENA
// 6 NUMEROS SORTEADOS ALEATORIAMENTE
// NUMEROS ESSES, QUE PODEM IR DE 1 A 60
// PESSOAS VENCEDORAS: ACERTOS DE 4 A 6 NUMEROS.

let megaSenaNumbers = [];

for (let index = 0; index < 6; index += 1) {
  megaSenaNumbers.push(Math.ceil(Math.random() * 60));
}

// let firstNumber = Math.ceil(Math.random() * 60);
// let secondNumber = Math.ceil(Math.random() * 60);
// let thirdNumber = Math.ceil(Math.random() * 60);
// let fourthNumber = Math.ceil(Math.random() * 60);
// let fifthNumber = Math.ceil(Math.random() * 60);
// let sixthNumber = Math.ceil(Math.random() * 60);

// megaSenaNumbers.push(firstNumber);
// megaSenaNumbers.push(secondNumber);
// megaSenaNumbers.push(thirdNumber);
// megaSenaNumbers.push(fourthNumber);
// megaSenaNumbers.push(fifthNumber);
// megaSenaNumbers.push(sixthNumber);

//                   0  1   2   3   4   5
// let witthoeftGame = [5, 12, 18, 45, 34, 56];
let witthoeftGame = [];

for (let index = 0; index < 6; index += 1) {
  witthoeftGame.push(Math.ceil(Math.random() * 60));
}

let numberOfHits = 0;

// ESTRUTURA DE REPETICAO
for (let index = 0; index < megaSenaNumbers.length; index += 1) {
  for (let gameIndex = 0; gameIndex < witthoeftGame.length; gameIndex += 1) {
    if (megaSenaNumbers[index] === witthoeftGame[gameIndex]) {
      numberOfHits += 1;
    }
  }
}

console.log('O jogo sorteado é: ' + megaSenaNumbers);
console.log('O jogo do Marcus é: ' + witthoeftGame);
console.log('O total de acertos foi: ' + numberOfHits);

