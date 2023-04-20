let express = require('express');
let fs = require('fs')
let ejs = require('ejs');

let app = express();

// express 모듈
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// ejs 모듈 추가
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    
    console.log('/ get start ejs test');
    res.render('ejsex03', {
        dataArr: [
            { name: '윤서', age: 19 },
            { name: '신흥', age: 18 },
            { name: '채영', age: 17 },
            { name: '서영', age: 16 }
        //     '0번 인덱스는 처음데이터',
        //     '1번 인덱스는 둘째데이터',
        //     '2번 인덱스는 세번째 데이터 입니다.'
        ]
        // jemok: 'ejs 제목 데이터',
        // count: 4,
        // hakbun: 3102,
        // name: '김윤서'
    });
    // fs.readFile('ejsex02.ejs', "utf-8", (err, data) => {
    //     if(err) {
    //         console.log('파일 읽기 에러 ' + err);
    //     }else {
    //         res.send(ejs.render(data));
    //     }
    // });
});

app.get('/login', (request, response) => {
    console.log('/login get...');
    fs.readFile('login.ejs', 'utf-8', (err, data) => {
        if(err) {
            console.log('login.ejs 파일 읽기 에러 ' + err);
        }else {
            response.send(ejs.render(data));
        }
    });
});

app.post('/login', (req, res) => {
    let inId = req.body.id;
    let inPass = req.body.password;
    console.log('입력한 값: '+ inId +", " + inPass);
    if(inId == 'admin' && inPass == "1234") {
        console.log('login 성공');
        res.redirect('/');
    }else {
        console.log('로그인 실패');
        res.redirect('/login');
    }
})

app.listen(3000, () => {
    console.log("server staring 3000");
});