var express = require('express')
    ,path = require('path');

var experssWSession = require('express-session');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));

app.use(express.static('public'));


// 데이터베이스 연결
const MongoClient = require("mongodb/lib/mongo_client");

var database;

// 데이터베이스에 연결
function connectDB() {
    // 데이터베이스 연결 정보
    var databaseUrl = 'mongodb://127.0.0.1:27017/local';

    // 데이터베이스 연결
    MongoClient.connect(databaseUrl, function(err, db) {
        if(err) throw err;
        console.log('데이터베이스에 연결되었습니다. : ' + databaseUrl);
        database = db;
    });
}

// 로그인 라우팅 함수 - 데이터베이스의 정보와 비교
app.get("/login", (req, res) => {
    console.log('/login get 호출됨.');
    res.render('login');    // views 폴더에 있는 login.ejs
}); 

// 로그인 라우팅 함수 - 데이터베이스의 정보와 비교
app.post("/login", (req, res) => {
    console.log('/login post 호출됨.');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    console.log('요청 파라미터: ' + paramId + ", " + paramPassword);

    if(database) {
        authUser(database, paramId, paramPassword, (err, docs) => {
            if(err) {throw err;}

            if(docs) {
                console.dir(docs);

                var username = docs[0].name;
                res.writeHead('200', {'Content-Type':'text/html;charset-utf8'});
                res.write('<h1>로그인 성공</h1>');
                res.write('<div><p>사용자 아이디: ' + paramId + '</p></div>');
                res.write('<div><p>사용자 이름: ' + username + '</p></div>');
                res.write("<br><br><a href='/login'>다시 로그인하기</a>");
                res.end();
            }else {
                res.writeHead('200', {'Content-Type':'text/html;charset-utf8'});
                res.write('<h2>로그인 실패</h2>');
                res.write('<div><p>아이디와 패스워드를 다시 확인하십시오..</p></div>');
                res.write("<br><br><a href='/login'>다시 로그인하기</a>");
                res.end();
            }
        });
    }else {
        res.writeHead('200', {'Content-Type':'text/html;charset-utf8'});
        res.write('<h2>데이터베이스 연결 실패</h2>');
        res.write('<div><p>데이터베이스에 연결하지 못했습니다.</p></div>');
        res.end();
    }
});

// 사용자를 인증하는 함수
var authUser = function(database, id, password, callback) {
    console.log('quthUser 호출됨 : ' + id + '. ' + password);

    var users = database.collection('users');

    users.find({"id":id, "password":password}).toArray(function(err, docs) {
        if(err) {
            callback(err, null);
            return;
        }
        if(docs.length > 0) {
            console.log('아이디 [%s], 패스워드 [%s]가 일치하는 사용자 찾음. ', id, password);
            callback(null, docs);
        }else {
            console.log("일치하는 사용자를 찾지 못함.");
            callback(null, null);
        }
    });
}

app.listen(3000, () => {
    console.log("server starting 3000");
    connectDB();
});

