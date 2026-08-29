// Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] represents the price of a stock on day i.

// You want to buy on one day and sell on a later day to get the maximum possible profit.

// Return the maximum profit you can achieve.

// If you cannot make a profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5

// Explanation: Buy at 1, sell at 6.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0

// Explanation: The price keeps decreasing, so no profitable transaction is possible.

// Constraints:

// 1 <= prices.length <= 100,000
// 0 <= prices[i] <= 100,000
// You can make only one transaction.

const bestTimeToBuy = (prices: number[]): number => {
  let lowest = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i]! < lowest!) {
      lowest = prices[i]!;
    }

    const currentProfit = prices[i]! - lowest!;

    if (currentProfit > profit) {
      profit = currentProfit;
    }
  }

  return profit;
};

console.log(bestTimeToBuy([7, 1, 5, 3, 6, 4])); // 5
console.log(bestTimeToBuy([7, 6, 4, 3, 1]));    // 0

//This is ridiculously hard because 
//I cant concentrate by the time im solving this
//I had to solve everything in rush