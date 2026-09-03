// Container With Most Water

// Given an integer array height where height[i] represents the height of a vertical line at index i, find two lines 
// that together with the x-axis form a container that holds the most water.

// Return the maximum amount of water the container can store.

// Example
// Input:
// height = [1,8,6,2,5,4,8,3,7]

// Output:
// 49

// Input:
// height = [1,1]

// Output:
// 1

// Input:
// height = [2,3,4,5,18,17,6]

// Output:
// 17

// Constraints
// 2 <= height.length <= 10^5
// 0 <= height[i] <= 10^4

const mostWater = (nums: number[]): number => {
  let left = 0;
  let right = nums.length - 1;
  let area = 0
  let max = 0;

  while (left < right) {

    if (nums[left]! < nums[right]!) {
      const height = nums[left];
      const width = (right - left) ;
      area = height! * width;
    } else {
      const height = nums[right];
      const width = (right - left);
      area = height! * width;
    }

    if (area > max) {
      max = area;
    }

    if (nums[left]! < nums[right]!) {
      left++;
    } else {
      right--;
    }
  }
  
  return max;
}

console.log(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(mostWater([1, 1])); // 1
console.log(mostWater([4, 3, 2, 1, 4])); // 16
console.log(mostWater([10, 1, 1, 1, 10])); // 40