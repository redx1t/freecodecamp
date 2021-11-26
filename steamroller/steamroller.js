// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;

    // https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-steamroller/16079
}

console.log(steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]));