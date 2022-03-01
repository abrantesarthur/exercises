// https://leetcode.com/problems/merge-k-sorted-lists/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Approach 1: Brute Force
var mergeKListsOne = function (lists) {
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

// Approach 2: compare nodes 1 to 1
var mergeKListTwo = function (lists) {
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

// Approach 4: merge lists 2 by 2
var mergeKListFour = function (lists) {
  if (lists.length == 0) {
    return null;
  }
  if (lists.length == 1) {
    return lists[0];
  }

  // continuously merge two lists
  while (lists.length > 1) {
    let tmp = mergeTwoLists(lists.pop(), lists.pop());
    lists.unshift(tmp);
  }

  return lists[0];
};

const mergeTwoLists = function (listOne, listTwo) {
  if (listOne == null) {
    return listTwo;
  }
  if (listTwo == null) {
    return listOne;
  }

  let head = null;
  let tail = null;
  let smallestHead;

  while (true) {
    if (listOne == null) {
      // if reached end of first list, append second list to the answer
      head = appendList(head, listTwo);
      break;
    } else if (listTwo == null) {
      // if reached end of second list, append first list to the answer
      head = appendList(head, listOne);
      break;
    }

    // pop smallest head
    if (listOne.val < listTwo.val) {
      smallestHead = listOne;
      listOne = listOne.next;
    } else {
      smallestHead = listTwo;
      listTwo = listTwo.next;
    }
    smallestHead.next = null;

    // append smallest head to answer
    if (head == null) {
      head = smallestHead;
      tail = smallestHead;
    } else {
      tail.next = smallestHead;
      tail = smallestHead;
    }
  }

  return head;
};

// appendList appends listTwo to listOne
const appendList = function (listOne, listTwo) {
  if (listOne == null) {
    return listTwo;
  } else if (listTwo == null) {
    return listOne;
  }

  // look for tail;
  let tail = listOne;
  while (tail.next != null) {
    tail = tail.next;
  }
  tail.next = listTwo;
  return listOne;
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
