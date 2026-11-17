const values = new Set([1, 2, 2, 3]);
values.add(4);
values.delete(1);
console.log(values, values.has(3), values.size);
