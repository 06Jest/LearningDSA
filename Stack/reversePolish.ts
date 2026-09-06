// Evaluate Reverse Polish Notation

// You are given an array of strings tokens that represents an arithmetic expression in Reverse Polish Notation (RPN).
// Evaluate the expression and return the integer result.
// Valid operators are +, -, *, and /.

// Each operand may be an integer or another expression.
// Division between two integers should truncate toward zero.
// The input is always a valid expression.
// There will be no division by zero.

// Example 1:

// Input:  ["2","1","+","3","*"]
// Output: 9

// Example 2:

// Input:  ["4","13","5","/","+"]
// Output: 6

// Example 3:

// Input:  ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22

// Constraints:

// 1 <= tokens.length <= 10^4
// tokens[i] is either an integer or "+", "-", "*", "/"

const reversePolish = (strs: string[]): number => {
  const stack: number[] = [];

  for (let i = 0; i < strs.length; i++) {
    let op = '';
    if (!Number.isNaN(Number(strs[i]))) {
      stack.push(Number(strs[i]));
    } else {
      op = strs[i]!;

      const b = stack.pop()!;
      const a = stack.pop()!;
      switch (op) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(Math.trunc(a / b));
          break;
        }
    }
  }
  return stack.pop()!;
}

console.log(reversePolish(["2", "1", "+", "3", "*"]));
// 9

console.log(reversePolish(["4", "13", "5", "/", "+"]));
// 6

console.log(reversePolish(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
// 22