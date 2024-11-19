/**
 * FREQUENCY COUNTER PATTER
 **Question:**

Write a function called `same` that accepts two arrays. The function should return `true` 
if every value in the first array has a corresponding value squared in the second array,
and the frequency of these values must be the same. 
 
In other words, the second array should contain the squares of 
all values from the first array with matching frequency counts.

For example:
-   same([1, 2, 3], [4, 1, 9]) should return true 
-   same([1, 2, 3], [1, 9]) should return false 
-   same([1, 2, 1], [4, 4, 1]) should return false
-   same([1, 3], [4, 1, 9]) should return false

Constraints:
- You can assume that all elements in the arrays are non-negative integers.
- Can be any order

*/

function same(inputsArray, resultsArray) {
  const totalInputs = inputsArray.length;
  const totalResults = resultsArray.length;

  if (totalInputs === totalResults) {
    for (let index = 0; index < totalResults; index++) {
      const correctIndex = resultsArray.indexOf(inputsArray[index] ** 2);
      if (correctIndex === -1) {
        return false;
      }
      // console.log(resultsArray);
      resultsArray.splice(correctIndex, 1);
    }
    return true;
  }
  return false;
}

// Tests
console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
console.log(same([1, 2, 2], [4, 4, 1])); // true

console.log(
  "\nAbove is O(n^2). Now, optimize to O(n) or lower than previous Big 'O' \n"
);

// second: frequency counter method
