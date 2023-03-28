let product = {
    제품명: '7D 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
};
console.log(product);

let student = {
    이름: '김윤서',
    학번: '3102',
    전공: '뉴미디어소프트웨어',
    연락처: '010-1234-5678'
};
console.log(student);

let fruit = {
    name: '바나나',
    price: 1200,
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }
};
console.log(fruit.name + "\t" + fruit.price);
fruit.print();