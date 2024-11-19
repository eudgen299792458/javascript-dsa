# Frequency Counter Pattern Anagrams

## Problem: Check if Two Strings are Anagrams

You are given two strings, `s1` and `s2`. Write a function that checks whether these two strings are anagrams of each other. Two strings are considered anagrams if they can be rearranged to form the same string, meaning both strings contain the same characters with the same frequency.

---

## Constraints:

- Strings `s1` and `s2` will be non-null and may contain alphanumeric characters and spaces.
- Consider edge cases like empty strings, strings with different lengths, or strings containing special characters.

> ### Example 1:

**Input:**  
`s1 = "listen"`  
`s2 = "silent"`

**Output:**  
`True`

**Explanation:**  
Both strings contain the same characters ('l', 'i', 's', 't', 'e', 'n') with the same frequency. Therefore, they are anagrams.

---

> ### Example 2:

**Input:**  
`s1 = "triangle"`  
`s2 = "integral"`

**Output:**  
`True`

**Explanation:**  
Both strings contain the same characters ('t', 'r', 'i', 'a', 'n', 'g', 'l', 'e') with the same frequency. Therefore, they are anagrams.

---

> ### Example 3:

**Input:**  
`s1 = "apple"`  
`s2 = "pale"`

**Output:**  
`False`

**Explanation:**  
The strings contain different characters, so they are not anagrams.
