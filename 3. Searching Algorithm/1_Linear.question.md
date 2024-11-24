### **Problem: Search for a Pattern in Array**

You are given an **array of integers** and a **pattern array**. Your task is to determine if the **pattern array** appears in the given array as a subsequence (not necessarily contiguous).

#### **Input**:

1. An integer array `arr` of size `n` (1 ≤ n ≤ 10⁵).
2. An integer array `pattern` of size `m` (1 ≤ m ≤ 10⁴).

#### **Output**:

- Return `true` if the `pattern` array appears as a subsequence in `arr`. Otherwise, return `false`.

---

### **Rules**:

- A **subsequence** is a sequence derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
- You **must use linear search** for this task.

---

### **Example 1:**

#### Input:

```plaintext
arr = [5, 1, 22, 25, 6, -1, 8, 10]
pattern = [1, 6, -1, 10]
```

#### Output:

```plaintext
true
```

#### Explanation:

- The pattern `[1, 6, -1, 10]` appears as a subsequence in `arr`.

---

### **Example 2:**

#### Input:

```plaintext
arr = [5, 1, 22, 25, 6, -1, 8, 10]
pattern = [5, 1, 22, 22]
```

#### Output:

```plaintext
false
```

#### Explanation:

- The pattern `[5, 1, 22, 22]` does not appear as a subsequence in `arr`.

---

### **Example 3:**

#### Input:

```plaintext
arr = [5, 6, 7, 8]
pattern = [8]
```

#### Output:

```plaintext
true
```

#### Explanation:

- The pattern `[8]` appears as a subsequence in `arr`.

---

### **Constraints**:

- You must complete the task in **O(n)** time complexity and **O(1)** space complexity.
- Traversing the array multiple times is **not allowed**.

---
