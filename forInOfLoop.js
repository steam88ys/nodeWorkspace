let array = ["사과", "배", "포도", "딸기", "바나나"];

for(let i=0; i<array.length; i++) {
    console.log(`${i}번째 요소: ${array[i]}`);
}

console.log("---------------------------------------")

for(let item of array) {
    console.log(item);
}