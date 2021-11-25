// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    let currentCharacterCode = str.charCodeAt(0);
    let missing = undefined;

    str.split("").forEach(letter => {
        if (letter.charCodeAt(0) === currentCharacterCode) {
            currentCharacterCode++;
        } else {
            missing = String.fromCharCode(currentCharacterCode);
        }
    });

    return missing;
}

console.log(fearNotLetter("abce"));