// 몽고디비 모듈 사용
var MongoClient = require('mongodb').MongoClient;

var database;
function connectDB() {
    // 데이터베이스 연결 정보
    var databaseUrl = 'mongodb://localhost:27017/shopping';

    // 데이터베이스 연결
    MongoClient.connect(databaseUrl, function(err, db) {
        if(err) throw err;

        console.log('데이터베이스에 연결되었습니다.: ' + databaseUrl);

        // database 변수에 할당
        database = db;
    });
}

// 서버 시작
http.createServer(app).listen(app.get('port'), function() {
    console.log('서버가 시작되었습니다. 포트: ' + app.get('port'));
    // 데이터베이스 연결
    connectDB();
});