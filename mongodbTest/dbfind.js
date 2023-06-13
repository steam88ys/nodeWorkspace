let MongoClient = require('mongodb').MongoClient;

let dbUrl = 'mongodb://127.0.0.1:27017/local';

MongoClient.connect(dbUrl, (err, db) => {
    if(err) {
        console.log('db error~' + err);
    }else {
        console.log('db 연결되었습니다.' + dbUrl);
        db.collection('users').find().toArray((err, results) => {
            console.log(results);
        });
        db.close();
    }
});