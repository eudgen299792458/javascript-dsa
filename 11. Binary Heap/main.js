class BinaryHeap {
  #heap = [51, 10, 50];
  length = this.#heap.length;

  insert(value) {
    if (this.#heap.length === 0) {
      this.#heap.push(value);
      this.length++;
      return;
    }

    // bubbling and inserting
    this.#heap.push(value);
    this.length++;
    let nth = this.length - 1;
    let currentParentIndex = Math.floor((nth - 1) / 2);
    let lastVisitedParentIndex = 0;

    if (this.#heap[2 * currentParentIndex + 1] === value) {
      lastVisitedParentIndex = 2 * currentParentIndex + 1;
    }
    if (this.#heap[2 * currentParentIndex + 2] === value) {
      lastVisitedParentIndex = 2 * currentParentIndex + 2;
    }

    while (currentParentIndex >= 0) {
      const currentParentValue = this.#heap[currentParentIndex];

      if (currentParentValue < value) {
        // left
        if (2 * currentParentIndex + 1 == lastVisitedParentIndex) {
          this.#heap[currentParentIndex] = value;
          this.#heap[2 * currentParentIndex + 1] = currentParentValue;
          lastVisitedParentIndex = currentParentIndex;
        }

        // right
        if (2 * currentParentIndex + 2 == lastVisitedParentIndex) {
          this.#heap[currentParentIndex] = value;
          this.#heap[2 * currentParentIndex + 2] = currentParentValue;
          lastVisitedParentIndex = currentParentIndex;
        }
      }

      currentParentIndex = Math.floor((currentParentIndex - 1) / 2);
    }
  }

  getHeap() {
    return this.#heap;
  }
}

const heap = new BinaryHeap();
// heap.insert(10);
// heap.insert(50);
// heap.insert(51);
heap.insert(45);
// heap.insert(55);
// heap.insert(60);
// heap.insert(65);
heap.insert(80);
heap.insert(100);
heap.insert(82);
// heap.insert(102);
console.log("heap, length: ", heap.getHeap(), heap.length);
