function binarySearch(data, value) {
  let left = 0;
  let right = data.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    if (data[middle] === value) {
      return true;
    } else if (value < data[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return false;
}

let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target1 = 7; // Element present in the array
console.log(binarySearch(arr1, target1) ? "✅: Passed" : "❌: Failed"); // 7 is at index 3

let arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target2 = 6; // Element not in the array
console.log(binarySearch(arr2, target2) == false ? "✅: Passed" : "❌: Failed"); // Should return -1 (element not found)

let arr8 = Array.from({ length: 1000000 }, (_, i) => i + 1);
let target8 = 500000; // Element in the middle
console.log(binarySearch(arr8, target8) ? "✅: Passed" : "❌: Failed"); // Should return 499999 (middle of the array)

let arr12 = [1, 3, 5, 7, 9, 11];
let target12 = 5; // Element in the middle
console.log(binarySearch(arr12, target12) ? "✅: Passed" : "❌: Failed"); // Should return 2 (middle element)
