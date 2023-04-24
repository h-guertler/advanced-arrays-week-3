/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

let repeatingTranslate = function(sentence) {

    // make a string to hold the solution
    let translatedStr = "";
    // make a const including all vowels
    let vowels = "AEIOUaeiou";
    // make an arr to hold translated words
    let translatedWords = [];
    // .split sentence into an array
    let splitSent = sentence.split(" ");

    // using forEach, iterate through the array according to the following else ifs
    splitSent.forEach(word => {
        // if a word is less than 3 characters, add it to the solution arr
        if (word.length < 3) translatedWords.push(word);

        // else if the last index in the word is a vowel, add the word plus the word to the solution arr
        else if (vowels.includes(word[word.length - 1])) translatedWords.push(word + word);

        // else, perform translateWord on it and add it to the solution arr
        else translatedWords.push(translateWord(word));
    });
    // .join and return the array of translated words
    return translatedWords.join(" ");
};


let translateWord = function(word) {
    // make const containing all vowels
    const vowels = "AEIOUaeiou";

    // iterate backwards through the word using a for loop until a vowel is found
    for (let i = word.length - 1; i >= 0; i--) {
        // when a vowel is found
        if (vowels.includes(word[i])) {
            // slice the word from the index of the vowel to the end of the world
            let newEnd = word.slice(i);
            // return the word plus this slice
            return word + newEnd;
        }
    }
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}
