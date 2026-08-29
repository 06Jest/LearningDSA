// Two Sum II - Input Array Is Sorted
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers that add up to target.
// Return their indices as [index1, index2].
// Rules:
// 1 <= index1 < index2 <= numbers.length
// Exactly one solution exists.
// You cannot use the same element twice.
// The array is already sorted.

// Example 1
// Input:
// numbers = [2, 7, 11, 15]
// target = 9

// Output:
// [1, 2]

// Because:
// 2 + 7 = 9

// Example 2
// Input:
// numbers = [2, 3, 4]
// target = 6

// Output:
// [1, 3]

// Because:
// 2 + 4 = 6

// Example 3
// Input:
// numbers = [-1, 0]
// target = -1

// Output:
// [1, 2]

const twoSumII = (nums: number[], target: number): number[] => {

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left]! + nums[right]!;

    if (sum === target) {
      return [left, right];
    }

    if(sum > target){
      right--;
    } else {
      left++;
    }
  }

  return [];
};

console.log(twoSumII([2, 7, 11, 15], 9));
console.log(twoSumII([2, 3, 4], 6));

//This time I almost in first try but just a few misplacements