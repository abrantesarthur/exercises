function minCoins(coins, target, dp = {}) {
    if(target == 0) return 0;
    if(target < 0) return null;

    dp[0] = 0;
    for(let t = 1; t <= target; t++) {
        for(let coin of coins) {
            if(t - coin >= 0) {
                dp[t] = min(dp[t], 1 + dp[t - coin]);
            }
        }
    }

    
    return dp[target];
}

function min (a, b) {
    return a < b ? a : b
}

console.log(minCoins([7], 10))