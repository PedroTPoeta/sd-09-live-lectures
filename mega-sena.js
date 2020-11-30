function generateRandomNumber(qtdNumber) {
  return Math.ceil(Math.random() * qtdNumber);
}

function megaSenaDraw(qtdNumber) {
  let megaSenaNumbers = [];

  for (let index = 0; index < qtdNumber; index += 1) {
    megaSenaNumbers.push(generateRandomNumber(60));
  }

  return megaSenaNumbers;
}

function checkMegaSenaResult(result, game) {
  let numberOfHits = 0;

  for (let index = 0; index < result.length; index += 1) {
    for (let gameIndex = 0; gameIndex < game.length; gameIndex += 1) {
      if (result[index] === game[gameIndex]) {
        numberOfHits += 1;
      }
    }
  }

  return numberOfHits;
}

let megaSenaResult = megaSenaDraw(6);
let olivaGame = megaSenaDraw(10);
let kamilaGame = megaSenaDraw(6);
let victorRiccoGame = megaSenaDraw(8);


console.log('Acertos do oliva: ', checkMegaSenaResult(megaSenaResult, olivaGame));
console.log('Acertos da Kamila: ', checkMegaSenaResult(megaSenaResult, kamilaGame));
console.log('Acertos do Victor: ', checkMegaSenaResult(megaSenaResult, victorRiccoGame));