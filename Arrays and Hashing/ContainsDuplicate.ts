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

const containsDuplicate = (nums: number[]): boolean => {
  for (let i = 0; i < nums.length; i++ ) {
    let a = nums[i]
    for (let x = i+1; x < nums.length; x++ ) {
      let b = nums[x]
      if (a === b) return true;
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 5, 3]));

//This solution is a bruteforce search and worst type of solution as the ai said
//For now, this is the solution i came up with
//I will improve my solutions as I progress further with my checklists