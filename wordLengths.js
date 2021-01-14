const assert = require('assert');

const wordLengths = (array) => {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    const word = array[index];
    newArray.push(word.length);
  }

  return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');

const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

// entrada -> ['sun', 'potato', 'roundabout', 'pizza']
// saida   -> [3,     6,        10,            5]