var maxIncreaseKeepingSkyline = function (grid) {
    let n = grid[0].length;
    let maxRows = new Array(n);
    let maxCols = new Array(n);

    // compute the height of tallest building in each row
    for(var r = 0; r < n; r++) {
        let maxRow = 0;
        for(var c = 0; c < n; c++) {
            if(grid[r][c] > maxRow) maxRow = grid[r][c];
        }
        maxRows[r] = maxRow;
    }

    // compute the height of tallest building in each col
    for(var c = 0; c < n; c++) {
        let maxCol = 0;
        for(var r = 0; r < n; r++) {
            if(grid[r][c] > maxCol) maxCol = grid[r][c];
        }
        maxCols[c] = maxCol;
    }

    // compute max total sum that height of each building can be increased
    let maxTotalSum = 0;
    for(var r = 0; r < n; r++) {
        for(var c = 0; c < n; c++) {
            if(min(maxRows[r], maxCols[c]) > grid[r][c]) {
                maxTotalSum += min(maxRows[r], maxCols[c]) - grid[r][c];
            }  
        }
    }

    return maxTotalSum;
}

function min(a, b) {
    return a < b ? a : b;
}

console.log(maxIncreaseKeepingSkyline([[]]));