function factorial(n) {
  if (n == 1) {
    return 1;
  }
  console.log(`CallStack: ${n} * factorial(${n - 1})`);
  return n * factorial(n - 1);
}

const value = factorial(5);

console.log("final:", value);
