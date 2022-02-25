// https://leetcode.com/problems/unique-binary-search-trees-ii/

function TreeNode(val, left, right) {
  this.val = val == undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var generateTrees = function (n) {
  return genTrees(1, n);
};

const genTrees = function (start, end, memo = {}) {
  let key = start.toString() + end.toString();

  if (key in memo) {
    return memo[key];
  }

  if (end < start) {
    memo[key] = [null];
    return memo[key];
  }

  if (end == start) {
    memo[key] = [new TreeNode(start)];
    return memo[key];
  }

  let trees = [];
  for (let val = start; val <= end; val++) {
    let lts = genTrees(start, val - 1);
    let rts = genTrees(val + 1, end);
    for (lt of lts) {
      for (rt of rts) {
        trees.push(new TreeNode(val, lt, rt));
      }
    }
  }
  memo[key] = trees;
  return trees;
};

console.log(generateTrees(4));
