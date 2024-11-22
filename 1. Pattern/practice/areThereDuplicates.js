function areThereDuplicatesParams(...params) {
  let freqCountParams = {};
  for (let value of params) {
    freqCountParams[value] = (freqCountParams[value] || 0) + 1;
  }
  for (let key in freqCountParams) {
    if (freqCountParams[key] > 1) return true;
  }
  return false;
}

console.log("\n----------- TEST CASES ----------");
function testAreThereDuplicatesParams() {
  const testCases = [
    // Simple Test Cases
    { params: [1, 2, 3, 4, 5], expected: false }, // No duplicates
    { params: [1, 2, 2, 3, 4], expected: true }, // Duplicate number: 2
    { params: ["a", "b", "a"], expected: true }, // Duplicate string: "a"
    { params: ["hello", "world", "hello"], expected: true }, // Duplicate string: "hello"
    { params: [true, false, true], expected: true }, // Duplicate boolean: true

    // Edge Cases
    { params: [], expected: false }, // Empty array, no duplicates
    { params: [null, undefined, null], expected: true }, // Null values duplicate
    { params: [0, 0, 0], expected: true }, // All zeros, duplicate
    { params: [NaN, NaN], expected: true }, // NaN duplicates (NaN === NaN is false, but treated as same value in comparison)

    // Larger Input
    { params: Array(100).fill(1), expected: true }, // Large input with the same number repeated
    { params: Array(100).fill(1).concat([2, 3]), expected: true }, // Large input with a mix and duplicates
    { params: Array.from({ length: 100 }, (_, i) => i), expected: false }, // Large input with unique numbers

    // Complex data types
    { params: [{ id: 1 }, { id: 2 }, { id: 1 }], expected: true }, // Objects with identical content
    { params: [{ id: 1 }, { id: 2 }, { id: 3 }], expected: false }, // Objects with unique content
    { params: [new Date(), new Date()], expected: true }, // Same date objects (not same reference, but equal in value)
    { params: [{ key: "value" }, { key: "value" }], expected: true }, // Same object value but different reference
    { params: [function () {}, function () {}], expected: false }, // Two different function references (not considered duplicates)

    // Mixed data types with duplicates
    { params: [1, "1", 1, "1", true, false, true], expected: true }, // Mixed types with duplicates
    { params: [1, "1", 1.0, "1.0"], expected: true }, // Mixed types with similar values but different types (1 and "1")

    // Performance Test (Large Input)
    { params: Array(100).fill(5), expected: true }, // Very large input with duplicates

    // Complex nested structures
    {
      params: [
        [1, 2],
        [3, 4],
        [1, 2],
      ],
      expected: true,
    }, // Nested arrays with identical content
    { params: [{ a: 1 }, { b: 2 }, { a: 1 }], expected: true }, // Objects with identical content inside arrays
  ];

  testCases.forEach(({ params, expected }, index) => {
    const result = areThereDuplicatesParams(...params);
    if (result === expected) {
      console.log(`Test case ${index + 1}: Passed ✅`);
    } else {
      console.log(`Test case ${index + 1}: Failed ❌`);
      console.log(`  Input: ${JSON.stringify(params)}`);
      console.log(`  Expected: ${expected}, Got: ${result}`);
    }
  });
}

// Run the test suite
testAreThereDuplicatesParams();
