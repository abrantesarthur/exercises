// https://brilliant.org/wiki/problem-solving-dynamic-programming/

if(!Array.prototype.last) {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }
}

function mathMax(a, b) {
    return a > b ? a : b;
}

function maxBracketSum(k, brackets, values) {
    if(brackets.length <= 1) return 0;
    
    let sum = 0;
    // calculate sum for including last bracket
    for(var i = 0; i < brackets.length - 1; i++) {
        if(brackets[i] == brackets[brackets.length - 1] - k) {
            let currSum = values[i] + values[brackets.length - 1];
            currSum  += maxBracketSum(k, brackets.slice(0, i), values.slice(0, i));
            currSum +=  maxBracketSum(k, brackets.slice(i + 1), values.slice(i + 1));
            sum = mathMax(sum, currSum);
        }
    }

     // return max between sums of including and excluding last bracket
     brackets.pop();
     values.pop();
     return mathMax(sum, maxBracketSum(k, brackets, values));
}

console.log(maxBracketSum(3, [1,3,4,2,5,6], [4,5,-2,1,1,6]))