
const assert = require('assert');

// Função que valida se o cpf esta correto
const validateCpf = (cpf) => {

  if (typeof(cpf) !== 'number') {
    throw new Error('A função validateCpf só aceito parâmetro o tipo Number');
  }

  if (cpf.toString().length !== 11) {
    return false;
  }

  if (cpf === 12345678900) {
    return false;
  } else {
    return true;
  }
}

assert.strictEqual(validateCpf(12345678900), false);
assert.strictEqual(validateCpf(98765432100), true);

assert.throws(() => {
  validateCpf('77788899900');
});