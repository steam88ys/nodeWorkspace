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
// insert url get 방식
app.get('/insert', (req, res) => {
    console.log('insert get');
    res.render('insert'); //insert.ejs
})
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

app.get('/delete/:id', (req, res)=> {
    dbconn.query('delete from todotbl where id=?',
    [req.params.id],
    (err, results) => {
        if(err) {
            console.log('delete error' + err);
        } else {
            console.log(`delete ok ${req.params.id}`);
            res.redirect('/');
        }
    });
});

app.get('/edit/:id', (req, res)=> {
    dbconn.query('select * from todotbl where id=?',
    [req.params.id],
    (err, results) => {
        if(err) {
            console.log('edit error' + err);
        } else {
            console.log(`update get ${req.params.id}`);
            res.render('edit', {data:results[0]});
        }
    });
});

app.post('./edit/:id', (req, res) => {
    dbconn.query('update todotbl set contents=?, yesno=?,  where id=?'
    [req.body.contents, req.body.yesno, req.params.id],
    (err, results) => {
        if(err) {
            console.log('edit update error' + err);
        } else {
            console.log(`update update ok %d`, req.params.id);
            res.render('/');
        }
    });
});


app.listen(3002, () => {
    console.log("3002포트 서버가 시작");
})