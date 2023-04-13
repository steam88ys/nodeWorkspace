let express = require('express');

let app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('*', (req, res)=> {
    console.log('/ get start');
});

app.post('*', (req, res)=> {
    let id = req.body.id;
    let pass = req.body.password;
    if(id=='admin' && pass=='1234') {
        // 로그인 성공
        console.log('로그인 성공');
    }else {
        // 로그인 실패
        console.log('로그인 실패 다시 입력하세요.');
    }
    
    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body.password);
    res.send(req.body);
});

app.listen(3000, ()=> {
    console.log("server starting 3000");
});