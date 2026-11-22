function fibonacci(count) { const out = []; let a = 0, b = 1; for (let i = 0; i < count; i++) { out.push(a); [a, b] = [b, a + b]; } return out; } console.log(fibonacci(10));
