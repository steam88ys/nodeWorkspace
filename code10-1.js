// 모듈 추출
let express = require('express');

// 서버 생성
let app = express();

// request 이벤트 리스너를 설정
// app.use((request, response) => {
//     response.send('<h1>Hello expree</h1>');
// });

// request 이벤트 리스너를 설정
app.get('/page/:id', (request, response) => {
    // 토큰 꺼내기
    const id = request.params.id;
    // 응답
    response.send(`<h1>${id} Page</h1>`);
});

// 서버 실행
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});