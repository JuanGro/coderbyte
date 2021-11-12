function cleanString(str) {
    str = str.replace(/[a-zA-Z]/g, '');
    str = str.replace(/[?]{3}/g, '');
    const strArray = str.split('');
    for (let i = 0; i < 2; i++) {
        if (strArray[0] === '?') {
            strArray.shift();
        }
        if (strArray[strArray.length - 1] === '?') {
            strArray.pop();
        }
    }
    return strArray;
}

function QuestionsMarks(str) {
    // Clean string
    strArray = cleanString(str);
    // Check if there are 3 question marks between nums
    if (strArray.find(char => char.includes('?'))) {
        return false;
    }
    if (strArray.length === 0) {
        return false;
    }
    // Add up to 10
    while (strArray.length > 0) {
        if (strArray.length > 1) {
            const num1 = parseInt(strArray.shift());
            const num2 = parseInt(strArray.shift());
            if (num1 + num2 > 10) {
                return false;
            }
        } else {
            if (parseInt(strArray.shift()) > 10) {
                return false;
            }
        }
    }
    // If result is not more than 10, return false
    return true;
}

// keep this function call here 
console.log(QuestionsMarks(readline()));