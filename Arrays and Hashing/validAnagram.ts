// Problem: Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once.

// Examples
// Input:  s = "anagram", t = "nagaram"
// Output: true
// Input:  s = "rat", t = "car"
// Output: false
// Input:  s = "listen", t = "silent"
// Output: true
// Input:  s = "hello", t = "hell"
// Output: false

// Constraints
// 1 <= s.length, t.length <= 5 * 10^4
// s and t consist of lowercase English letters.

const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const sortedS = [...s].sort();
  const sortedT = [...t].sort();


  for (let i = 0; i < sortedS.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("hello", "holle")); // true
console.log(isAnagram("aab", "abb"));     // false