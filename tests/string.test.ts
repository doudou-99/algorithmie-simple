import { expect, test } from '@jest/globals';
import { alternateLowerUpperCase, capitalizeEachWord, countLetterAnalize, countOccurrenceLetter, countVowels, deleteDuplicates, extractInitials, getLengthStringWithoutSpaces, isPalindrome, longestSequence, maskString, salutationPersonnalisee, sentenceEndWithExclamation, toCamelCase, truncate } from '../src/string';


test("length of a string without spaces", () => {
    const text = "Bonjour le monde !";
    const length = getLengthStringWithoutSpaces(text)
    expect(length).toEqual(15);
})


test("length of an empty string without spaces", () => {
    const text = "";
    const length = getLengthStringWithoutSpaces(text)
    expect(length).toEqual(0);
})

test("function salutationPersonnalisee with text", () => {
    const text = "jean-pierre";
    const salutation = salutationPersonnalisee(text)
    expect(salutation).toEqual("Bonjour Jean-Pierre");
})

test("function salutationPersonnalisee with empty text", () => {
    expect(() => salutationPersonnalisee("")).toThrow("The parameter is empty");
})

test("function salutationPersonnalisee with text without -", () => {
    const text = "pierre";
    const salutation = salutationPersonnalisee(text)
    expect(salutation).toEqual("Bonjour Pierre");
})

test("function sentenceEndWithExclamation with text", () => {
    const text = "Je suis très satisfait !";
    const result = sentenceEndWithExclamation(text)
    expect(result).toEqual(true);
})

test("function sentenceEndWithExclamation with text without !", () => {
    const text = "Je suis très satisfait ! ";
    const result = sentenceEndWithExclamation(text)
    expect(result).toEqual(false);
})

test("function sentenceEndWithExclamation with empty text", () => {
    expect(() => sentenceEndWithExclamation("")).toThrow("The parameter is empty");
})

test("function countOccurrenceLetter with text", () => {
    const text = "Je mange une pomme";
    const count = countOccurrenceLetter(text, "e");
    const countText = 4;
    expect(count).toEqual(countText);
})

test("function countOccurrenceLetter with text numbers ", () => {
    const text = "111111";
    const count = countOccurrenceLetter(text, "e");
    expect(count).toEqual(0);
})

test("function countOccurrenceLetter with empty text", () => {
    expect(() => countOccurrenceLetter("", "e")).toThrow("The parameter is empty");
})

test("function countLetterAnalyze with text", () => {
    const text = "Je mange une pomme";
    const count = countLetterAnalize(text, "e");
    const countText = 4;
    expect(count).toEqual(countText);
})

test("function countLetterAnalize with text numbers ", () => {
    const text = "111111";
    const count = countLetterAnalize(text, "a");
    expect(count).toEqual(0);
})

test("function countLetterAnalize with empty text", () => {
    expect(() => countLetterAnalize("", "a")).toThrow("The parameter is empty");
})


test("function toCamelCase with text", () => {
    const sqlColumnName = "user_first_name";    
    const count = toCamelCase(sqlColumnName);
    expect(count).toEqual("userFirstName");
})

test("function toCamelCase with text without '_'", () => {
    const sqlColumnName = "user";    
    const count = toCamelCase(sqlColumnName);
    expect(count).toEqual("user");
})

test("function toCamelCase with empty text", () => {
    expect(() => toCamelCase("")).toThrow("The parameter is empty");
})

test("function countVowels with text", () => {
    const text = "Je mange une pomme";
    const count = countVowels(text);
    const countText = 7;
    expect(count).toEqual(countText);
})

test("function countVowels with empty text", () => {
    expect(() => countVowels("")).toThrow("The parameter is empty");
})

test("function alternateLowerUpperCase with text", () => {
    const text = "Je mange une pomme";
    const resultChange = alternateLowerUpperCase(text);
    const changedText = "jE MANGE UNE POMME";
    expect(resultChange).toEqual(changedText);
})

test("function alternateLowerUpperCase with empty text", () => {
    expect(() => alternateLowerUpperCase("")).toThrow("The parameter is empty");
})

test("function deleteDuplicates with text", () => {
    const messageUtilisateur = "Bonjouuuur !!! J'ai besoiiiin d'aide...."; 
    const messageNettoye = deleteDuplicates(messageUtilisateur);
    const expected = "Bonjour ! J'ai besoin d'aide.";
    expect(messageNettoye).toEqual(expected);
})

test("function deleteDuplicates with empty text", () => {
    expect(() => deleteDuplicates("")).toThrow("The parameter is empty");
})


test("function extractInitials with text with '-", () => {
    const text = "Jean-pierre Dupont"; 
    const initials = extractInitials(text);
    const expected = "JPD";
    expect(initials).toEqual(expected);
})

test("function extractInitials with text without '-", () => {
    const text = "pierre Dupont"; 
    const initials = extractInitials(text);
    const expected = "PD";
    expect(initials).toEqual(expected);
})

test("function extractInitials with empty text", () => {
    expect(() => extractInitials("")).toThrow("The parameter is empty");
})


test("function maskString with text", () => {
    const text = "1234567890123456"; 
    const initials = maskString(text, 4);
    const expected = "3456";
    expect(initials).toEqual(expected);
})

test("function maskString with empty text", () => {
    expect(() => maskString("", 4)).toThrow("The parameter is empty");
})

test("function isPalindrome with text", () => {
    const text = "Eh ! ça va la vache ?";
    const ispalindrome = isPalindrome(text);
    const expected = true;
    expect(ispalindrome).toEqual(expected);
})

test("function isPalindrome with empty text", () => {
    expect(() => isPalindrome("")).toThrow("The parameter is empty");
})

test("function longestSequence with text", () => {
    const text = "aaabbbbbcccc";
    const sequence = longestSequence(text);
    const expected = "bbbbb";
    expect(sequence).toEqual(expected);
})

test("function longestSequence without sequence", () => {
    const text = "aaa";
    const sequence = longestSequence(text);
    const expected = "aaa";
    expect(sequence).toEqual(expected);
})

test("function longestSequence with empty text", () => {
    expect(() => longestSequence("")).toThrow("The parameter is empty");
})

test("function truncate with text", () => {
    const text = "Ceci est une très longue description d'un produit";
    const sequence = truncate(text, 20);
    const expected = "Ceci est une très...";
    expect(sequence).toEqual(expected);
})

test("function truncate with empty text", () => {
    expect(() => truncate("", 5)).toThrow("The parameter is empty");
})

test("function truncate with number less than 4", () => {
    expect(() => truncate("Ceci est ", 3)).toThrow("The number is less than 4");
})

test("function capitalizeEachWord with empty text", () => {
    expect(() => capitalizeEachWord("")).toThrow("The parameter is empty");
})

test("function capitalizeEachWord with text", () => {
    const text = "bienvenue sur notre site web";
    const sequence = capitalizeEachWord(text);
    const expected = "Bienvenue Sur Notre Site Web";
    expect(sequence).toEqual(expected);
})