// write a function that takes a string of brackets as input
// and returns true if the brackets are balanced

const isBalanced = function (s) {
  if (s.length == 0) {
    return true;
  }
  if (s.length % 2 != 0) {
    return false;
  }

  let stack = [];

  for (let i = 0; i < s.length / 2; i++) {
    stack.push(s[i]);
  }
  for (let i = s.length / 2; i < s.length; i++) {
    let opening = stack.pop();
    if (bracketsMatch(opening, s[i]) == false) {
      return false;
    }
  }
  return true;
};

console.log(isBalanced(""));
console.log(isBalanced("["));
console.log(isBalanced("[}"));
console.log(isBalanced("[]"));
console.log(isBalanced("[({})]"));
console.log(isBalanced("([({})]}"));
