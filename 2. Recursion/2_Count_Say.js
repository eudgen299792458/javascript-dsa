function countAndSay(n, numberWord) {
  if (n == 1) return;
  let pointer1 = 0;
  let pointer2 = 1;
  let nextWord = [];
  let count = 1;
  for (let index = 0; index < numberWord.length; index++) {
    if (numberWord[pointer1] == numberWord[pointer2]) {
      count++;
      pointer2++;
    } else {
      nextWord.push(count + numberWord[pointer1]);
      count = 1;
      pointer1 = pointer2;
      pointer2 = pointer2 + 1;
    }
  }
  console.log("nextWord array:", nextWord);
  let nextWordStr = nextWord.join("");
  console.log("nextWordStr :", nextWordStr);
  return countAndSay(n - 1, nextWordStr.toString());
}

countAndSay(10, "1");
