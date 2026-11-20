function bubbleSort(array) {
    const result = [...array];
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }
    return result;
}
console.log(bubbleSort([5, 2, 4, 1, 3]));
