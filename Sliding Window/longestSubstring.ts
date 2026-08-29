// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring that contains no repeated characters.

// A substring must contain consecutive characters.

// Example 1:

// Input:  s = "abcabcbb"
// Output: 3

// Explanation: The longest substring without repeating characters is "abc".

// Example 2:

// Input:  s = "bbbbb"
// Output: 1

// Example 3:

// Input:  s = "pwwkew"
// Output: 3

// Explanation: "wke" is the longest substring without repeating characters.

// Example 4:

// Input:  s = ""
// Output: 0
// Constraints:

// 0 <= s.length <= 50,000
// s consists of English letters, digits, symbols, and spaces.

// Goal: Try to solve it in O(n) time.

// Hint only: this is a sliding window + Set/Map problem.

const  longestSubstring = (s: string): number => {
  let left = 0;
  let maxLength = 0;
  const set = new Set<string>();


  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right]!)) {
      set.delete(s[left]!);
      left++;
    }
    set.add(s[right]!);
    const currentLength = right - left + 1;
    if(currentLength > maxLength) {
      maxLength = currentLength;
    }
  }
  return maxLength;
}

console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("bbbbb"));    // 1
console.log(longestSubstring("pwwkew"));   // 3
