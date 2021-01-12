const button = document.querySelector('button');

button.addEventListener('click', event => {
  alert(target.innerText);
});


function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 6));

const sum2 = (num1, num2) => {
  return num1 + num2
};

console.log(sum2(1, 7));


const greetings = name => {
  if (name === 'oliva') {
    console.log('oi');
  } else {
    console.log('Olá, meu(minha) querido(a) ' + name);
  }
}

greetings('Lenilsom');


const greetings = () => {
  console.log('ola!');
}