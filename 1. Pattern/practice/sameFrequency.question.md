### Question:

**Problem Statement:**
Write a function `sameFrequency(num1, num2)` that takes two integers as input and determines if the two numbers contain the same frequency of digits. The function should return `true` if they have the same frequency of each digit, and `false` otherwise.

#### Examples:

1. **Input:** `sameFrequency(182, 281)`  
   **Output:** `true`  
   **Explanation:** Both numbers have the digits 1, 8, and 2 with the same frequency.

2. **Input:** `sameFrequency(34, 14)`  
   **Output:** `false`  
   **Explanation:** The digit 4 is missing in the second number.

3. **Input:** `sameFrequency(3589578, 5879385)`  
   **Output:** `true`  
   **Explanation:** Both numbers have the digits 3, 5, 8, 9, and 7 with the same frequency.

4. **Input:** `sameFrequency(22, 222)`  
   **Output:** `false`  
   **Explanation:** The first number has two 2's, while the second number has three 2's.

5. **Input:** `sameFrequency(0, 0)`  
   **Output:** `true`  
   **Explanation:** Both numbers consist of only one digit: 0.
