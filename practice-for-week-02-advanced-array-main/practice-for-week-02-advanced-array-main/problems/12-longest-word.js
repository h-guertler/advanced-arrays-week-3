/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/


// Your code here
const longestWord = function(sentence) {
    // if the string is empty, return the string
    if (sentence === "") return sentence;

    // make a var to represent the longest word so far, initialized to an empty string
    let longWord = "";
    // make a var to represent the longest word length so far, initialized to 0
    let longWordLength = 0;

    // .split the str into an array on spaces
    let wordArr = sentence.split(" ");

    // iterate through the array using .reduce
    // set up this function with acc, word.
    //  acc initialized to 0
    wordArr.reduce((acc, word) => {
      // if the current word's length is longer than the longest word so far,
      if (word.length > longWordLength) {

        //  set the current word to be the longest word
        longWord = word;
        //  set the longest word length to the length of the current word
        longWordLength = word.length;
      }
      return longWord;
    }, 0)
    return longWord;
  }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
