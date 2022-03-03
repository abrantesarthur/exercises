// Add any helper functions you may need here
function isLowerCaseAlpha(c) {
  return (
    c.charCodeAt(0) >= "a".charCodeAt(0) && c.charCodeAt(0) <= "z".charCodeAt(0)
  );
}

function isUpperCaseAlpha(c) {
  return (
    c.charCodeAt(0) >= "A".charCodeAt(0) && c.charCodeAt(0) <= "Z".charCodeAt(0)
  );
}

function isNumeric(c) {
  return (
    c.charCodeAt(0) >= "0".charCodeAt(0) && c.charCodeAt(0) <= "9".charCodeAt(0)
  );
}

function encrypt(c, f) {
  let ac = c.charCodeAt(0);
  let first, last, charCount;
  if (isLowerCaseAlpha(c)) {
    last = "z".charCodeAt(0);
    first = "a".charCodeAt(0);
    charCount = 26;
  } else if (isUpperCaseAlpha(c)) {
    last = "Z".charCodeAt(0);
    first = "A".charCodeAt(0);
    charCount = 26;
  } else if (isNumeric(c)) {
    last = "9".charCodeAt(0);
    first = "0".charCodeAt(0);
    charCount = 10;
  } else {
    return c;
  }
  return String.fromCharCode(
    ((ac + (f % charCount) - first) % charCount) + first
  );
}

function rotationalCipher(input, rotationFactor) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    output += encrypt(input[i], rotationFactor);
  }
  return output;
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printString(str) {
  var out = '["' + str + '"]';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = expected == output;
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + " Test #" + test_case_number;
    console.log(out);
  } else {
    var out = "";
    out += wrongTick + " Test #" + test_case_number + ": Expected ";
    out += printString(expected);
    out += " Your output: ";
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var input_1 = "All-convoYs-9-be:Alert1.";
var rotationFactor_1 = 4;
var expected_1 = "Epp-gsrzsCw-3-fi:Epivx5.";
var output_1 = rotationalCipher(input_1, rotationFactor_1);
check(expected_1, output_1);

var input_2 = "abcdZXYzxy-999.@";
var rotationFactor_2 = 200;
var expected_2 = "stuvRPQrpq-999.@";
var output_2 = rotationalCipher(input_2, rotationFactor_2);
check(expected_2, output_2);

// Add your own test cases here
