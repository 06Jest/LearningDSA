// 3Sum

// Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] such that:

// i, j, and k are different indices.
// nums[i] + nums[j] + nums[k] === 0.
// The result must not contain duplicate triplets.

// The order of the triplets and the elements inside each triplet does not matter.

// Example 1:

// Input:  nums = [-1, 0, 1, 2, -1, -4]

// Output: [[-1, -1, 2], [-1, 0, 1]]

// Example 2:

// Input:  nums = [0, 1, 1]

// Output: []

// Example 3:

// Input:  nums = [0, 0, 0]

// Output: [[0, 0, 0]]

// Constraints:

// 3 <= nums.length <= 3000
// -10^5 <= nums[i] <= 10^5

const threeSum = (nums: number[]): number[][] => {
  const result: number[][] = [];
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length - 2; i++) {
    let a = i;
    let b = a + 1;
    let c = sorted.length - 1;

    while (b < c) {
      const sum = sorted[a]! + sorted[b]! + sorted[c]!;

      if (sum === 0) {
        result.push([sorted[a]!, sorted[b]!, sorted[c]!]);
        break;
      }

      if (sum > 0) {
        c--;
      } else {
        b++;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));