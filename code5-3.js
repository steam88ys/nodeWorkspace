let code = () => {
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
}

code();
console.log(code);

function power(x) {
    return x*x;
}
console.log(power(10));
console.log(power(20));

function multiply(x, y) {
    return x*y;
}
console.log(multiply(52, 273));
console.log(multiply(103, 32));

function print(x, y) {
    console.log(`${message}(이)라고 말했습니다!`);
}
print("안녕하세요");
print("자바스크립트 공부");