let array = [52, 273, '아침밥', '저녁밥', true, false]
console.log(array);

let array1 = ["사과", "배", "포도", "딸기", "바나나"];
for(let i in array1) {
    console.log(`${i}번째 요소: ${array[i]}`);
}

console.log("--------구분선--------");

for(let item of array1) {
    console.log(item);
}

let products = [
    {name:'바나나', price:1200},
    {name:'사과', price:2000},
    {name:'배', price:3000},
    {name:'고구마', price:700},
    {name:'감자', price:600},
    {name:'수박', price:5000}
];

function printProduct(product) {
    console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
}

for(let product of products) {
    printProduct(product);
}