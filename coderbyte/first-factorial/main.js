function FirstFactorial(num) {
    // First num is initially saved in num variable, that's why i = num - 1
    for (let i = num - 1; i > 0; i--) {
        num *= i;
    }
    return num;
}

// keep this function call here
console.log(FirstFactorial(readline()));