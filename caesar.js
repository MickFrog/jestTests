const caesarCipher = {
    encrypt: (word, shiftSize=0) => {
        if (shiftSize < 1 || shiftSize > 25) return word;
    
        let cipher = ''; 
    
        for(let i = 0; i < word.length; i++) {
            let currLetterCode = word.charCodeAt(i);
    
            if (currLetterCode > 96 && currLetterCode < 123) { // if this is a lowercase
                currLetterCode += shiftSize;
    
                if (currLetterCode > 122) {
                    currLetterCode = (currLetterCode % 122) + 96;
                }
                cipher += String.fromCharCode(currLetterCode);
                continue;
            }
    
            if (currLetterCode > 64 && currLetterCode < 91) { // if this is an uppercase
                currLetterCode += shiftSize;
    
                if (currLetterCode > 90) {
                    currLetterCode = (currLetterCode % 90) + 64;
                }
                cipher += String.fromCharCode(currLetterCode);
                continue;
            }
    
            //for the case of other characters
            cipher += String.fromCharCode(currLetterCode);
        }
    
        return cipher
    }, 

    decrypt: (word, shiftSize=0) => {
        if (shiftSize < 1 || shiftSize > 25) return word;
        
        let decipher = '';

        for (let i = 0; i < word.length; i++) {
            let currLetterCode = word.charCodeAt(i);

            if (currLetterCode > 96 && currLetterCode < 123) { // if this is a lowercase
                currLetterCode -= shiftSize;
    
                if (currLetterCode < 97) {
                    currLetterCode = 123 - (97 - currLetterCode);
                }
                decipher += String.fromCharCode(currLetterCode);
                continue;
            }

            if (currLetterCode > 64 && currLetterCode < 91) { // if this is an uppercase
                currLetterCode -= shiftSize;
    
                if (currLetterCode < 65) {
                    currLetterCode = 90 - (65 - currLetterCode);
                }
                decipher += String.fromCharCode(currLetterCode);
                continue;
            }
    
            //for the case of other characters
            decipher += String.fromCharCode(currLetterCode);
        }

        return decipher;
    }
}

module.exports = caesarCipher;
