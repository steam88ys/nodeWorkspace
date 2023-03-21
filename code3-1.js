let input = 32;

if(input % 2 == 0) {
    console.log(input + "은 짝수입니다.");
    console.log(`${input}은 짝수입니다.`);
}

if(input % 2 == 1) {
    console.log(input + "은 홀수입니다.");
    console.log(`${input}은 홀수입니다.`);
}

let now = new Date();
console.log("시간 "+now.getHours());
console.log("월 "+(now.getMonth()+1));
console.log("년도 "+now.getFullYear())