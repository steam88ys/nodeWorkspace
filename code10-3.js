// 모듈을 추출합니다.
let express = require('express');

// 서버 생성합니다.
let app = express();

// 이벤트 리스너를 생성합니다.
app.get('*', (request, response) => {
    response.status(404);
    response.set('methodA', 'ABCDE');
    response.send('내 마음대로 본문을 입력합니다.');
});

// 서버를 실행합니다.
app.listen(3000, () => {
    console.log("서버 시작! http://localhost:3000");
});