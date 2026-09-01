// Valid Palindrome

// Given a string s, return true if it is a palindrome, or false otherwise.

// A palindrome is a string that reads the same forward and backward after:

// Converting all uppercase letters to lowercase.
// Removing all non-alphanumeric characters.

// Example 1:

// Input:  "A man, a plan, a canal: Panama"
// Output: true

// Example 2:

// Input:  "race a car"
// Output: false

// Example 3:

// Input:  " "
// Output: true

// Constraints:

// 1 <= s.length <= 2 * 10^5
// s consists only of printable ASCII characters.

// Goal: Solve it in O(n) time and ideally O(1) extra space.

// const validPalindrome = (s: string):boolean => {
//   const arr = [...s.toLowerCase()].filter(char => /[a-z0-9]/.test(char));
//   const newArr = [];
//     for(let i = arr.length - 1; i >= 0; i--) {
//       newArr.push(arr[i])
//     }
//   return arr.join("") === newArr.join("");
// }
//This was my own code but this feels ineffecient so i will look for better approach

const validPalindrome = (s: string): boolean => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/[a-zA-Z0-9]/.test(s[left]!)) {
      left++;
    }

    while (left < right && !/[a-zA-Z0-9]/.test(s[right]!)) {
      right--;
    }

    if (s[left]!.toLowerCase() !== s[right]!.toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};



console.log(validPalindrome("racecar"));
console.log(validPalindrome("race a car")); 
console.log(validPalindrome("A man, a plan, a canal: Panama"));
