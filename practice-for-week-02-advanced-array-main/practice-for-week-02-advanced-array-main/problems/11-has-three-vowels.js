/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    // Your code here
    // make const vowels
    let vowels = "AEIOUaeiou";

    // .split the str
    let splitArr = string.split();

    // make var arr to hold vowels
    let vowelsFound = [];

    // .map it
    splitArr.map(str => {
        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i]) && !vowelsFound.includes(str[i])) {
               vowelsFound.push(str[i]);
            }
        }
    } )

    if (vowelsFound.length >= 3) return true;
    return false;
};


    // iterate through each letter
    // if the current letter is contained in vowels, add it to the array
    // if the array is longer than 3, return true

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
