// https://leetcode.com/problems/merge-k-sorted-lists/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeKListsBruteForce = function (lists) {
  // merge all lists into single list
  let nodeList = [];
  for (head of lists) {
    let node = head;
    while (node) {
      nodeList.push(node);
      node = node.next;
    }
  }

  // sort
  nodeList.sort((a, b) => a.val - b.val);

  // re-link
  for (let i = 0; i < nodeList.length - 1; i++) {
    nodeList[i].next = nodeList[i + 1];
  }
  nodeList[nodeList.length - 1].next = null;

  return nodeList[0];
};

// Approach 2: compare 1 to 1
var mergeKListCompare = function (lists) {
  if (lists.length == 0) {
    return null;
  }

  let answerHead = null;
  let answerTail = null;

  while (true) {
    // get index of smallest node
    let si;
    for (let i = 0; i < lists.length; i++) {
      if (si == undefined && lists[i] != null) {
        si = i;
      } else if (lists[i] != null && lists[i].val < lists[si].val) {
        si = i;
      }
    }

    // if all lists are empty, break out of the loop
    if (lists[si] == null) {
      break;
    }

    // remove smallest node from its list
    let smallestHead = lists[si];
    lists[si] = lists[si].next;
    smallestHead.next = null;

    // append smallest node to final answer
    if (answerHead == null) {
      answerHead = smallestHead;
      answerTail = smallestHead;
    } else {
      answerTail.next = smallestHead;
      answerTail = smallestHead;
    }
  }

  return answerHead;
};

let list1Hd = new ListNode(0, null);
let list1Tl = list1Hd;
list1Tl.next = new ListNode(1, null);
list1Tl = list1Tl.next;
list1Tl.next = new ListNode(3, null);
list1Tl = list1Tl.next;
list1Tl.next = new ListNode(5, null);
list1Tl = list1Tl.next;
let list2Hd = new ListNode(2, null);
let list2Tl = list2Hd;
list2Tl.next = new ListNode(4, null);
list2Tl = list2Tl.next;
list2Tl.next = new ListNode(6, null);
list2Tl = list2Tl.next;
list2Tl.next = new ListNode(8, null);
list2Tl = list2Tl.next;

mergeKListsBruteForce([list1Hd, list2Hd]);
