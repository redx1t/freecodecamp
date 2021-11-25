function destroyer(arr, ...vals) {
    return arr.filter(element => !vals.includes(element));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));