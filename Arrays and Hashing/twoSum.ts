// DSA Problem — Two Sum

// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.

// Example
// Input:
// nums = [2, 7, 11, 15]
// target = 9

// Output:
// [0, 1]

// Constraints
// Each input has exactly one solution.
// You may not use the same element twice.
// Return the indices in any order.

// const twoSum = (nums: number[], target: number): number[] => {
//   for (let i = 0;  i < nums.length; i++) {
//     for (let x = 0; x < nums.length; x++) {
//       if ((nums[i]! + nums[x]!) === target) {
//         return [i, x];
//       }
//     }
//   }
//   return [];
// }

//Been using brute force so i tried to study about whats a better  algorithm for this
//I have learned that I should use hashmap, so in the next problems. I will be using hashmap

const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();
  for (let i = 0;  i < nums.length; i++) {
    const find = target - nums[i]!;
    if (!map.has(find)) {
      map.set(nums[i]!, i)
    } else {
      return [map.get(find)!, i]
    }
  }
  return [];
}

//I tried it again but this time no help
//Successfully did it in first try


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 4, 6,  7, 11, 15], 13));

