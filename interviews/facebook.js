function solution(matrix) {
  let n = matrix.length;
  let borders = [];

  // iterate over matrix, building an array of i-borders
  for (let i = 0; i <= Math.floor((n - 1) / 2); i++) {
    let iborder = [];

    // for each row of the i-border
    for (let r = 0 + i; r < n - i; r++) {
      if (r == 0 + i || r == n - i - 1) {
        // all elements of first and last rows are in the i-border
        for (let c = 0 + i; c < n - i; c++) {
          iborder.push(matrix[r][c]);
        }
      } else {
        // only first and last elements of in-between rows are part of i-border
        iborder.push(matrix[r][0 + i]);
        iborder.push(matrix[r][n - i - 1]);
      }
    }

    // add i-border to borders
    borders.push(iborder);
  }

  // sort borders
  borders.map((border) => {
    return border.sort((a, b) => a - b);
  });

  // add sorted i-borders back to matrix
  for (let i = 0; i < borders.length; i++) {
    let iborder = borders[i];

    // add first row
    for (let c = 0 + i; c < n - i - 1; c++) {
      matrix[0 + i][c] = iborder.shift();
    }

    // add last column
    for (let r = 0 + i; r < n - i - 1; r++) {
      matrix[r][n - i - 1] = iborder.shift();
    }

    // add last row
    for (let c = n - i - 1; c > 0 + i; c--) {
      matrix[n - i - 1][c] = iborder.shift();
    }

    // add first column
    for (let r = n - i - 1; r > 0 + i; r--) {
      matrix[r][0 + i] = iborder.shift();
    }
  }

  console.log(matrix);

  return matrix;
}

solution([
  [3, 2, 8, 7],
  [5, 6, 7, 3],
  [9, 11, 4, 3],
  [1, 4, 6, 1],
]);
