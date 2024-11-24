function subSequencePattern(array, pattern) {
  let patternPointer = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === pattern[patternPointer]) {
      patternPointer++;
    }
    if (patternPointer === pattern.length) return true;
  }

  // if (patternPointer === pattern.length) return true;
  // else return false;
  return false;
}

let arr = [5, 1, 22, 25, 6, -1, 8, 10];
let pattern = [1, 6, -1, 10];
console.log(
  subSequencePattern(arr, pattern) == true ? "✅: Passed" : "❌: Failed"
); // true

let arr1 = [5, 1, 22, 25, 6, -1, 8, 10];
let pattern1 = [5, 1, 22, 22];
console.log(
  subSequencePattern(arr1, pattern1) == false ? "✅: Passed" : "❌: Failed"
); // false

let arr2 = [5, 6, 7, 8];
let pattern2 = [7, 6];
console.log(
  subSequencePattern(arr2, pattern2) == false ? "✅: Passed" : "❌: Failed"
); // false

let arr3 = [5, 6, 7, 10, 124, 545, 545, 35, 6, -4, 8];
let pattern3 = [7, 545, 545, -4, 8];
console.log(
  subSequencePattern(arr3, pattern3) == true ? "✅: Passed" : "❌: Failed"
); // true

let arr4 = [
  10, 5, 2, 9, 1, 15, 22, 7, 18, 6, 3, 8, 20, 4, 25, 6, 9, 3, 2, 8, 11, 13, 6,
  7, 19, 21, 6, 3, 2, 10, 14, 5, 6, 7, 18, 3, 2, 6, 9, 12, 15, 22, 3, 8, 20, 25,
  1, 5, 2, 7, 18,
];
let pattern4 = [5, 6, 9, 3, 8, 20, 25];
console.log(
  subSequencePattern(arr4, pattern4) == true ? "✅: Passed" : "❌: Failed"
); // true
