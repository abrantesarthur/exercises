// https://www.geeksforgeeks.org/sort-string-according-order-defined-another-string/

const sort = function (input, pattern) {
  /// create hash table
  let inputHashTable = {};
  let patternHashTable = {};

  // count character occurences in pattern
  for (c of pattern) {
    if (c in patternHashTable) {
      patternHashTable[c]++;
    } else {
      patternHashTable[c] = 1;
    }
  }

  let suffix = "";

  //cout character occurrences in input
  for (c of input) {
    if (c in patternHashTable === false) {
      suffix += c;
    } else if (c in inputHashTable) {
      inputHashTable[c]++;
    } else {
      inputHashTable[c] = 1;
    }
  }

  let result = "";

  for (c of pattern) {
    result += c.repeat(inputHashTable[c]);
  }
  return result + suffix;
};

console.log(sort("aedbaeccebba", "bca"));
