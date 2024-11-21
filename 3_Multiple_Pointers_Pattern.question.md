# Challenges

Write a function called `sumZero` which accepts a sorted array of integers. The function should find the **first pair** where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

**Examples:**

```javascript
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```

# Multiple Pointers Pattern

The **Multiple Pointers Algorithm** is a common strategy used in Data Structures and Algorithms (DSA) to solve problems efficiently, especially those that involve arrays or strings. Here's a simpler explanation:

---

### **What is the Multiple Pointers Algorithm?**

Imagine you have two "pointers" or markers that start at different positions (e.g., the beginning and end of an array). These pointers move towards each other, away from each other, or in specific ways based on the problem's logic.

Instead of using nested loops that can be slow, the multiple pointers method reduces the need for extra iterations, making the solution faster and more space-efficient.

---

### **How Does It Help in DSA?**

1. **Saves Time**:
   - It often reduces the time complexity from \(O(n^2)\) (nested loops) to \(O(n)\).
2. **Minimal Space Usage**:

   - It doesn’t need extra space for additional data structures, so space complexity is \(O(1)\).

3. **Efficient for Searching and Matching**:
   - Problems like finding pairs, sums, or palindromes are solved quickly.

---

### **Examples of Problems Solved Using This Algorithm**

1. **Finding a Pair with a Target Sum**:

   - Given a sorted array, find two numbers that add up to a target.
   - Use two pointers: one at the start and one at the end. Move the pointers inward based on the sum.

2. **Checking for Palindromes**:

   - Use one pointer at the beginning and another at the end of a string. Check if the characters match and move the pointers inward.

3. **Removing Duplicates from a Sorted Array**:

   - Use two pointers: one for the current element and another for the next unique element.

4. **Merging Two Sorted Arrays**:
   - Use two pointers, one for each array, and compare elements to merge them in sorted order.

---

### **Real-Life Analogy**

Think of reading a book. If you want to check the first and last pages to ensure they belong to the same book, you don’t flip through all the pages in between. Instead, you check the first page, then the last, and then maybe move inward if needed. That’s like using multiple pointers.

---
