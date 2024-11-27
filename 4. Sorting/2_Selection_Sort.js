function selectionSort(array) {
  const arrayLength = array.length;

  for (let sortIndex = 0; sortIndex < arrayLength - 1; sortIndex++) {
    // Assume the first unsorted element is the minimum
    let minIndex = sortIndex;

    // Find the index of the minimum value in the unsorted portion
    for (let index2 = sortIndex + 1; index2 < arrayLength; index2++) {
      if (array[index2] < array[minIndex]) {
        minIndex = index2;
      }
    }

    // Swap the found minimum element with the first unsorted element
    if (minIndex !== sortIndex) {
      let temp = array[sortIndex];
      array[sortIndex] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}

console.log("final:", selectionSort([5, 1, 22, 25, 6, -1, 8, 10]));
