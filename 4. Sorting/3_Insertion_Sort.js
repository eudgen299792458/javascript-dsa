function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > currentValue) {
        array[j + 1] = array[j];
        array[j] = currentValue;
      }
    }
  }
  return array;
}

console.log(insertionSort([8, 1, 4, 5, 2, 7, -1]));
