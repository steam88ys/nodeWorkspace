let product = [
    { name: '바나나', price: 1200 },
    { name: '사과', price: 2000 },
    { name: '배', price: 3000 },
    { name: '고구마', price: 700},
    { name: '감자', price: 600}
];
console.log(product);

function print(fruit) {
    console.log(`${name}의 가격은 ${price}입니다.`);
};

// for문 1번
for(const fruit of product) {
    print(fruit);
}

// foreach문
product.forEach(element => {
    console.log(element.name + "\t" + element.price);
});

// for문
for (let index = 0; index < product.length; index++) {
    const element = product[index];
    console.log(element);
}

// forin문
for (const key in product) {
    const element = product[key];
    console.log(key + "\t" + element.name + "\t" + element.price);
}

// forof문
for (const iterator of product) {
    console.log(iterator.name + "\t" + iterator.price)
}