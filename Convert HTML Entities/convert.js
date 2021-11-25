// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    const htmlEntitiesEq = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity equivalent
    return str.replace(/([&<>\"'])/g, char => htmlEntitiesEq[char]);

}

//resource https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-convert-html-entities/16007

console.log(convertHTML("Dolce & Gabbana"));