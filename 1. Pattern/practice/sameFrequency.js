function sameFrequencyDigits(num1, num2) {
  let freqCountNum1 = {};
  let freqCountNum2 = {};

  for (let value of num1.toString()) {
    freqCountNum1[value] = (freqCountNum1[value] || 0) + 1;
  }

  for (let value of num2.toString()) {
    freqCountNum2[value] = (freqCountNum2[value] || 0) + 1;
  }

  for (let key in freqCountNum1) {
    if (!(key in freqCountNum2 && freqCountNum2[key] == freqCountNum1[key]))
      return false;
  }
  return true;
}

console.log("\n----------- TEST CASES -------------");
function testSameFrequencyDigits() {
  const testCases = [
    // Basic positive test cases
    { num1: 182, num2: 281, expected: true }, // Same digits and frequency
    { num1: 34, num2: 14, expected: false }, // Different digits
    { num1: 3589578, num2: 5879385, expected: true }, // Same digits in different order
    { num1: 22, num2: 222, expected: false }, // Different frequencies of 2

    // Single-digit numbers
    { num1: 0, num2: 0, expected: true }, // Both are zero
    { num1: 1, num2: 2, expected: false }, // Different digits

    // Edge cases
    { num1: 100000, num2: 100000, expected: true }, // All digits have the same frequency
    { num1: 12345, num2: 54321, expected: true }, // Permutations of the same digits
    { num1: 123456789, num2: 987654321, expected: true }, // Large numbers with the same digits
    { num1: 123456789, num2: 123456788, expected: false }, // Large numbers with slight difference

    // Mixed numbers
    { num1: -123, num2: 321, expected: false }, // Negative numbers (invalid case)
    { num1: 120, num2: 21, expected: false }, // Trailing zero missing in the second number

    // Repeated digits
    { num1: 111222, num2: 221112, expected: true }, // Same digits repeated in different order
    { num1: 111222, num2: 111223, expected: false }, // Different frequency for one digit
  ];

  testCases.forEach(({ num1, num2, expected }, index) => {
    const result = sameFrequencyDigits(num1, num2);
    if (result === expected) {
      console.log(`\nTest case ${index + 1}: Passed ✅`);
    } else {
      console.log(`\nTest case ${index + 1}: Failed ❌`);
      console.log(`  Input: num1=${num1}, num2=${num2}`);
      console.log(`  Expected: ${expected}, Got: ${result}`);
    }
  });
}

// Run the test suite
testSameFrequencyDigits();
