// https://leetcode.com/problems/merge-k-sorted-lists/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeKListsBruteForce = function (lists) {
  // merge all lists into single list
  let answer = [];
  for (head of lists) {
    let node = head;
    while (node) {
      answer.push(node);
      node = node.next;
    }
  }

  // sort
  answer.sort((a, b) => a.val - b.val);

  // re-link
  for (let i = 0; i < answer.length - 1; i++) {
    answer[i].next = answer[i + 1];
  }
  answer[answer.length - 1].next = null;

  return answer;
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
