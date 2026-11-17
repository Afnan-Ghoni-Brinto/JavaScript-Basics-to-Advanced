const numbers = [1, 2, 3, 4, 5];
console.log(numbers.map(n => n * 2));
console.log(numbers.filter(n => n % 2 === 0));
console.log(numbers.reduce((sum, n) => sum + n, 0));
console.log(numbers.find(n => n > 3));
console.log(numbers.includes(3));
