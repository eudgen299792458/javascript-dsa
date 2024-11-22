function isSubsequenceString(string1, string2) {
  if (!string1 || !string2) return true;

  let bigString = string1;
  let smallString = string2;
  if (bigString.length < smallString.length) {
    bigString = string2;
    smallString = string1;
  }

  for (let value of smallString) {
    if (!value in bigString) return false;
  }
  return true;
}

console.log(isSubsequenceString("help", "helping2"));
console.log(isSubsequenceString("help", ""));
console.log(isSubsequenceString("this is col", "colij"));
