function add(x) {
    return (y) => { return (z) => { return x + y + z; } };
}
// example to test the function
console.log(add(10)(20)(30));