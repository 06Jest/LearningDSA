/*
Problem: Contains Duplicate

Given an array of integers `nums`, determine if any value appears
at least twice in the array.

Return `true` if any number appears more than once.
Return `false` if every number appears only once.

Examples:

Input:  [1, 2, 3, 1]
Output: true

Input:  [1, 2, 3, 4]
Output: false

Input:  [1, 1, 2, 3, 4, 2]
Output: true

Constraints:
- 1 <= nums.length <= 100,000
- -1,000,000,000 <= nums[i] <= 1,000,000,000

*/

// const containsDuplicate = (nums: number[]): boolean => {
//   for (let i = 0; i < nums.length; i++ ) {
//     let a = nums[i]
//     for (let x = i+1; x < nums.length; x++ ) {
//       let b = nums[x]
//       if (a === b) return true;
//     }
//   }
//   return false;
// }

//This solution is a bruteforce search and worst type of solution O(n²)
//For now, this is the solution i came up with
//I will improve my solutions as I progress further with my checklists

const containsDuplicate = (nums: number[]): boolean => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i]!)){
      map.set(nums[i]!, map.get(nums[i]!)! + 1)
    } else {
      return true;
    }
  }
  return false;
}
//After a few days of learning dsa, I tried to go back here
//See if i can solve it in my own with more efficient
//Did it in my first try

console.log(containsDuplicate([1, 2, 3, 4, 5, 3]));
console.log(containsDuplicate([1, 2, 3, 4]));

