const TreeNode = function (val, left, right) {
  this.val = val == undefined ? 0 : val;
  this.left = left == undefined ? null : left;
  this.right = right == undefined ? null : right;
};

const bfs = function (node) {
  if (node == null) {
    return;
  }

  let q = [];
  let level = 0;
  q.push([node, level]);

  while (q.length > 0) {
    // get next node
    let current = q.shift();
    let currNode = current[0];
    let currLevel = current[1];

    // add its children and their levels to the queue
    if (currNode.left != null) {
      q.push([currNode.left, currLevel + 1]);
    }
    if (currNode.right != null) {
      q.push([currNode.right, currLevel + 1]);
    }

    // do something
    console.log(currNode.val + " " + currLevel);
  }
};

let l3 = new TreeNode(5);
let r3 = new TreeNode(6);
let r1 = new TreeNode(2, l3, r3);
let l2 = new TreeNode(3);
let r2 = new TreeNode(4);
let l1 = new TreeNode(1, l2, r2);
let root = new TreeNode(0, l1, r1);

bfs(root);
