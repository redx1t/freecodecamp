// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.


function dropElements(arr, func) {
    //check if the index of element can be found, then slice the array from that index, if not return empty by slicing the whole array
    return arr.slice(arr.findIndex((element) => func(element)) == -1 ? arr.length : arr.findIndex((element) => func(element)));
}

console.log(dropElements([0, 1, 0, 1], function(n) { return n === 1; }));

// answer is supposed to be [ 1, 0, 1 ]

console.log(dropElements([1, 2, 3, 4], function(n) { return n >= 3; }));

// answer is supposed to be [ 3, 4 ]

console.log(dropElements([1, 2, 3, 4], function(n) { return n > 5; }));
// should return [].