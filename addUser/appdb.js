let express = require('express');
let ejs = require('ejs');
let path = require('path');
let mysql = require('mysql');

let dbconn = mysql.createConnection ( {
    user: 'root',
    password:'alflarhkgkrrh1!',
    port:3307,
    database:'mirimdb'
});

let todoArr = [];
let count = 1;

let app = express();

app.use(express.static('public'));
app.use(express.urlencoded( {extended:false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('/get 시작');
    //dbconn.connect();
    dbconn.query('select * from todotbl', (err, results) => {
        if(err) {
            console.log('db select error' + err);
        } else {
            console.log(results);
            res.render('list', {datalist: results});
        }
    });
    //dbconn.end();
});
// insert url post 방식
app.post('/insert', (req, res) => {
    console.log('insert get');
    dbconn.query('insert into todotbl(id, contents, yesno) values (null, ?, ?)', [req.body.contents, req.body.yesno], (err, results) => {
        if(err) {
            console.log('db insert error' + err);
        } else {
            console.log(`insert ok ${req.body.contents} ${req.body.yesno}`);
            res.redirect('/');
        }
    });
});


app.listen(3002, () => {
    console.log("3002포트 서버가 시작");
})