/*
  Bora praticar e rever tudo o que foi ensinado na aula? **💜**

  Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

    - nome;
    - nota da primeira prova;
    - nota da segunda prova.

  Depois de criada a lista:

  - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
  - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

const students = [
  { name: 'John',
    noteOne: 7.5,
    noteTwo: 6.5
  }, 
  { name: 'Gabriel',
    noteOne: 4.7,
    noteTwo: 5.2
  }, 
  { name: 'Marisa',
    noteOne: 8,
    noteTwo: 6.5  
  }, 
  { name: 'Ava',
    noteOne: 7.5,
    noteTwo: 3
  }
];

const average = (note1, note2) => {
  return ` 
    ${Number(note1 + note2)/2}
  `
}

for (let student of students) {
  let averagePass = Number(average(student.noteOne, student.noteTwo)).toFixed(2)
  if (averagePass >= 7) {
   /* alert(`A media do aluno(a) ${student.name} é: ${averagePass}
Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
    `)*/
    alert("A media do aluno(a)" + student.name + "é:" + averagePass +"\n" +
    "Parabéns,"+ student.name +" Você foi aprovado(a) no concurso!")
  } else {
    /*alert(`A media do aluno(a) ${student.name} é: ${averagePass}
Não foi dessa vez, ${student.name}! Tente novamente.
    `)*/
    alert("A media do aluno(a)" + student.name + "é:" + averagePass +"\n" +
    "Não foi dessa vez,"+ student.name +"! Tente novamente.")
  }
}
