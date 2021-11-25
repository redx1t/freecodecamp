function sumAll(arr) {
    let sum = 0;
    //console.log(greater);
    for (let x = (arr[0] > arr[1] ? arr[1] : arr[0]); x <= (arr[0] > arr[1] ? arr[0] : arr[1]); x++) {
        sum += x;
    };
    return sum;
}

console.log(sumAll([1, 4]));