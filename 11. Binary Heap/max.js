class MaxBinaryHeap {
  #heap = [51, 10, 50];
  length = this.#heap.length;

  insert(value) {
    if (this.#heap.length === 0) {
      this.#heap.push(value);
      this.length++;
      return;
    }

    this.#heap.push(value);
    this.length++;

    // bubble up
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

  removeHighestMax() {
    if (this.length == 0) return;
    if (this.length == 1) {
      this.#heap.pop();
      this.length--;
      return;
    }
    // ------- swaping and poping -------
    // 1. method
    // this.#heap.shift()
    // this.#heap.unshift(this.#heap[this.length - 1]);
    // this.#heap.pop();
    // this.length--

    // 2. method : better
    this.#heap[0] = this.#heap[this.length - 1];
    this.#heap.pop();
    this.length--;

    // ------- bubbling down -------
    const nth = this.length - 1;
    let currentNodeIndex = 0;
    let breakFlag = false;
    while (currentNodeIndex <= nth) {
      breakFlag = true;

      // do swaping with greater child value
      if (
        this.#heap[2 * currentNodeIndex + 1] >
        this.#heap[2 * currentNodeIndex + 2]
      ) {
        // left
        if (
          this.#heap[2 * currentNodeIndex + 1] != undefined &&
          this.#heap[2 * currentNodeIndex + 1] > this.#heap[currentNodeIndex]
        ) {
          const temp = this.#heap[2 * currentNodeIndex + 1];
          this.#heap[2 * currentNodeIndex + 1] = this.#heap[currentNodeIndex];
          this.#heap[currentNodeIndex] = temp;
          currentNodeIndex = 2 * currentNodeIndex + 1;
          breakFlag = false;
        }
      } else {
        // right
        if (
          this.#heap[2 * currentNodeIndex + 2] != undefined &&
          this.#heap[2 * currentNodeIndex + 2] > this.#heap[currentNodeIndex]
        ) {
          const temp = this.#heap[2 * currentNodeIndex + 2];
          this.#heap[2 * currentNodeIndex + 2] = this.#heap[currentNodeIndex];
          this.#heap[currentNodeIndex] = temp;
          currentNodeIndex = 2 * currentNodeIndex + 2;
          breakFlag = false;
        }
      }

      if (breakFlag) {
        break;
      }
    }
  }

  getHeap() {
    return this.#heap;
  }
}

const heap = new MaxBinaryHeap();
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
heap.removeHighestMax();
heap.removeHighestMax();
heap.removeHighestMax();
console.log("heap, length: ", heap.getHeap(), heap.length);
