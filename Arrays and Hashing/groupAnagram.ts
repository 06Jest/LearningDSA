// Group Anagrams — Problem
// Given an array of strings strs, group the anagrams together.
// An anagram is a word formed by rearranging the letters of another word. Strings containing the same letters with the same frequencies are anagrams.
// Return the groups in any order.

// Examples

// Input:
// ["eat","tea","tan","ate","nat","bat"]

// Output:
// [["eat","tea","ate"],["tan","nat"],["bat"]]

// Input:
// [""]

// Output:
// [[""]]

// Input:
// ["a"]

// Output:
// [["a"]]

// Constraints
// 1 <= strs.length <= 10⁴
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.



const groupAnagram = (arr: string[]): string[][] => {  
  const map = new Map<string, string[]>();

  for (const str of arr) {
    const stringMap = new Map<string, number>();

    for (const char of str) {
      stringMap.set(char, (stringMap.get(char) || 0) + 1);
    }

    let signature = "";

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (const char of alphabet) {
      if (stringMap.has(char)) {
        signature += char + stringMap.get(char);
      }
    }

    map.has(signature)
    ? map.get(signature)!.push(str)
    : map.set(signature, [str]);
  }
  return [...map.values()];
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));

//So far this is the most time expensive problem i solved
//Because as i stated from previous problems,
//I want to apply hashmap, so I have to learn hash map before doing answering this
//Next i will implement proper planning and noting the algorithm in mind