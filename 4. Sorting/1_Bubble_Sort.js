function bubbleSort(array) {
  for (let index1 = 0; index1 < array.length; index1++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if (array[index2] > array[index2 + 1]) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
      }
      // console.log(array);
    }
  }
  return array;
}

console.log("final:", bubbleSort([5, 1, 22, 25, 6, -1, 8, 10]));
