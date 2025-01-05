class Hash {
  #TABLE_SIZE = 100;
  #hashTableStore = new Array(this.#TABLE_SIZE);
  #WEIRED_PRIME_NO = 31;
  #MAX_CHAR_LOOK_UP = 100;

  // hash function
  #hash(key) {
    let hashValue = 0;
    for (let i = 0; i < Math.min(key.length, this.#MAX_CHAR_LOOK_UP); i++) {
      const char = key[i];
      const asciiValue = char.charCodeAt(0);
      hashValue =
        (hashValue * this.#WEIRED_PRIME_NO + asciiValue) % this.#TABLE_SIZE;
    }

    return hashValue;
  }

  // set
  set(key, value) {
    // hash the key
    const hashValue = this.#hash(key);

    // store in hash table array
    if (this.#hashTableStore[hashValue]) {
      // for multiple keys having same hash, store them in same index
      const hashedLocation = this.#hashTableStore[hashValue];
      // check if both key:value collides
      for (const entry of hashedLocation) {
        if (entry[0] == key && entry[1] == value) {
          console.log(`${key}: ${entry[1]} colides`);
          return;
        }
      }
      this.#hashTableStore[hashValue].push([key, value]);
      return;
    } else {
      this.#hashTableStore[hashValue] = [[key, value]];
      return;
    }
  }

  // get
  get(key) {
    // hash the key
    const hashValue = this.#hash(key);

    return this.#hashTableStore[hashValue];
  }

  // keys
  keys() {
    let collectKeys = [];
    for (const entry1 of this.#hashTableStore) {
      if (entry1) {
        for (const entry2 of entry1) {
          if (entry2[0]) {
            collectKeys.push(entry2[0]);
          }
        }
      }
    }
    return collectKeys;
  }

  // values
  values() {
    let collectValues = [];
    for (const entry1 of this.#hashTableStore) {
      if (entry1) {
        for (const entry2 of entry1) {
          if (entry2[0]) {
            collectValues.push(entry2[1]);
          }
        }
      }
    }
    return collectValues;
  }

  // entries
  entries() {
    let collectEntries = [];
    for (const entry1 of this.#hashTableStore) {
      if (entry1) {
        for (const entry2 of entry1) {
          if (entry2[0]) {
            collectEntries.push(entry2);
          }
        }
      }
    }
    return collectEntries;
  }
}

const hashing = new Hash();

hashing.set("mahesh", "mahesh:13");
hashing.set("mahesh", "mahesh:13");
hashing.set("santosh", "santosh:14");
hashing.set("mahesh", "mahesh:14");
hashing.set("mah", "mah:14");

console.log('hashing.get("mahesh") : ', hashing.get("mahesh"));
console.log('hashing.get("santosh") : ', hashing.get("santosh"));
console.log('hashing.get("mah") : ', hashing.get("mah"));

console.log("keys : ", hashing.keys());
console.log("values : ", hashing.values());
console.log("entries : ", hashing.entries());
