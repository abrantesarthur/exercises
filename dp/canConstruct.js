function canConstruct(sentence, wordBank, memo = {}) {
    if(sentence in memo) return true;
    if(sentence.length == 0) return true;
    if(sentence.length == 1 && wordBank.includes(sentence)) return true; 
    if(sentence.length == 1 && !wordBank.includes(sentence)) return false; 

    for(var i = 1; i <= sentence.length; i++) {
        let word = sentence.substring(0, i);
        let newString = sentence.substring(i);
        if(wordBank.includes(word) && canConstruct(newString, wordBank, memo)) {
            return memo[sentence] = true;
        }
    }
    return memo[sentence] = false;
}

console.log(canConstruct("arthur", ["ar", "t", "h", "ur"]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))