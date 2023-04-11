let express = require('express');
let fs = require('fs'); // 파일읽기 모듈
let app = express();

app.get('/', (request, response) => {
    response.send("<h1>그림파일 제공하는 uri path는 image 입니다.</h1>");
})

app.get('/student', (request, response) => {
    response.send("안녕하세요 3102 김윤서입니다.")
})

app.get('/image', (request, response) => {
    fs.readFile('Node.js.png', (error, data) => {
        if(error) {
            console.log("파일읽기에러");
        }else {
            response.type('image/png');
            response.send(data);
        }
    })
});

app.listen(3000, () => {
    console.log("서버 시작! http://localhost:3000");
});