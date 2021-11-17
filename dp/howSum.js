function howSum(sum, numbers, memo = {}) {
    if(sum in memo) return memo[sum];

    if(sum < 0) return null;
    if(sum == 0) return [];
    for(let num of numbers) {
        memo[sum - num] = howSum(sum - num, numbers, memo);
        if(memo[sum - num] != null) {
            return [...memo[sum - num], num]
        }
    }

    return null;

}

console.log(howSum(1400, [7,14]));

