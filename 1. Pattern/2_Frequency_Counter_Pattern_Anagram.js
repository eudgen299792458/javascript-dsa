// directly implementing the frequency Counter Pattern method
// method 1: O(5n) -> O(n)
function checkAnagrams(string1, string2) {
  string1 = string1.replaceAll(/\s/g, "").toLowerCase();
  string2 = string2.replaceAll(/\s/g, "").toLowerCase();
  if (string1.length != string2.length) return false;
  let freqCounterString1 = {};
  let freqCounterString2 = {};

  //   counter
  for (let value of string1) {
    freqCounterString1[value] = (freqCounterString1[value] || 0) + 1;
  }
  for (let value of string2) {
    freqCounterString2[value] = (freqCounterString2[value] || 0) + 1;
  }

  //   evaluation

  for (let key in freqCounterString1) {
    if (
      !(
        key in freqCounterString2 &&
        freqCounterString1[key] === freqCounterString2[key]
      )
    )
      return false;
  }
  return true;
}

console.log("\n---------- 1. method, TEST CASES: 2 ----------");
// Test Case 1
const s1 = "listen";
const s2 = "silent";
console.log(
  `Test Case 1: '${s1}' and '${s2}' are anagrams?: `,
  checkAnagrams(s1, s2)
); // should return true

// Test Case 2
const s1_2 = "triangle";
const s2_2 = "integral";
console.log(
  `Test Case 2: '${s1_2}' and '${s2_2}' are anagrams?: `,
  checkAnagrams(s1_2, s2_2)
); // should return true

// Test Case 3
const s1_3 = "apple";
const s2_3 = "pale";
console.log(
  `Test Case 3: '${s1_3}' and '${s2_3}' are anagrams?: `,
  checkAnagrams(s1_3, s2_3)
); // should return false

// Test Case 4
const s1_4 = "IamLordVoldemort";
const s2_4 = "TomMarvoloRiddle";
console.log(
  `Test Case 4: '${s1_4}' and '${s2_4}' are anagrams?: `,
  checkAnagrams(s1_4, s2_4)
); // should return true

// Test Case 5
const s1_5 = "I am Lord Voldemort";
const s2_5 = "Tom Marvolo Riddle";
console.log(
  `Test Case 5: '${s1_5}' and '${s2_5}' are anagrams?: `,
  checkAnagrams(s1_5, s2_5)
); // should return true

// method 2: o(2n)->O(n)
function isAnagrams(string1, string2) {
  if (string1.length != string2.length) return false;

  let freqCounterString1 = {};
  for (let value of string1) {
    freqCounterString1[value] = (freqCounterString1[value] || 0) + 1;
  }

  for (let value of string2) {
    if (!value in freqCounterString1) {
      return false;
    } else {
      freqCounterString1[value] -= 1;
    }
  }
  return true;
}

console.log("\n---------- 2. method, TEST CASES: 2 ----------");
// Test Case 1
console.log(
  `Test Case 1: '${s1}' and '${s2}' are anagrams?: `,
  isAnagrams(s1, s2)
); // should return true

// Test Case 2
console.log(
  `Test Case 2: '${s1_2}' and '${s2_2}' are anagrams?: `,
  isAnagrams(s1_2, s2_2)
); // should return true

// Test Case 3
console.log(
  `Test Case 3: '${s1_3}' and '${s2_3}' are anagrams?: `,
  isAnagrams(s1_3, s2_3)
); // should return false

// Test Case 4
console.log(
  `Test Case 4: '${s1_4}' and '${s2_4}' are anagrams?: `,
  isAnagrams(s1_4, s2_4)
); // should return true

console.log(
  `Test Case 5: '${s1_5}' and '${s2_5}' are anagrams?: `,
  isAnagrams(s1_5, s2_5)
); // should return true
