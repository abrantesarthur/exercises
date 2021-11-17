function minCoins(targetValue, coins, memo = {}) {
    if(targetValue in memo) return memo[targetValue];
    if(targetValue === 0) return 0;
    if(targetValue < 0) return null;

    let answer = null;
    for(let coin of coins) {
        let newTargetValue = targetValue - coin;
        let result = minCoins(newTargetValue, coins, memo);
        if(result == null) continue;
        if(answer == null || result < answer) {
            answer = result + 1;
        }
    }
    return memo[targetValue] = answer;
}

console.log(minCoins(100, [1, 2]));