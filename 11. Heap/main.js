class BinaryHeap {
  #heap = [];
  length = 0;

  insert(value) {
    if (this.#heap.length === 0) {
      this.#heap.push(value);
      this.length++;
      return;
    }

    // bubbling and inserting
    this.#heap.push(value);
    this.length++;
    let currentParentIndex = Math.floor((this.length - 2) / 2);
    while (currentParentIndex >= 0) {
      const currentParentValue = this.#heap[currentParentIndex];

      if (currentParentValue < value) {
        if (
          this.#heap[2 * currentParentIndex + 1] &&
          2 * currentParentIndex + 1 === this.length - 1
        ) {
          this.#heap[currentParentIndex] = value;
          this.#heap[2 * currentParentIndex + 1] = currentParentValue;
          return;
        }

        if (
          this.#heap[2 * currentParentIndex + 2] &&
          2 * currentParentIndex + 2 === this.length - 1
        ) {
          this.#heap[currentParentIndex] = value;
          this.#heap[2 * currentParentIndex + 2] = currentParentValue;
          return;
        }
      }
      currentParentIndex = Math.floor((currentParentIndex - 2) / 2);
    }
  }

  getHeap() {
    return this.#heap;
  }
}

const heap = new BinaryHeap();
heap.insert(10);
heap.insert(50);
heap.insert(51);
heap.insert(45);
heap.insert(30);
// heap.insert(60);
// heap.insert(65);
console.log("heap: ", heap.getHeap(), heap.length);
