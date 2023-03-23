let power = (x) => {
    return x*x;
}

console.log(power(10));
console.log(power(20));

let multiply = (min, max) => {
    let output = 1;
    for(let i=min; i<=max; i++) {
        output *= i;
    }
    return output;
}
console.log(multiply(1, 10));