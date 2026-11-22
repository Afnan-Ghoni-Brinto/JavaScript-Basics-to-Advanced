function factorial(n) { if (!Number.isInteger(n) || n < 0) return null; let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; } console.log(factorial(5));
