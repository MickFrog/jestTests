function capitalize(word) {
    let fLetter = word[0].toString();
    fLetter = fLetter.toUpperCase();

    return fLetter.concat(word.slice(1));
}

module.exports = capitalize;