export function getLengthStringWithoutSpaces(phrase: string): number {
    if (!phrase) {
        return phrase.length;
    }
    return getStringWithoutSpaces(phrase).length;
}

export function getStringWithoutSpaces(sentence: string) {
    return sentence.split(" ").join("");
}

export function salutationPersonnalisee(prenom: string): string {
    let prenomModifie = '';
    ifStringEmpty(prenom);
    if (prenom.includes("-")) {
        prenomModifie = prenom.split("-").map((caractere) => {
            return capitalizeString(caractere);
        }).join("-");
    } else {
        prenomModifie = capitalizeString(prenom);
    }
    return `Bonjour ${prenomModifie}`;
}

export function capitalizeString(word: string) {
    return word.substring(0,1).toUpperCase()+word.substring(1)
}

export function sentenceEndWithExclamation(sentence: string): boolean {
    ifStringEmpty(sentence);
    return sentence.endsWith("!");
}

export function ifStringEmpty(string: string) {
    if (!string) {
        throw new Error(`The parameter is empty`);
    }
}

export function countOccurrenceLetter(words: string, lettre: string): number {
    ifStringEmpty(words);
    const stringWithoutSpaces = getStringWithoutSpaces(words)
    const letterCount = countCharacter(stringWithoutSpaces, /[A-Za-z]/)[lettre];
    if (!letterCount) return 0;
    return letterCount;
}

export function countCharacter(sentence: string, regex: RegExp | string): Record<string, number> {
    const recordLetter: Record<string, number> = {}
    for (const character of sentence) {
        if (RegExp(regex).exec(character) !== null) {
            if (!Object.keys(recordLetter).includes(character)) {
                recordLetter[character] = 1
            } else {
                recordLetter[character] += 1
            }
        }
    }
    return recordLetter;
} 


export function countLetterAnalize(words: string, letter: string): number {
   return countOccurrenceLetter(words.toLowerCase(), letter);
}

export function toCamelCase(word: string): string {
    ifStringEmpty(word);
    if (word.includes("_")) {
        return word.split("_").map((part, index) => {
            if (index == 0) {
                return part
            } else {
                return capitalizeString(part)
            }
        }).join("");
    }
    return word;
}

export function countVowels(words: string) {
    ifStringEmpty(words);
    return Object.values(countCharacter(words, /[aeiou]/)).reduce((a, b) => a+b, 0);
}

export function alternateLowerUpperCase(words: string) {
    ifStringEmpty(words);
    return words.split("").map(character => {
        if (character !== character.toLowerCase()) {
            return character.toLowerCase();
        } else {
            return character.toUpperCase();
        }
    }).join("");
}

export function deleteDuplicates(sentence: string): string {
    ifStringEmpty(sentence);
    return sentence.split("").reduce((previous, current) => {
        if (!previous.endsWith(current)) {
            return previous+current;
        } else {
            return previous;
        }
    }, "");
}

export function extractInitials(name: string): string {
    ifStringEmpty(name);
    if (name.includes(" ")) {
        let splitSpace = name.split(" ")
        return splitSpace.map(partName => {
            if (partName.includes("-")) {
                return capitalizeString(partName.split("-")[0]).substring(0,1)+capitalizeString(partName.split("-")[1]).substring(0,1)
            } else {
                return capitalizeString(partName).substring(0,1)   
            }
        }).join("");
    }
    return capitalizeString(name).substring(0,1);
}

export function maskString(string: string, mask: number): string {
    ifStringEmpty(string);
    return string.substring(string.length-mask);
}


export function isPalindrome(string: string): boolean {
    ifStringEmpty(string);
    const splitCharacters = string.split("").filter((value) => RegExp(/[A-Za-z]/).exec(value.toLowerCase()) !== null);
    const reversedSplit = splitCharacters.reverse();
    return reversedSplit.join("") === splitCharacters.join("");
}

export function longestSequence(sequence: string): string {
    ifStringEmpty(sequence);
    const sequences = sequence.match(/(.)\1*/g) || [];
    let seq = '';    
    if (sequences !== null && sequences.length !== 0) {
        const lengthSequences = sequences.map(seq => seq.length);
        const longSequence = sequences.find((sequence) => sequence.length === Math.max(...lengthSequences));
        if (!longSequence) return seq;
        seq = longSequence;
        return seq;
    }
    return sequence;
}

export function truncate(string: string, trunc: number): string {
    ifStringEmpty(string);
    if (trunc < 4) throw new Error("The number is less than 4");
    return string.substring(0, trunc-3)+"...";
}

export function capitalizeEachWord(string: string): string {
    ifStringEmpty(string);
    const splitWords = string.split(" ");
    return splitWords.map(word => {
        if (word.length > 1 && word.match(/^[A-Za-z]/g)) {
            return capitalizeString(word);
        }
        return word;
    }).join(" ");
}