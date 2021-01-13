const person = {
  name: 'Vinícius',
  lastName: 'Chagas',
  age: 18,
  wearGlasses: true,
  favoriteFoods: ['Pizza', 'Tropeiro', 'Almondega'],

  fullName: function() { // propriedade computada
    return `${this.name} ${this.lastName}`;
  }
}

person.nickname = 'Vini';
person.age = 19;

console.log(person);
console.log(`Olá, ${person.name}`);
console.log(`Seu sobrenome é ${person['lastName']}`);
console.log(`Meu nome completo é: ${person.fullName()}`);


const randomKey = 'age';

console.log(person[randomKey]);

const people = [
  { name: 'Gabriel' },
  { name: 'Carol' },
  { name: 'Gisele' }
]

console.log(people[2]);


// Object.keys -> array<string>
console.log(`As chaves do objeto person são: ${Object.keys(person)}`);

// Object.values -> array
console.log(`Os valores do objeto person são: ${Object.values(person)}`);

// Object.entries
console.table(Object.entries(person));

// Object.assign

let personTwo = { };
personTwo.xablau = 'xablau';

let variable = Object.assign(personTwo, person);

personTwo.name = 'Gabriel';

console.log(variable);

let newObject = Object.assign({ }, person);