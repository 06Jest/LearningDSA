// Encode and Decode Strings

// Design an algorithm to encode a list of strings into a single string.

// Then design an algorithm to decode that single string back into the original list of strings.

// Your goal is:

// decode(encode(strs)) == strs

// Example 1
// Input:
// ["hello", "world"]

// Output after decode:
// ["hello", "world"]


// Example 2
// Input:
// ["", "hello", "#", "hello#world"]

// Your encoding/decoding algorithm must correctly handle:
// Empty strings
// Strings containing #
// Strings containing numbers
// Strings of arbitrary length

// Constraints:
// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] may contain any valid characters.


const encode = (strs: string[]): string => {
  let result: string = '';
  
  for (let i = 0; i < strs.length; i++) {
    const code = strs[i]?.length + '#' + strs[i];
    result += code;
  }
  return result;
}

const decode = (s: string): string[] => {
  const result: string[] = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") {
      j++;
    }
    const length = Number(s.slice(i, j));
    i = j + 1;
    result.push(s.slice(i, i + length));
    i += length;
  }

  return result;
}

console.log(encode(["", "hello", "#", "hello#world"]));
console.log(decode(encode(["", "hello", "#", "hello#world"])));
