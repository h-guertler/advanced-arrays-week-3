/*

Write a function `maxWithReduce(nums)` that takes in an array of numbers.
The function should return the largest number of the array.

You can assume that the array will not be empty.

Solve this using Array's `reduce()` method.

Examples:

console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3
*/

let maxWithReduce = function(nums) {
    // Your code here
    // set acc to -Inf at end
    // if the number is greater than the acc, acc = number
    return nums.reduce((acc, number) => { if (number > acc) acc = number; return acc;}, -Infinity);
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = maxWithReduce;
} catch (e) {
  module.exports = null;
}
