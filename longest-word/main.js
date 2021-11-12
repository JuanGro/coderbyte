function longer(longestWord, currentWord) {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
}

function removePunctuation(string) {
    return string.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g, "");
}

function LongestWord(sen) {
    sen = removePunctuation(sen);
    const words = sen.split(' ');
    return words.reduce(longer);
}

// keep this function call here 
console.log(LongestWord(readline()));