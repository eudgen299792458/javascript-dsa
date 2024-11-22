function maxSubArraySum(givenArray, window_size) {
  let maxSum = 0;
  let tempSum = 0;
  if (givenArray.length < window_size) return null;

  for (let index = 0; index < window_size; index++) {
    maxSum += givenArray[index];
  }

  tempSum = maxSum;
  for (let index1 = window_size; index1 < givenArray.length; index1++) {
    tempSum = tempSum + givenArray[index1] - givenArray[index1 - window_size];

    if (maxSum < tempSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}
console.log("results: ", maxSubArraySum([5, 5, 1, 2, 3, 9, 4, 1, 4], 3));

function testMaxSubArraySum() {
  const testCases = [
    // Basic test cases
    {
      givenArray: [5, 5, 1, 2, 3, 9, 4, 1, 4],
      window_size: 3,
      expected: 16, // Subarray [9, 4, 3]
    },
    {
      givenArray: [2, 1, 5, 1, 3, 2],
      window_size: 3,
      expected: 9, // Subarray [5, 1, 3]
    },
    {
      givenArray: [1, 2, 3, 4, 5],
      window_size: 2,
      expected: 9, // Subarray [4, 5]
    },

    // Edge cases
    {
      givenArray: [],
      window_size: 3,
      expected: null, // Empty array
    },
    {
      givenArray: [1, 2],
      window_size: 3,
      expected: null, // Window size larger than array
    },
    {
      givenArray: [1, 2, 3],
      window_size: 3,
      expected: 6, // Window size equals array length
    },

    // Large arrays
    {
      givenArray: Array(1000).fill(1),
      window_size: 100,
      expected: 100, // All elements are 1, any subarray sum is the window size
    },
    {
      givenArray: Array(100000).fill(10),
      window_size: 1000,
      expected: 10000, // All elements are 10, any subarray sum is 10 * window_size
    },
    {
      givenArray: Array.from({ length: 1000 }, (_, i) => i + 1), // [1, 2, ..., 1000]
      window_size: 50,
      expected: 37250, // Largest subarray is the last 50 elements [951, ..., 1000]
    },

    // Negative numbers
    {
      givenArray: [-1, -2, -3, -4, -5],
      window_size: 2,
      expected: -3, // Subarray [-1, -2]
    },
    {
      givenArray: [-10, -20, 0, 10, 20],
      window_size: 3,
      expected: 30, // Subarray [0, 10, 20]
    },

    // Mixed positive and negative numbers
    {
      givenArray: [10, -2, 3, -1, 2, 5],
      window_size: 3,
      expected: 10, // Subarray [3, -1, 2, 5]
    },
    {
      givenArray: [1, -2, 3, -4, 5, -6, 7, -8, 9],
      window_size: 4,
      expected: 11, // Subarray [5, -6, 7, -8]
    },

    // Zero-only array
    {
      givenArray: [0, 0, 0, 0],
      window_size: 2,
      expected: 0, // All subarray sums are 0
    },

    // Repeating patterns
    {
      givenArray: [1, 2, 3, 1, 2, 3, 1, 2, 3],
      window_size: 3,
      expected: 6, // Any subarray [1, 2, 3]
    },
  ];

  testCases.forEach((testCase, index) => {
    const { givenArray, window_size, expected } = testCase;
    const result = maxSubArraySum(givenArray, window_size);

    if (result === expected) {
      console.log(`Test case ${index + 1}: Passed ✅`);
    } else {
      console.log(`Test case ${index + 1}: Failed ❌`);
      console.log(
        `  Input: givenArray=${JSON.stringify(
          givenArray
        )}, window_size=${window_size}`
      );
      console.log(`  Expected: ${expected}, Got: ${result}`);
    }
  });
}

// Run the test suite
testMaxSubArraySum();
