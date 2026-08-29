// Binary Search

// Given a sorted array of integers nums in ascending order and an integer target, return the index of target.

// If target does not exist in the array, return -1.

// Example 1:

// Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
// Output: 4

// Example 2:

// Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
// Output: -1

// Constraints:

// 1 <= nums.length <= 10,000
// -10,000 < nums[i], target < 10,000
// nums contains distinct integers.
// nums is sorted in ascending order.


const binarySearch = (nums: number[], target: number):number => {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid]! < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1
} 

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); //4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); //-1

//This was so good and I always solved it immediately
//I understand the whole problem and the algorithm thanks to neetcode