// directly implementing the frequency Counter Pattern method

function checkAnagrams(string1, string2) {
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
  console.log(freqCounterString1, "\n", freqCounterString2);
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

console.log("\n---------- TEST CASE ----------");
// Test Case 1
const s1 = "listen";
const s2 = "silent";
console.log(
  `Test Case 1: ${s1} and ${s2} are anagrams?: `,
  checkAnagrams(s1, s2)
); // should return true

// Test Case 2
const s1_2 = "triangle";
const s2_2 = "integral";
console.log(
  `Test Case 2: ${s1_2} and ${s2_2} are anagrams?: `,
  checkAnagrams(s1_2, s2_2)
); // should return true

// Test Case 3
const s1_3 = "apple";
const s2_3 = "pale";
console.log(
  `Test Case 3: ${s1_3} and ${s2_3} are anagrams?: `,
  checkAnagrams(s1_3, s2_3)
); // should return false

// Test Case 4
const s1_4 = "I am Lord Voldemort";
const s2_4 = "Tom Marvolo Riddle";
console.log(
  `Test Case 4: ${s1_4} and ${s2_4} are anagrams?: `,
  checkAnagrams(s1_4, s2_4)
); // should return true
