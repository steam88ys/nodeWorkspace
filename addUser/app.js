let express = require('express');
let ejs = require('ejs');
let path = require('path');

let app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    console.log("페이지 시작!");
    res.render('user');
});

app.post('/user', (req, res) =>{
    console.log("user start");
    userinfo.push({id:req.body.id, password:req.body.pass, username:req.body.name, phone:userinfo.phone, email:userinfo.email});
});

app.listen(3000, () => {
    console.log("3000포트 서버가 시작");
})
