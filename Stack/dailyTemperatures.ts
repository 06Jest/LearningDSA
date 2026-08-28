// Daily Temperatures

// Given an array temperatures, return an array where answer[i] tells you how many days you have to wait until a warmer temperature.

// If there is no future day with a warmer temperature, put 0.

// Example 1
// Input:
// [73, 74, 75, 71, 69, 72, 76, 73]

// Output:
// [1, 1, 4, 2, 1, 1, 0, 0]

// For example:

// 73 → 74
//      ↑
//      1 day

// So:

// answer[0] = 1

// For 75:

// 75, 71, 69, 72
// ↑           ↑

// You have to wait 4 days for 72? Careful, 72 is not warmer than 75, so actually you wait until 76, which is 4 days away.

// 75 → 76
//      ↑
//      4 days
// Example 2
// Input:
// [30, 40, 50, 60]

// Output:
// [1, 1, 1, 0]
// Example 3
// Input:
// [30, 60, 90]

// Output:
// [1, 1, 0]

const dailyTemperatures = (temp: number[]): number[] => {
  const answer = new Array(temp.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < temp.length; i++) {
    while (
      stack.length >   0 &&
      temp[i]! > temp[stack[stack.length - 1]!]!
    ) {
      const previousIndex = stack.pop()!;
      answer[previousIndex] = i - previousIndex;
    }
    stack.push(i);
  }
  return answer;
};


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
console.log(dailyTemperatures([30, 40, 50, 60]))

//This problem is way out of my league
//The difficulty for this is way so high
//That even for now, I still cant fully understand
//The solution, Still optimistic that I will eventually get this