function factorial(number) {
    if (number === 0) {
        return 1;
    }
    return number * factorial(number - 1);
}

function BracketCombinations(num) {
    return factorial(2 * num) / (factorial(num + 1) * factorial(num));
}

// keep this function call here 
console.log(BracketCombinations(readline()));