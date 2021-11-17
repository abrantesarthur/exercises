function tdGridTraveler(m, n, memo = {}) {
    let key = m + "," + n;
    if (key in memo) return memo[key];

    if(m <= 0 || n <= 0) return 0;
    if(m == 1 || n == 1) return 1;
    memo[key] = tdGridTraveler(m - 1, n, memo) + tdGridTraveler(m, n-1, memo);
    return memo[key];
}

function buGridTraveler(rows, cols) {
    let arr = new Array(rows + 1);
    for(var i = 0; i < arr.length; i++) {
        arr[i] = new Array(cols + 1)
    }

    for(r = 0; r <= rows; r++) {
        arr[r][0] = 0;
        if(r > 0) arr[r][1] = 1;  
    }
    for(c = 0; c <= cols; c++) {
        arr[0][c] = 0;
        if(c > 0) arr[1][c] = 1;;
    }

    for(r = 2; r <= rows; r++) {
        for(c = 2; c <= cols; c++) {
            arr[r][c] = arr[r - 1][c] + arr[r][c - 1];
        }
    }

    return arr[rows][cols];   
}