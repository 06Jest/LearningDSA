// Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest sequence of consecutive integers.

// The solution should run in O(n) time.

// Examples
// Input: nums = [100, 4, 200, 1, 3, 2]

// Output: 4

// Explanation: The longest consecutive sequence is:

// [1, 2, 3, 4]
// Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

// Output: 9

// Explanation:

// [0, 1, 2, 3, 4, 5, 6, 7, 8]
// Input: nums = [1, 0, 1, 2]

// Output: 3

// Explanation:

// [0, 1, 2]

// Duplicates should not increase the sequence length.

// Constraints
// 1 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9

const consecutiveSequence = (nums: number[]): number => {
  const result: number[][] = [];
  const set = new Set<number>();
  for (const num of nums) {
    set.add(num);
  }

  for (const num of set) {
    if (!set.has(num - 1)) {
      if (set.has(num + 1)) {
        let n = num;
        let s: number[] = [];
        while (set.has(n + 1)) {
          s.push(n);
          n++;
        }

        s.push(n);
        result.push(s);
      } else {
        result.push([num])
      }
    }
  }
  let longest: number = 0;
  for (const arr of result) {
    if (arr.length > longest) {
      longest = arr.length;
    }
  }
  return longest;
}

console.log(consecutiveSequence([100, 4, 200, 1, 3, 2]));
// Expected: 4

console.log(consecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// Expected: 9

//I think this is super hard
//I watch the algo in neetcode
//After 1 try, I successfully turn it  to code
//Glad I make use of my brain again lol