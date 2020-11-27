// Posição da rainha
let queenRowPosition = 4;
let queenColumnPosition = 4;

// Posição da peça oponente
let opponentRowPosition = 1;
let opponentColumnPosition = 8;

// Identifica se o ataque foi bem sucedido
let successfulAttack = false;

// Se a peça do oponente tiver na mesma coluna que a rainha, XABLAU
if (queenColumnPosition === opponentColumnPosition) {
  console.log('ataque bem sucedido na mesma coluna');
  successfulAttack = true;
} else if (queenRowPosition === opponentRowPosition) { // Se a peça do oponente tiver na mesma linha que a rainha, XABLAU
  console.log('ataque bem sucedido na mesma linha');
  successfulAttack = true;
}

// Diagonal inferior esquerda
for (let index = 1; index < 8; index += 1) {
  let queenRow = queenRowPosition - index;
  let queenColumn = queenColumnPosition - index;

  // se a posicao da linha e coluna forem igual a 0, o tabuleiro terminou
  if ((queenRow <= 0) || (queenColumn <= 0)) {
    break;
  }

  if ((queenRow === opponentRowPosition) && (queenColumn === opponentColumnPosition)) {
    console.log('ataque bem sucedido na diagonal inferior esquerda');
    successfulAttack = true;
    break;
  }

}

// Diagonal superior direita
for (let index = 1; index < 8; index += 1) {
  let queenRow = queenRowPosition + index;
  let queenColumn = queenColumnPosition + index;

  // se a posicao da linha e coluna forem igual a 0, o tabuleiro terminou
  if ((queenRow > 8) || (queenColumn > 8)) {
    break;
  }

  if ((queenRow === opponentRowPosition) && (queenColumn === opponentColumnPosition)) {
    console.log('ataque bem sucedido na diagonal superior direita');
    successfulAttack = true;
    break;
  }

}

// Diagonal superior esquerda
for (let index = 1; index < 8; index += 1) {
  let queenRow = queenRowPosition + index;
  let queenColumn = queenColumnPosition - index;

  if ((queenRow > 8) || (queenColumn <= 0)) {
    break;
  }

  if ((queenRow === opponentRowPosition) && (queenColumn === opponentColumnPosition)) {
    console.log('ataque bem sucedido na diagonal superior esquerda');
    successfulAttack = true;
    break;
  }
}

// Diagonal inferior direita
for (let index = 1; index < 8; index += 1) {
  let queenRow = queenRowPosition - index;
  let queenColumn = queenColumnPosition + index;

  if ((queenRow <= 0) || (queenColumn > 8)) {
    break;
  }

  if ((queenRow === opponentRowPosition) && (queenColumn === opponentColumnPosition)) {
    console.log('ataque bem sucedido na diagonal inferior direita');
    successfulAttack = true;
    break;
  }
}

console.log('Ataque bem sucedido?', successfulAttack);