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

// const isAnagram = (s: string, t: string): boolean => {
//   if (s.length !== t.length) return false;

//   const sortedS = [...s].sort();
//   const sortedT = [...t].sort();


//   for (let i = 0; i < sortedS.length; i++) {
//     if (sortedS[i] !== sortedT[i]) {
//       return false;
//     }
//   }
//   return true;
// };

//I have search the internet in this that i should count
//The frequency first but i cant understand the algorithm
//Though i also heard that you can sort it first, so i implement the sorting
//I know this is not the fastest approach but im glad that i solved it on my own

const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const map = new Map<string, number>();

  for (const char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char)! + 1);
    } else {
      map.set(char.toLowerCase(), 1)
    }
    
  }

  for (const char of t) {
    if (!map.has(char.toLowerCase())) return false;
    map.set(char, map.get(char)! - 1);
    if (map.get(char)! < 0) {
      return false
    }
  }
  
  return true;
};

//Somehow I solved this in my own faster and more efficient
//I could say that I am confidently know map now

console.log(isAnagram("hello", "holle")); // true
console.log(isAnagram("aab", "abb"));     // false

