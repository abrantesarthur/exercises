// https://leetcode.com/problems/recover-binary-search-tree/

function TreeNode(val, left, right) {
  this.val = val == undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let first = null;
let second = null;
let prev = null;

var recoverTree = function (root) {
  traverse(root);

  let tmp = first.val;
  first.val = second.val;
  second.val = tmp;
};

function traverse(root) {
  if (root === null) {
    return;
  }

  traverse(root.left);

  if (prev == null) {
    prev = root;
    return;
  }

  if (first == null && prev.val >= root.val) {
    first = prev;
  }
  if (second == null && prev.val >= root.val) {
    second = root;
  }

  prev = root;
  traverse(root.right);
}
