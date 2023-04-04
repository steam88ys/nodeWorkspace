class Student {
    constructor(snum, name, major, phone) {
        this.snum = snum
        this.name = name
        this.major = major
        this.phone = phone
    }

    print() {
        console.log(`학번: ${this.snum}    이름: ${this.name}    전공: ${this.major}   d연락처: ${this.phone}`)
    }
}

let school = [
    new Student('3101', '김모모', '소프트웨어', '010-1111-1111'),
    new Student('3102', '박나나', '디자인', '010-2222-2222'),
    new Student('3103', '조미미', '뉴미디어', '010-3333-3333'),
    new Student('3104', '최다다', '컴퓨터', '010-4444-4444'),
    new Student('3105', '한쫑쫑', '웹솔', '010-5555-5555')
];


// forin문
for (const key in school) {
    const element = school[key];
    element.print();
}

// for문
for (let index = 0; index < school.length; index++) {
    const element = school[index];
    element.print();
}

// foreach문
school.forEach(element => {
    element.print();
});

// forof문
for (const element of school) {
    element.print();
}