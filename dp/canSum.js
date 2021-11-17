function canSum(sum, numbers, memo = {}) {
    if (sum == 0) return true;
    if (sum < 0) return false;
    if(sum in memo) return memo[sum];

    for(let num of numbers) {
        memo[sum] = canSum(sum - num, numbers, memo);
        if(memo[sum]) return memo[sum];
    }
    memo[sum] = false;
    return memo[sum];
}

console.log(canSum(300, [7, 14]));