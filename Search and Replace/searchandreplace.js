// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


function myReplace(str, before, after) {
    let arr = str.split(" ");
    //have the string to replace first as lowercase
    after = after.toLowerCase();

    // check if the string is capitalCase, if it is capitalize
    after = startsWithCapital(before) ? capitalizeFirstLetter(after) : after;

    // replace all instances of the said string
    while (arr.indexOf(before) != -1) {
        arr[arr.indexOf(before)] = after;
    }

    // convert array back to string
    return arr.join(" ");
}


//reference https://stackabuse.com/javascript-check-if-first-letter-of-a-string-is-upper-case/
function startsWithCapital(word) {
    return word.charAt(0) === word.charAt(0).toUpperCase()
}

//reference https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


console.log(myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped"));
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us go to the Store", "Store", "mall"));
console.log(myReplace("I think we should look up there", "up", "Down"));