// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.


function translatePigLatin(str) {
    //check for consonant starts
    let Regex = /^[^aeiou]+/;
    return str.match(Regex) == null ? str.concat("way") : str
        .replace(Regex, "")
        .concat(str.match(Regex))
        .concat("ay");
}

console.log(translatePigLatin("consonant"));