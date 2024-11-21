// method 1: with O(n**2)

function sumZeroFinder(givenArray) {
  for (let value1 of givenArray) {
    for (let value2 of givenArray) {
      if (value1 + value2 == 0) {
        return [value1, value2];
      }
    }
  }
}

//Test
console.log("\n---------- 1. method O(n**2) : TEST CASES ----------");
console.log(sumZeroFinder([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZeroFinder([-2, 0, 1, 3])); // undefined
console.log(sumZeroFinder([1, 2, 3])); // undefined

// method 2: with O(n**2)

function sumZerosListFinder(givenArray) {
  let allSumZeros = [];
  for (let value1 of givenArray) {
    for (let value2 of givenArray) {
      if (value1 + value2 == 0) {
        allSumZeros.push([value1, value2]);
      }
    }
  }
  if (allSumZeros.length > 0) {
    return allSumZeros;
  }
}

//Test
console.log("\n---------- 2. method O(n**2) : TEST CASES ----------");
console.log(sumZerosListFinder([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZerosListFinder([-2, 0, 1, 3])); // undefined
console.log(sumZerosListFinder([1, 2, 3])); // undefined

// method 3: with O(n**2) this to O(n) solution
function optimizeSumZeroFinder(givenArray) {
  let left = 0;
  let right = givenArray.length - 1;
  console.log("n: ", right + 1);
  while (right > left) {
    let sum = givenArray[left] + givenArray[right];
    if (sum === 0) {
      return [givenArray[left], givenArray[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

//Test
console.log("---------- 3. method O(n) : TEST CASES ----------");
console.log(optimizeSumZeroFinder([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(optimizeSumZeroFinder([-2, 0, 1, 3])); // undefined
console.log(optimizeSumZeroFinder([1, 2, 3])); // undefined
console.log(
  optimizeSumZeroFinder([
    1000, -999, 500, -500, 300, -300, 800, -800, 0, -1000, 999, 1500, -1500,
    2000, -2000, 3, -3, 100, -100, 7, -7, 250, -250, 10, -10, 15, -15, 5, -5, 1,
    -1, 20, -20, 12, -12, 8, -8, 75, -75, 34, -34, 3, -3, 60, -60, 23, -23, 81,
    -81, 42, -42, 6, -6, 0, 900, -900, 1000,
  ])
); // undefined

// test case
console.log("-------- Test case ---------");
function generateSingleZeroSumArray(size, minValue, maxValue) {
  if (size < 2) throw new Error("Array size must be at least 2.");
  const randomNumbers = new Set();
  while (randomNumbers.size < size - 2) {
    const num =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    randomNumbers.add(num);
  }
  const array = Array.from(randomNumbers);
  const pairValue =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  array.push(pairValue, -pairValue);

  // Shuffle the array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
// Usage example
const singleZeroSumArray = generateSingleZeroSumArray(10000, -1000, 1000);
console.log("\n---------- Testing function with large n----------");
console.log(optimizeSumZeroFinder(singleZeroSumArray)); // Expected output: [x, -x]
