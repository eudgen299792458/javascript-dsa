function merge(arr1, arr2) {
  let index1 = 0;
  let index2 = 0;
  let length1 = arr1.length;
  let length2 = arr2.length;

  let result = [];
  while (index1 < length1 && index2 < length2) {
    if (arr2[index2] > arr1[index1]) {
      result.push(arr1[index1]);
      index1++;
    } else {
      result.push(arr2[index2]);
      index2++;
    }
  }

  while (index1 < length1) {
    result.push(arr1[index1]);
    index1++;
  }

  while (index2 < length2) {
    result.push(arr2[index2]);
    index2++;
  }

  return result;
}

function mergeDivider(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = mergeDivider(array.slice(0, mid));
  let right = mergeDivider(array.slice(mid));
  return merge(left, right);
}

// console.log("sorted: ", merge([-1, 22, 25], [1, 2, 8, 10]));

console.log(
  "divide and merge: ",
  mergeDivider([-1, 3, 22, 25, 9, 2, 8, 10, 99])
);
