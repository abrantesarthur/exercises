// given a binary tree, return the average value at each depth

const TreeNode = function (val, left, right) {
  this.val = val == undefined ? 0 : val;
  this.left = left == undefined ? null : left;
  this.right = right == undefined ? null : right;
};

const averageByDepth = function (node) {
  if (node == null) {
    return [];
  }

  let result = [];
  let hashTable = {};

  let q = [];
  q.push([node, 0]);

  while (q.length > 0) {
    let curr = q.shift();
    let currNode = curr[0];
    let currDepth = curr[1];

    if (currNode.left != null) {
      q.push([currNode.left, currDepth + 1]);
    }
    if (currNode.right != null) {
      q.push([currNode.right, currDepth + 1]);
    }

    if (currDepth in hashTable) {
      let sumAndCount = hashTable[currDepth];
      sumAndCount[0] += currNode.val;
      sumAndCount[1] += 1;
      hashTable[currDepth] = sumAndCount;
      console.log(currDepth + " " + hashTable[currDepth]);
    } else {
      hashTable[currDepth] = [currNode.val, 1];
      console.log(currDepth + " " + hashTable[currDepth]);
    }
  }

  let i = 0;
  console.log(hashTable);
  while (i in hashTable) {
    result.push(hashTable[i][0] / hashTable[i][1]);
    i++;
  }
  return result;
};

let l3 = new TreeNode(5);
let r3 = new TreeNode(6);
let r1 = new TreeNode(2, l3, r3);
let l2 = new TreeNode(5);
let r2 = new TreeNode(8);
let l1 = new TreeNode(4, l2, r2);
let root = new TreeNode(0, l1, r1);

//           0
//         /   \
//        4     2
//       / \   / \
//      5   8 5   6
//
console.log(averageByDepth(root));
