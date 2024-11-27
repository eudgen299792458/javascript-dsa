function bubbleSort(array) {
  let swappingCount = 0;
  let iterations = 0;
  let arrayLength = array.length;

  for (let index1 = 0; index1 < arrayLength; index1++) {
    for (let index2 = 0; index2 < arrayLength; index2++) {
      iterations++;

      if (array[index2] > array[index2 + 1]) {
        let temp = array[index2];
        array[index2] = array[index2 + 1];
        array[index2 + 1] = temp;
        swappingCount++;
      }

      if (index2 == arrayLength - 1 && swappingCount != 0) {
        console.log(
          "swappingCount, iterations and array :",
          swappingCount,
          iterations,
          array
        );
        console.log(index1);
        return array;
      }
    }
    console.log("swappingCount: ", swappingCount);
    swappingCount = 0;
  }
  console.log("iterations :", iterations);
  return array;
}

console.log("random data test:", bubbleSort([5, 1, 25, 22, 6, -1, 8, 10]));
console.log("test with sorted data:", bubbleSort([-1, 1, 5, 6, 8, 10, 22, 25]));
