class Student {
    constructor(name, age) { this.name = name; this.age = age; }
    introduce() { console.log(`I am ${this.name}, age ${this.age}.`); }
}
new Student("Rahim", 20).introduce();
