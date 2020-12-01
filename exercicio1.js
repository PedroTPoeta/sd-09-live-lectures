let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// 1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
// Valor esperado no console: Bem-vinda, Margarida
console.log('Bem-vinda, ' + info.personagem);
console.log('Bem-vinda,', info['personagem']);

// 2 . Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
info.recorrente = 'Sim';
// info['recorrente'] = 'Sim';
console.log(info);

// 3. Faça um for/in que mostre todas as chaves do objeto.
for (let key in info) {
  console.log(key);
}

// 4. Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for (let key in info) {
  console.log(info[key]);
}

// 5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
}

// SAIDA ESPERADA
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!


for (let key in info2) {
  // SE A CHAVE RECORRENTES DO OBJETO 1 FOR SIM
  // E A CHAVE RECORRENTES DO OBJETO 2 TAMBEM FOR SIM
  // ENTAO O LOG É "AMBOS RECORRENTES"

  if (info[key] === 'Sim' && info2[key] === 'Sim' && key === 'recorrente') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}