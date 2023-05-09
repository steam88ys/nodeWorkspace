let express = require('express');
let ejs = require('ejs');
let path = require('path');

let todosArr = [
    {id:1, contents: '영화보기', yesno: 'no'},
    {id:2, contents: '숙제하기', yesno: 'no'},
    {id:3, contents: '운동하기', yesno: 'no'},
    {id:4, contents: '노래듣기', yesno: 'no'}
];  // 빈배열

let app = express();

app.use(express.static('public'));  // pulbic 폴더 공유
app.use(express.urlencoded({extended:false}));  // 사용자 html 입력
app.set('views', path.join(__dirname, 'views'));    // 뷰폴더
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('/ get이 시작됨~~');
    res.render('list', {datalist: todosArr});   // list.ejs 화면에 출력
});
app.get('/insert', (req, res) => {
    console.log("/insert get 시작됨~");
    // 추가
}) ;
app.post('/insert', (req, res) => {
    console.log("/insert post 시작됨~");
    // 추가
}) ;
app.get('/delete:id', (req, res) => {
    console.log("/delete "+id);
    // 추가
    res.redirect("/");
});
app.listen(3000, () => {
    console.log("3000포트 서버가 시작됨~~");
});
