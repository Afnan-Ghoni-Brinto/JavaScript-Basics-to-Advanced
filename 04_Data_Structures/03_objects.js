const student = {
    name: "Rahim",
    age: 20,
    introduce() { console.log(`I am ${this.name}`); }
};
console.log(student.name, student["age"]);
student.cgpa = 3.85;
student.introduce();
for (const key in student) console.log(key, student[key]);
