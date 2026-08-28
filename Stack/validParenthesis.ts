// Valid Parentheses

// Given a string s containing only the characters:

// ( ) { } [ ]

// determine if the input string is valid.

// A string is valid if:

// Every opening bracket has a corresponding closing bracket.
// Brackets close in the correct order.
// Every closing bracket has a corresponding opening bracket.
// Examples
// Input:  "()"
// Output: true
// Input:  "()[]{}"
// Output: true
// Input:  "(]"
// Output: false
// Input:  "([])"
// Output: true
// Input:  "([)]"
// Output: false
// Input:  "{[]}"
// Output: true

const validParenthesis = (s: string): boolean => {
  const stack: string[] = [];

  for (const char of s) {

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    }

    if (char === "}") {
      if (stack[stack.length-1] === "{"){
        stack.pop()
      } else {
      return false;
      }
    }

    if (char === ")") {
      if (stack[stack.length-1] === "("){
        stack.pop()
      } else {
        return false;
      }
    }

    if (char === "]") {
      if (stack[stack.length-1] === "["){
        stack.pop()
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
console.log(validParenthesis("{[]}"));
console.log(validParenthesis("([)]"));

//I was so close to solve it without a help
//I am still happy that my progress is getting goood
//And I can see that I'm getting shard