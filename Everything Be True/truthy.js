// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.


function truthCheck(collection, pre) {

    // When the variable has a truthy value the condition is true.
    // https://forum.freecodecamp.org/t/javascript-truthy-value-explained-with-examples/15975

    // set it true by default
    let evals = true;

    // if at any instance there is false, the evals is set to false and fails. If foreach in arrays has Break function, we would introduce it on false

    collection.forEach(object => {
        if ((object[pre] ? true : false) != true) { evals = false; }
        //console.log(evals);
    });

    //return evaluation
    return evals;
}

console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));
// True
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));
// False