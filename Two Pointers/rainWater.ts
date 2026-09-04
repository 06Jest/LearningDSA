// Trapping Rain Water

// Given an array height where each element represents the height of a bar, compute how much water can be trapped after raining.

// Example:

// Input:  [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

const rainWater = (nums: number[]): number => {
  let left = 0;
  let right = nums.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let result = 0;

  while (left < right) {
    if (nums[left]! <= nums[right]!) {
      if (nums[left]! >= leftMax) {
        leftMax = nums[left]!;
      } else {
        result += leftMax - nums[left]!;
      }

      left++;
    } else {
      if (nums[right]! >= rightMax) {
        rightMax = nums[right]!;
      } else {
        result += rightMax - nums[right]!;
      }

      right--;
    }
  }

  return result;
};

console.log(rainWater([2, 0, 2])); // 2
console.log(rainWater([3, 0, 1, 3])); // 5
console.log(rainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6