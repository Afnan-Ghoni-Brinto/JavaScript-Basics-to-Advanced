const student = { name: "Rahim", age: 20 };
localStorage.setItem("student", JSON.stringify(student));
const saved = JSON.parse(localStorage.getItem("student"));
console.log(saved.name);
