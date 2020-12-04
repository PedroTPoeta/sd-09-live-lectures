window.onload = function() {

  let button = document.querySelector('#start-race-btn');
  let car1 = document.querySelector('.car1');
  let car2 = document.querySelector('.car2');

  car1.style.marginLeft = '0px';
  car2.style.marginLeft = '0px';

  button.addEventListener('click', function() {
    let randomCar1 = Math.random() * 100;
    let randomCar2 = Math.random() * 100;
    
    car1.style.marginLeft = parseInt(car1.style.marginLeft) + randomCar1 + 'px';
    car2.style.marginLeft = parseInt(car2.style.marginLeft) + randomCar2 + 'px';

    // se o carro 1 for o primeiro a chegar ao final da tela, ele ganhou
    if (parseInt(car1.style.marginLeft) > window.innerWidth) {
      alert('carro 1 ganhou');
      reset(car1, car2);
    }

    // se o carro 2 for o primeiro a chegar ao final da tela, ele ganhou
    if (parseInt(car2.style.marginLeft) > window.innerWidth) {
      alert('carro 2 ganhou!');
      reset(car1, car2);
    }
  });

}

function reset(car1, car2) {
  car1.style.marginLeft = '0px';
  car2.style.marginLeft = '0px';
}