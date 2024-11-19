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

// first method
function same(inputsArray, resultsArray) {
  let startTime = Date.now();
  let endTime;
  const totalInputs = inputsArray.length;
  const totalResults = resultsArray.length;

  if (totalInputs === totalResults) {
    for (let index = 0; index < totalResults; index++) {
      const correctIndex = resultsArray.indexOf(inputsArray[index] ** 2);
      if (correctIndex === -1) {
        endTime = Date.now();
        return { output: false, runTime: `${endTime - startTime}ms` };
      }
      // console.log(resultsArray);
      resultsArray.splice(correctIndex, 1);
    }
    endTime = Date.now();
    return { output: true, runTime: `${endTime - startTime}ms` };
  }
  endTime = Date.now();
  return { output: false, runTime: `${endTime - startTime}ms` };
}

// Tests
console.log("\nsame(), Normal nested looping testing");
console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
console.log(same([1, 2, 2], [4, 4, 1])); // true

console.log(
  "\nAbove is O(n^2). Now, optimize to O(n) or lower than previous Big 'O'"
);

// second: frequency counter method
function optimizeOfSameFunc(inputsArray, resultsArray) {
  let startTime = Date.now();
  let endTime;
  if (inputsArray.length !== resultsArray?.length) {
    endTime = Date.now();
    return { output: false, runTime: `${endTime - startTime}ms` };
  }

  // counter
  let freqCounterInputs = {};
  let freqCounterResults = {};
  for (let value of inputsArray) {
    freqCounterInputs[value] = (freqCounterInputs[value] || 0) + 1;
  }
  for (let value of resultsArray) {
    freqCounterResults[value] = (freqCounterResults[value] || 0) + 1;
  }
  // evaluation
  for (let key in freqCounterInputs) {
    let resultsKey = key ** 2;
    if (
      !(
        resultsKey in freqCounterResults &&
        freqCounterResults[resultsKey] === freqCounterInputs[key]
      )
    ) {
      endTime = Date.now();
      return { output: false, runTime: `${endTime - startTime}ms` };
    }
    endTime = Date.now();
    return { output: true, runTime: `${endTime - startTime}ms` };
  }
}

// Tests
console.log("\noptimizeOfSameFunc(): frequency counter alogrithm testing");
console.log(optimizeOfSameFunc([1, 2, 3], [4, 1, 9])); // true
console.log(optimizeOfSameFunc([1, 2, 3], [1, 9])); // false
console.log(optimizeOfSameFunc([1, 2, 1], [4, 4, 1])); // false
console.log(optimizeOfSameFunc([1, 2, 2], [4, 4, 1])); // true

// TEST-CASE
function generateTestArrays(size) {
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < size; i++) {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    arr1.push(randomValue);
    arr2.push(randomValue * randomValue);
  }

  // Shuffle arr2 to place squares in random positions
  arr2.sort(() => Math.random() - 0.5);

  return { arr1, arr2 };
}

// Generate large random test arrays
console.log("\n------ TEST CASE : n = 10000 -------");
const testArrays1 = generateTestArrays(10000);
console.log(
  "optimizeOfSameFunc: ",
  optimizeOfSameFunc(testArrays1.arr1, testArrays1.arr2)
); //: true
console.log("same: ", same(testArrays1.arr1, testArrays1.arr2)); //: true

console.log("\n------ TEST CASE : n = 100000 -------");
const testArrays2 = generateTestArrays(100000);
console.log(
  "optimizeOfSameFunc: ",
  optimizeOfSameFunc(testArrays2.arr1, testArrays2.arr2)
); //: true
console.log("same: ", same(testArrays2.arr1, testArrays2.arr2)); //: true

console.log("\n------ TEST CASE : n = 200000 -------");
const testArrays3 = generateTestArrays(200000);
console.log(
  "optimizeOfSameFunc: ",
  optimizeOfSameFunc(testArrays3.arr1, testArrays3.arr2)
); //: true
console.log("same: ", same(testArrays3.arr1, testArrays3.arr2)); //: true

console.log(
  "\n One test reveals: \n",
  `
  ------ TEST CASE : n = 10000 -------
optimizeOfSameFunc:  { output: true, runTime: '2ms' }
same:  { output: true, runTime: '23ms' }

------ TEST CASE : n = 100000 -------
optimizeOfSameFunc:  { output: true, runTime: '10ms' }
same:  { output: true, runTime: '2158ms' }

------ TEST CASE : n = 900000 -------
optimizeOfSameFunc:  { output: true, runTime: '64ms' }
same:  { output: true, runTime: '187750ms' }
  `
);
