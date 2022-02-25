// https://leetcode.com/problems/unique-paths/

var uniquePaths = function (m, n) {
  return paths(m, n);
};

var paths = function (m, n, memo = {}) {
  let key = m.toString() + n.toString();
  if (m == 1 || n == 1) {
    return 1;
  }
  if (key in memo) {
    return memo[key];
  }
  memo[key] = paths(m - 1, n, memo) + paths(m, n - 1, memo);
  return memo[key];
};
