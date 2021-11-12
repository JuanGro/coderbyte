function CodelandUsernameValidation(str) {
    // Check length
    if (str.length < 4 || str.length > 25) {
        return false;
    }
    // Check start with letter
    if (!str[0].match(/[a-z]/i)) {
        return false;
    }
    // Check only contain letters, numbers and underscore char
    if (!str.match(/[A-Za-z0-9_]*$/)) {
        return false;
    }
    // Check does not end with underscore char
    if (str[str.length - 1] === '_') {
        return false;
    }
    return true; 
} 

// keep this function call here 
console.log(CodelandUsernameValidation(readline()));