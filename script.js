let students = [
  {id: 0, name: 'Angela Dugay', program: 'BS Information Technology'},
  {id: 1, name: 'Veronica Lasheras', program: 'BS Information Technology'},
  {id: 2, name: 'Wilmarc Delos Reyes', program: 'BS Information Technology'},
  {id: 3, name: 'Arabella Grace Salazar', program: 'BS Information Technology'},
  {id: 4, name: 'Sophia Pola Garcia', program: 'BS Information Technology'},
  {id: 5, name: 'Nina Bayungan', program: 'BS Information Technology'}
];

// function is a blockbox
const createStudent = (name, program) =>{
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const button = document.createElement('button');
  
  h2.innerHTML = name;
  p.innerHTML = program;
  button.innerHTML = "Delete";
  
  article.append(h2);
  article.append(p);
  article.append(button);
  
  article.classList.add("list-item")
  
  return article;
}

const studentList = students.map((s) =>{
  return createStudent(s.name, s.program);
});

const listContainer = document.querySelector("#listContainer");
studentList.forEach((s) => {
  listContainer.append(s);
});

// console.log(studentList);
// console.log(h2);
// console.log(p);
// console.log(button);
// console.log(article);
