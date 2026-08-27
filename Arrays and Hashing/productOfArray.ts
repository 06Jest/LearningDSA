// Product of Array Except Self

// Given an integer array nums, return an array answer such that:

// answer[i] is equal to the product of every element in nums except nums[i].

// The product of any prefix or suffix of nums fits within a 32-bit integer.
// You must not use division.
// Your solution should run in O(n) time.
// Aim for O(1) extra space, excluding the output array.
// Examples

// Input:
// nums = [1,2,3,4]
// Output:
// [24,12,8,6]

// Input:
// nums = [-1,1,0,-3,3]
// Output:
// [0,0,9,0,0]

// Your task: Implement the function and return the resulting array.

//Algorithm:
//Make a prefix array(multiplay each element to previous array starts with 1)
//Multiply each element with the corresponding index of prefix using suffix array
//return the product array

const productOfArray = (nums: number[]): number[] => {
  const answer: number[] = [];

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix;
    prefix *= nums[i]!;
  }

  let suffix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i]! *= suffix;
    suffix *= nums[i]!;
  }

  return answer;
};

console.log(productOfArray([24,12,8,6]));
console.log(productOfArray([-1,1,0,-3,3]));

//I have watch prefix and suffix in the youtube video
//But even that I still didnt answer it correctly 
//So I had to validate every code to ai