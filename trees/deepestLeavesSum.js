// ref: https://leetcode.com/problems/deepest-leaves-sum/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var deepestLeavesSum = function(root) {
    let q = [root];
    let sum = 0;

    while(q.length > 0) {
        let n = q.length;
        sum = 0;
        for(let i = 0; i < n; i++){
            let node = q.shift();
            sum += node.val;
            if(node.left != null) q.push(node.left);
            if(node.right != null) q.push(node.right);
        }
    }
    return sum;
    
};
