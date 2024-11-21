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
console.log("---------- 1. method O(n**2) : TEST CASES ----------");
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
