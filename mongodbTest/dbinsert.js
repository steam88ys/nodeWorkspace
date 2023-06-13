let MongoClient = require('mongodb').MongoClient;

let dbUrl = 'mongodb://127.0.0.1:27017/local';

MongoClient.connect(dbUrl, (err, db) => {
    if(err) {
        console.log('db error~' + err);
    }else {
        let user01 = {id:'user02', name:'사용자02', password:'1234'};
        db.collection('users').insertOne(user01);
        console.log('입력 완료 ' + user01);
    }
});