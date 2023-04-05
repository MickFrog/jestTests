function reverseString(word) {
    let wordArr = word.split('');

    let revWord = '';
    for (let i = wordArr.length-1; i > -1; i--) {
        revWord += wordArr[i];
    }

    return revWord;
}

module.exports = reverseString;