function hash(key, arrayLen) {
  let total = 0;
  const WEIRED_PRIME = 31; // to avoid collision btw multiple keys pointing to same value
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    // max chars will be take upto first 100, if two keys have same first 100 chars, they will colide
    const char = key[i];
    const value = char.charCodeAt(0) - 96;
    total = (total * WEIRED_PRIME + value) % arrayLen;
  }

  return total;
}

// test
const HASH_TABLE_SIZE = 8;
for (const key of [
  "keya",
  "keyb",
  "keyc",
  "keyd",
  "keye",
  "keyf",
  "keyg",
  "keyh",
]) {
  console.log("key, hash(key) : ", key, hash(key, HASH_TABLE_SIZE));
}
