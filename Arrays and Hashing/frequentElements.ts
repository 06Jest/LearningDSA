// Problem: Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements in the array.

// You may return the answer in any order.

// Examples

// Example 1
// Input:  nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2
// Input:  nums = [1], k = 1
// Output: [1]

// Example 3
// Input:  nums = [4,4,4,4,5,5,5,6,6,7], k = 2
// Output: [4,5]

// Constraints
// 1 <= nums.length <= 100,000
// -10,000 <= nums[i] <= 10,000
// 1 <= k <= number of unique elements in nums

// Your task

// Implement:
// topKFrequent(nums, k)

// Return the k elements that occur most frequently.

//Algorithm:
//Initialize map
//traverse through nums array
//set each as key, add 1 as value if num is duplicated
//initialize array of arrays of nums, max of nums length
//traverse to map, push every key in index based on the value or frequency
//initialize empty return array
//reversely traverse the array, return the element, depends on the count of k
//return new map as key as top ranking, with values as length

const frequentElement = (nums: number[], k: number): number[] => {
  const map = new Map<number, number>();
  
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  const arr: number[][] = Array.from(
    { length: nums.length + 1 },
    () => []
  );

  for ( const [key, value] of map) {
    arr[value]!.push(key)
  }

  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    for (const num of arr[i]!) {
      
      result.push(num);

      if (result.length === k) {
        return result;
      }
    }
  }
  return []
}

console.log(frequentElement([4,4,4,4,5,5,5,6,6], 2));

//This is super hard, I genuinely ask ai to help me out to achiever o(n)
//AI suggested to use buckets
//I was struggling to understand at first still manage
//Starting to notice the code is getting longer tho