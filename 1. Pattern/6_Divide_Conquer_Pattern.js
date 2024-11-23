/**
 * Divide and Conquer method
 * Problem: Find the index of given value in a Array
 */

function findIndex(givenArray, searchValue) {
  let minIndex = 0;
  let maxIndex = givenArray.length - 1;

  while (minIndex <= maxIndex) {
    let middleIndex = Math.floor((minIndex + maxIndex) / 2);
    if (givenArray[middleIndex] < searchValue) {
      minIndex = middleIndex + 1;
    } else if (givenArray[middleIndex] > searchValue) {
      maxIndex = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }

  return -1;
}

console.log("\n ---------- TEST Cases --------- ");
function testFindIndex() {
  const testCases = [
    // Large arrays with sequential numbers
    {
      givenArray: Array.from({ length: 1_000_000 }, (_, i) => i + 1), // Array of 1 million elements: [1, 2, ..., 1_000_000]
      searchValue: 999_099,
      expected: 999_099, // Correct index of 999_999
    },
    {
      givenArray: Array.from({ length: 1_000_000 }, (_, i) => i + 1), // Array of 1 million elements
      searchValue: 1,
      expected: 0, // Correct index of 1 (start of the array)
    },
    {
      givenArray: Array.from({ length: 1_000_000 }, (_, i) => i + 1),
      searchValue: 1_080_001,
      expected: -1, // Value not found in the array
    },

    // Large arrays with gaps
    {
      givenArray: Array.from({ length: 1_000_000 }, (_, i) => i * 2), // Even numbers: [0, 2, 4, ..., 1_999_998]
      searchValue: 4_999_296,
      expected: 4_999_296, // Correct index
    },
    {
      givenArray: Array.from({ length: 1_000_000 }, (_, i) => i * 2),
      searchValue: 1_999_999,
      expected: -1, // Odd number not in the array
    },

    // Large arrays with duplicates
    {
      givenArray: Array(500_000).fill(7).concat(Array(500_000).fill(8)), // Array: [7, 7, ..., 8, 8]
      searchValue: 8,
      expected: 500_000, // First occurrence of 8
    },
    {
      givenArray: Array(500_000).fill(7).concat(Array(500_000).fill(8)),
      searchValue: 7,
      expected: 0, // First occurrence of 7
    },

    // Non-sequential and shuffled arrays
    {
      givenArray: Array.from({ length: 1_000_000 }, (_, i) => i + 1).sort(
        () => Math.random() - 0.5
      ), // Random shuffle of 1M elements
      searchValue: 500_000,
      expected: -1, // Value cannot be found reliably as the array is not sorted
    },

    // Large arrays with negative numbers
    {
      givenArray: Array.from({ length: 1_000_000 }, (_, i) => -1_000_000 + i), // Array: [-1_000_000, -999_999, ..., -1]
      searchValue: -500_000,
      expected: 500_000, // Correct index
    },
    {
      givenArray: Array.from({ length: 1_000_000 }, (_, i) => -1_000_000 + i),
      searchValue: 0,
      expected: -1, // Positive number not found in a negative-only array
    },

    // Large arrays with mixed positive, negative, and zero values
    {
      givenArray: Array.from({ length: 500_000 }, (_, i) => -i).concat(
        Array.from({ length: 500_000 }, (_, i) => i)
      ), // Array: [-500_000, ..., 0, ..., 499_999]
      searchValue: 0,
      expected: 499_999, // Index of 0
    },
    {
      givenArray: Array.from({ length: 500_000 }, (_, i) => -i).concat(
        Array.from({ length: 500_000 }, (_, i) => i)
      ),
      searchValue: -500_001,
      expected: -1, // Value not found
    },
  ];

  testCases.forEach((testCase, index) => {
    const { givenArray, searchValue, expected } = testCase;
    const result = findIndex(givenArray, searchValue);

    if (result === expected) {
      console.log(`\nTest case ${index + 1}: Passed ✅`);
      console.log(`  Input: searchValue=${searchValue}`);
      console.log(`  Expected: ${expected}, Got: ${result}\n`);
    } else {
      console.log(`\nTest case ${index + 1}: Failed ❌`);
      console.log(`  Input: searchValue=${searchValue}`);
      console.log(`  Expected: ${expected}, Got: ${result}\n`);
    }
  });
}

// Run the test suite
testFindIndex();
