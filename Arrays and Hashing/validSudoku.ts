// Valid Sudoku

// You are given a 9 x 9 Sudoku board.

// Each cell contains either a digit from '1' to '9' or '.', representing an empty cell.

// Determine whether the board is valid according to these rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes must contain the digits 1-9 without repetition.
// Empty cells '.' can be ignored.

// A board does not need to be solvable. You only need to determine whether the current board violates any of the rules.

// Example 1

// Input:

// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]

// Output:

// true
// Example 2

// Input:

// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]

// Output:

// false
// Constraints
// board.length === 9
// board[i].length === 9
// Each cell is either '.' or a digit from '1' to '9'.

// Your task: Implement isValidSudoku(board) and return a boolean.

type Sudoku =
  | "9"
  | "8"
  | "7"
  | "6"
  | "5"
  | "4"
  | "3"
  | "2"
  | "1"
  | ".";

const isValidSudoku = (sudoku: Sudoku[][]): boolean => {
  const rows = new Set<string>();
  const columns = new Set<string>();
  const boxes = new Set<string>();

  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      const value = sudoku[row]![column];

      if (value === ".") {
        continue;
      }

      const rowKey = `${value}-row-${row}`;
      const columnKey = `${value}-column-${column}`;
      const boxKey = `${value}-box-${Math.floor(row / 3)}-${Math.floor(column / 3)}`;

      if (rows.has(rowKey)) {
        return false;
      }

      if (columns.has(columnKey)) {
        return false;
      }

      if (boxes.has(boxKey)) {
        return false;
      }

      rows.add(rowKey);
      columns.add(columnKey);
      boxes.add(boxKey);
    }
  }

  return true;
};

console.log(isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]))

console.log(isValidSudoku([
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]))

//I tried my best solving it but in the final, I still asked for help
//I understand the code though
//I think im still learning