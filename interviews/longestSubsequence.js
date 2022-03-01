// 2. Longest Continuous Increasing Sequence.

/**
 * @description Finds the longest increasing sequence from a given array of
 *  integers. A sequence in an array is increasing when each non-last value is
 *  followed by a value that is greater than the previous value. If there are
 *  multiple contenders of the same length, returns the first occurring sequence.
 *  If no increasing sequence of length 2 or greater is found, returns an empty
 *  array. Does not mutate the array parameter.
 *
 * @param {number[]} seq  An array of integers
 *
 * @returns {number[]} The longest continuous increasing sequence of `seq`
 *
 * @example
 *  longestIncrSequence([1]);
 *  // returns []
 * @example
 *  longestIncrSequence([3, 4, 1, 2]);
 *  // return [3, 4]
 * @example
 *  longestIncrSequence([3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10]);
 *  // returns [-43, -1, 0, 11]
 *
 */

const longestIncrSequence = function (arr) {
  if (arr.length <= 1) {
    return [];
  }

  let arrs = [];

  let prev = arr[0];
  let curSeq = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > prev) {
      if (i == 1) {
        curSeq.push(prev);
      }
      curSeq.push(arr[i]);
    } else if (curSeq.length > 1) {
      let copy = curSeq.slice();
      arrs.push(copy);
      curSeq = [];
    }
    prev = arr[i];
  }

  let answer = [];
  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i].length > answer.length) {
      answer = arrs[i];
    }
  }
  return answer;
};

console.log(longestIncrSequence([1]));
console.log(longestIncrSequence([3, 4, 1, 2]));
console.log(longestIncrSequence([3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10]));
console.log(longestIncrSequence([-43, -1, 0, 11]));
