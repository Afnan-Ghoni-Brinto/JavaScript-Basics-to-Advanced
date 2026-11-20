// The array must be sorted.
function binarySearch(array, target) {
    let low = 0, high = array.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (array[mid] === target) return mid;
        if (array[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
console.log(binarySearch([10, 20, 30, 40, 50], 40));
