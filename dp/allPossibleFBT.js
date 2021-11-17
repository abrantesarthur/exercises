// https://leetcode.com/problems/all-possible-full-binary-trees/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

class TreeNode {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
}

function allPossibleFBT(n, memo = {}) {


    if(n == 0) return [];
    if(n == 1) return [new TreeNode()];

    let ts = [];

    for(var i = 1; i < n; i++) {
        let rs = allPossibleFBT(n - 1 - i);
        let ls = allPossibleFBT(i);
        for(r of rs) {
            for(l of ls) {
                ts.push(new TreeNode(l, r));
            }
        }
    }

    return ts;
    
};

console.log(allPossibleFBT(5));