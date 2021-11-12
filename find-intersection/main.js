function FindIntersection(strArr) {
    const numbers1 = strArr[0].split(', ');
    const numbers2 = strArr[1].split(', ');
    const finalNumbers = numbers1.filter(number => numbers2.includes(number));
    return finalNumbers.length === 0 ? 'false' : finalNumbers.join(',');
}

// keep this function call here 
console.log(FindIntersection(readline()));