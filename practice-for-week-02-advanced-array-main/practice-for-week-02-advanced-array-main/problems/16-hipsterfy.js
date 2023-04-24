/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    // Your code here
    // make a const containing all vowels
    const vowels = "AEIOUaeiou";

    // iterate through the word backwards using a for loop
    for (let i = word.length - 1; i >= 0; i--) {
        let currChar = word[i];
       // until a vowel is found
       // when a vowel is found,
       if (vowels.includes(currChar)) {
          // slice the word from index 0 to the vowel
          let firstPart = word.slice(0, i);
          // and from index vowel + 1 to end of word
          let secondPart = word.slice(i + 1);
          // return the first slice plus the second slice
          return firstPart + secondPart;
       }
    }

    // if a vowel wasn't found, return the word as is
    return word;
};

let hipsterfy = function(sentence) {
    // make an array to hold the altered words
    let hipsterWords = [];

    // split the sentence into an array
    let wordArr = sentence.split(" ");

    // forEach word, perform remove last vowel on it
    wordArr.forEach(word => {
        // then push it to the array of words with the last vowel removed
        hipsterWords.push(removeLastVowel(word));
    });

    // join and return the array of altered words
    return hipsterWords.join(" ");
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
