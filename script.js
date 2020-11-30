// -> { } chave
// -> [ ] colchete
// -> ( ) parenteses
// FUN FACT: EM ALGUMAS LINGUAGENS, O OBJETO QUE CONHECEMOS EM JS É CHAMADO DE DICIONARIO.

const student = {
  name: 'Carol',
  lastName: 'Bitencourt'
};

// Vamos adicionar uma nova entrada no objeto
student.nickname = 'Carol';
student['age'] = 20;
student.favoriteMovies = ['Harry Potter', 'O Senhor dos Aneis'];
student.foundationProjectGrades = {
  firstProject: 100,
  secondProjeto: 100
}

student.name = 'Karol';

console.log(student);