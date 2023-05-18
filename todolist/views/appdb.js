let express = require('express');
let ejs = require('ejs');
let path = require('path');
let mysql = require('mysql');   // npm i mysql

let dbconn = mysql.createConnection( {
    user:'root',
    password: 'alflarhkgkrrh1!',
    database:'mirimdb'
});

let todosArr = [];
let count = 1;

let app = express();

app.use(express.static('public'));  // public 폴더공유
app.use(express.urlencoded( {extended:false})); // 사용자 html 입력
app.set('views', path.join(__dirname, 'views'));    // 뷰폴더 지정
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('/ get이 시작됨~~');
    dbconn.connect();   // mirimdb 연결
    dbconn.query('select * from todotbl', (err, results) => {
        if(err) {
            console.log('db select error '+err);
        }else {
            console.dir(results);
            res.render('list', {datalist: results});    // list.ejs 화면
        }
    });
    dbconn.end();   // mirimdb 연결 끊기
});

app.listen(3002, () => {
    console.log("3002포트 서버가 시작됨~~");
});