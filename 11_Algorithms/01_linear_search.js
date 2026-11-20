function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) if (array[i] === target) return i;
    return -1;
}
console.log(linearSearch([10, 20, 30, 40], 30));
