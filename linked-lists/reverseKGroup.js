// https://leetcode.com/problems/reverse-nodes-in-k-group/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// approach 1: iterative
var reverseKGroupOne = function (head, k) {
  if (head == null || head.next == null || k == 1) {
    return head;
  }

  let reversedNodes = [];
  let hd = head;
  let lastNodes = [];
  while (true) {
    // get next k nodes
    let nextKNodes = getNextKNodes(hd, k);

    // don't reverse last nodes if lenght is not multiple of k
    if (nextKNodes.length != k) {
      lastNodes = nextKNodes;
      break;
    }

    // get head of next sublist
    hd = nextKNodes[nextKNodes.length - 1].next;

    // revese next k nodes
    for (let i = nextKNodes.length - 1; i > 0; i--) {
      nextKNodes[i].next = nextKNodes[i - 1];
    }
    nextKNodes[0].next = null;

    // push nextKNodes to reversedNodes
    reversedNodes.push(nextKNodes);
  }

  if (reversedNodes.length == 0) {
    return lastNodes[0];
  }

  // head is last node of first reversedNodes
  let answerHead = reversedNodes[0][k - 1];
  // link reversed nodes
  for (let i = 0; i < reversedNodes.length - 1; i++) {
    reversedNodes[i][0].next = reversedNodes[i + 1][k - 1];
  }

  // append lastNodes;
  if (lastNodes.length > 0) {
    reversedNodes[reversedNodes.length - 1][0].next = lastNodes[0];
  }

  return answerHead;
};

// returns a list of k next nodes
var getNextKNodes = function (head, k) {
  if (k == 0) {
    return [];
  }
  let list = [];
  let node = head;
  for (let i = 0; i < k; i++) {
    if (node == null || node == undefined) {
      break;
    }
    list.push(node);
    node = node.next;
  }
  return list;
};

// Approach 2: recursive
var reverseKGroupTwo = function (head, k) {
  let curr = head;
  let count = 0;
  // get head of next group
  while (curr != null && count != k) {
    curr = curr.next;
    count++;
  }

  if (count == k) {
    // reverse next group
    curr = reverseKGroupTwo(curr, k);

    // reverse current group
    while (count-- > 0) {
      let tmp = head.next;
      head.next = curr;
      curr = head;
      head = tmp;
    }
    head = curr;
  }

  return head;
};
