function subSequencePattern(array, pattern) {
  let patternPointer = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === pattern[patternPointer]) {
      patternPointer++;
    }
  }
  if (patternPointer === pattern.length) return true;
  else return false;
}

let arr = [5, 1, 22, 25, 6, -1, 8, 10];
let pattern = [1, 6, -1, 10];
console.log(subSequencePattern(arr, pattern)); // true

let arr1 = [5, 1, 22, 25, 6, -1, 8, 10];
let pattern1 = [5, 1, 22, 22];
console.log(subSequencePattern(arr1, pattern1)); // false

let arr2 = [5, 6, 7, 8];
let pattern2 = [7, 6];
console.log(subSequencePattern(arr2, pattern2)); // false

let arr3 = [5, 6, 7, 10, 124, 545, 545, 35, 6, -4, 8];
let pattern3 = [7, 545, 545, -4, 8];
console.log(subSequencePattern(arr3, pattern3)); // true
