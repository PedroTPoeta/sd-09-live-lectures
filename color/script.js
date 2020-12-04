window.onload = function() {

  let heading = document.querySelector('#title-heading');
  heading.innerText = 'Jogo da seleção de Cores 🎉';

  let colorSection = document.querySelector('#color-section');
  
  // addEventListener
  // Parametro 1: String com o tipo do evento
  // Parametro 2: Função que é chamada quando o evento acontece
  colorSection.addEventListener('mouseover', function(event) {
    let selectedColor = document.querySelector('.selected-color');

    if (event.target.className) {
      selectedColor.innerText = event.target.className;
    } else {
      selectedColor.innerText = 'Nenhuma cor selecionada';
    }
  });
}
