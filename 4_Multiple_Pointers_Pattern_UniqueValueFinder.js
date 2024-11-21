// for any order of data array, using frequency counter method
function countUniqueValues(givenArray) {
  let freqCountGivenArray = {};
  for (let value of givenArray) {
    freqCountGivenArray[value] = (freqCountGivenArray[value] || 0) + 1;
  }
  //   console.log(freqCountGivenArray);
  return Object.keys(freqCountGivenArray).length;
}

console.log(
  countUniqueValues([
    1, 1, 1, 1, 1, 10, 3, 4, 4, 5, 5, 5, 5, 5, 2, 2, 2, 2, 5, 5, 6, 7, 7, 8,
  ])
);

// for sorted data using Multiple pointers method
