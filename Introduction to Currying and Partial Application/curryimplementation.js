function add(x) {
    // Only change code below this line

    return (y) => { return (z) => { return x + y + z; } };
    // Only change code above this line
}
// example to test the function
console.log(add(10)(20)(30));