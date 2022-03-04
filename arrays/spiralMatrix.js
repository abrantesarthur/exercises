// https://www.facebook.com/careers/life/sample_interview_questions

const spiral = function (n) {
  // initialize matrix
  let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let startRow = 0,
    endRow = n - 1;
  let startCol = 0,
    endCol = n - 1;
  let dir = 0;
  let count = 1;

  while (startRow <= endRow && startCol <= endCol) {
    switch (dir) {
      case 0: // right
        for (let col = startCol; col <= endCol; col++) {
          matrix[startRow][col] = count;
          count++;
        }
        startRow++;
        break;
      case 1: // down
        for (let row = startRow; row <= endRow; row++) {
          matrix[row][endCol] = count;
          count++;
        }
        endCol--;
        break;
      case 2: // left
        for (let col = endCol; col >= startCol; col--) {
          matrix[endRow][col] = count;
          count++;
        }
        endRow--;
        break;
      case 3: // up
        for (let row = endRow; row >= startRow; row--) {
          matrix[row][startCol] = count;
          count++;
        }
        startCol++;
        break;
      default:
        break;
    }
    dir = (dir + 1) % 4;
  }

  return matrix;
};

console.log(spiral(4));
