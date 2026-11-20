function selectionSort(array) {
    const result = [...array];
    for (let i = 0; i < result.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < result.length; j++) if (result[j] < result[min]) min = j;
        [result[i], result[min]] = [result[min], result[i]];
    }
    return result;
}
console.log(selectionSort([64, 25, 12, 22, 11]));
