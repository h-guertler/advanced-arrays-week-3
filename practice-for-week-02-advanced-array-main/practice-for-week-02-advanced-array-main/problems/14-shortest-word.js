/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

let shortestWord = function(sentence) {
  // Your code here
  // set a variable to represent the length of the shortest word so far, infinity
  let shortWordLength = Infinity;

  // set a variable to represent the shortest word so far
  let shortestWord = "";

  // split sentence into an array
  let wordArr = sentence.split(" ");

  // use reduce to iterate through the array
  wordArr.reduce((acc, word) => {
  // if the current word's length is less than or equal to the shortest word so far
    if (word.length <= shortWordLength) {
      // the length of the shortest word becomes the length of the current word
      shortWordLength = word.length;
      // the shortest word so far becomes the current word
      shortWord = word;
    }
  // return the shortest word
    return shortWord;
  }, Infinity);
  // outside reduce, return the shortest word
  return shortWord;
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
