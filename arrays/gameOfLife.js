// https://leetcode.com/problems/game-of-life/

const max = (n, m) => Math.max(n, m);
const min = (n, m) => Math.min(n, m);

var gameOfLife = function (board) {
  // get board dimensions
  let m = board.length;
  let n = m > 0 ? board[0].length : 0;

  // iterate over every cell
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      let sum = 0;
      // iterate over adjacent cells computing their sum
      for (let ar = max(0, r - 1); ar < min(m, r + 2); ar++) {
        for (let ac = max(0, c - 1); ac < min(n, c + 2); ac++) {
          // only consider least significant bit (lsb)
          if (ac != c || ar != r) {
            sum += board[ar][ac] & 1;
          }
        }
      }
      // compute new state
      board[r][c] |= getNewState(board[r][c] & 1, sum) << 1;
    }
  }

  // get rid of old state
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      board[r][c] >>= 1;
    }
  }
  return board;
};

const getNewState = function (currentState, adjacentSum) {
  if (currentState == 1) {
    if (adjacentSum < 2 || adjacentSum > 3) {
      return 0;
    }
    return 1;
  }
  if (adjacentSum == 3) {
    return 1;
  }
  return 0;
};

gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
]);
