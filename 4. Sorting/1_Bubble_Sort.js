function bubbleSort(array) {
  let swappingCount = 0;
  let arrayLength = array.length;
  for (let index1 = 0; index1 < arrayLength; index1++) {
    for (let index2 = 0; index2 < arrayLength; index2++) {
      if (array[index2] > array[index2 + 1]) {
        let temp = array[index2];
        array[index2] = array[index2 + 1];
        array[index2 + 1] = temp;
        swappingCount++;
      }
      if (index2 == arrayLength && swappingCount != 0) {
        console.log(index1);
        return array;
      }
    }
  }
  return array;
}

console.log("final:", bubbleSort([5, 1, 25, 22, 6, -1, 8, 10]));
console.log("final:", bubbleSort([-1, 1, 5, 6, 8, 10, 22, 25]));
