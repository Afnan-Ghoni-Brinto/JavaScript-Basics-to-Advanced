const animal = { eat() { console.log("Eating..."); } };
const dog = Object.create(animal);
dog.bark = () => console.log("Barking...");
dog.eat();
dog.bark();
