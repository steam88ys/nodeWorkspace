let MongoClient = require('mongodb').MongoClient;

// 데이터베이스 연결 정보
let dbUrl = 'mongodb://127.0.0.1:27017/local'

// 데이터베이스 연결
MongoClient.connect(dbUrl, (err, db) => {
    if(err) {
        console.log('db error~' + err);
    }else {
        console.log('db 연결되었습니다. ' + dbUrl);
    }
});