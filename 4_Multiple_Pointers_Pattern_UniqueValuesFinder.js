function simpleCountUniqeValuesFunc(givenArray) {
  givenArray = givenArray.sort((a, b) => a - b);
  let count = 0;
  for (let index = 1; index < givenArray.length + 1; index++) {
    if (givenArray[index - 1] != givenArray[index]) {
      count++;
    }
  }
  return count;
}

console.log(
  " --------- simpleCountUniqeValuesFunc : Testing on sorted data---------"
);
console.log(
  simpleCountUniqeValuesFunc([
    1, 1, 1, 1, 1, 10, 3, 4, 4, 5, 5, 5, 5, 5, 2, 99, 9990, 3, 425, 4, 6, 2, 2,
    2, 2, 5, 5, 6, 7, 7, 8,
  ])
);
console.log(
  simpleCountUniqeValuesFunc([
    1, 1, 1, 1, 1, 10, 3, 4, 4, 5, 5, 5, 5, 5, 2, 2, 2, 2, 5, 5, 6, 7, 7, 8, 1,
    1, 1, 1, 1, 10, 3, 4, 4, 5, 5, 5, 5, 5, 2, 99, 9990, 3, 425, 4, 6, 2, 2, 2,
    2, 5, 5, 6, 7, 7, 8,
  ])
);

// for any order of data array, using frequency counter method
function countUniqueValuesByFrequencyCounter(givenArray) {
  let freqCountGivenArray = {};
  for (let value of givenArray) {
    freqCountGivenArray[value] = (freqCountGivenArray[value] || 0) + 1;
  }
  // console.log(freqCountGivenArray);
  return Object.keys(freqCountGivenArray).length;
}
console.log(
  " --------- countUniqueValuesByFrequencyCounter : Testing ---------"
);
console.log(
  countUniqueValuesByFrequencyCounter([
    1, 1, 1, 1, 1, 10, 3, 4, 4, 5, 5, 5, 5, 5, 2, 99, 9990, 3, 425, 4, 6, 2, 2,
    2, 2, 5, 5, 6, 7, 7, 8,
  ])
);
console.log(
  countUniqueValuesByFrequencyCounter([
    1, 1, 1, 1, 1, 10, 3, 4, 4, 5, 5, 5, 5, 5, 2, 2, 2, 2, 5, 5, 6, 7, 7, 8, 1,
    1, 1, 1, 1, 10, 3, 4, 4, 5, 5, 5, 5, 5, 2, 99, 9990, 3, 425, 4, 6, 2, 2, 2,
    2, 5, 5, 6, 7, 7, 8,
  ])
);

// for sorted data: Multiple pointers method
function countUniqueValuesByMultiplePointer(givenArray) {
  givenArray = givenArray.sort((a, b) => a - b);
  let pointer1 = 0;
  let pointer2 = 1;

  while (pointer2 != givenArray.length) {
    if (givenArray[pointer1] == givenArray[pointer2]) {
      pointer2++;
    } else {
      pointer1++;
      givenArray[pointer1] = givenArray[pointer2];
      pointer2++;
    }
  }
  // console.log(givenArray.slice(0, pointer1 + 1));
  return pointer1 + 1;
}
console.log(
  " --------- countUniqueValuesByMultiplePointer : Testing : sorted array---------"
);

console.log(
  countUniqueValuesByMultiplePointer([
    1, 1, 1, 1, 1, 10, 3, 4, 4, 5, 5, 5, 5, 5, 2, 99, 9990, 3, 425, 4, 6, 2, 2,
    2, 2, 5, 5, 6, 7, 7, 8,
  ])
);
console.log(
  countUniqueValuesByMultiplePointer([
    1, 1, 1, 1, 1, 10, 3, 4, 4, 5, 5, 5, 5, 5, 2, 2, 2, 2, 5, 5, 6, 7, 7, 8, 1,
    1, 1, 1, 1, 10, 3, 4, 4, 5, 5, 5, 5, 5, 2, 99, 9990, 3, 425, 4, 6, 2, 2, 2,
    2, 5, 5, 6, 7, 7, 8,
  ])
);
