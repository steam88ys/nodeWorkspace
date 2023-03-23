function multiply(min, max) {
    let output = 1;
    for(let i=min; i<=max; i++) {
        output *= i;
    }
    return output;
}

console.log(multiply(1, 10));