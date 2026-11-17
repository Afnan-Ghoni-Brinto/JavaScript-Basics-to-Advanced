function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(10, 20, 30, 40));
