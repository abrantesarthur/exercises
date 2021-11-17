// https://leetcode.com/problems/count-sorted-vowel-strings

function countSortedVowels(n, k = 5, memo = {}) {
    let key = n.toString() + k.toString();
    if(key in memo) return memo[key];

    if(n == 1) return k;

    let count = 0;
    for(var j = 1; j <= k; j++) {
        count += countSortedVowels(n - 1, j, memo);
    }
    return memo[key] =  count;
}

console.log(countSortedVowels(1050));