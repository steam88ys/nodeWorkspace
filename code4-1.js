for(let i=0; i<10; i++) {
    console.log("출력~");
}

let array = [52, 273, '아침밥', '점심밥', true, false];
array[0] = 0;

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);

for(let i=0; i<=array.length; i++) {
    console.log(array[i]);
}