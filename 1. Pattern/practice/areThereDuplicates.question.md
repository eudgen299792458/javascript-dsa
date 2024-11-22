### Question:

**Problem Statement:**

Write a function `areThereDuplicates()` that takes an arbitrary number of arguments and returns `true` if any value appears more than once, and `false` otherwise. You are not allowed to use any built-in array methods like `.includes()`, `.indexOf()`, or `.sort()`. The function should be optimized for space and time complexity.

#### Example 1:

**Input:** `areThereDuplicates(1, 2, 3, 4, 5)`  
**Output:** `false`  
**Explanation:** All elements are unique, so the result is `false`.

#### Example 2:

**Input:** `areThereDuplicates(1, 2, 2, 3, 4)`  
**Output:** `true`  
**Explanation:** The number `2` appears more than once, so the result is `true`.

#### Example 3:

**Input:** `areThereDuplicates("a", "b", "a")`  
**Output:** `true`  
**Explanation:** The letter `"a"` appears twice, so the result is `true`.

#### Constraints:

- You can assume that the function will receive a relatively small number of arguments.
