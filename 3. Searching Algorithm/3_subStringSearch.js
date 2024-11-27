function subStringSearch(wholeString, subStr) {
  let subStrLength = subStr.length;
  let found = 0;
  for (let index = 0; index < wholeString.length - subStrLength; index++) {
    if (subStr == wholeString.slice(index, index + subStrLength)) {
      found++;
    }
  }

  return found;
}

console.log(subStringSearch("Mahesh boy is bad boy !", "boy")); // 2
console.log(subStringSearch("Maheshoy boy is baoyd boy !", "oy")); // 4
