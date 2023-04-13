let express = require('express');   // body-parser 최근 버전에 내장되어 있다.
let app = express();

//정적파일 제공하는 폴더
app.use(express.static('public'));  // public 폴더에 있는 파일
app.use(express.json());    // json 데이터 활용
app.use(express.urlencoded({extended:false})); // form 본문에 있는 데이터를 encoding

app.get('*', (request, response)=>{
    let output = '';
    output+='<form method="post">';
    output+='   <input type="text" name="id" />';
    output+='   <input type="password" name="passwd" />';
    output+='   <input type="submit"/>';
    output+='</form>';
    response.send(output);
});
app.post('*', (request, response)=>{
    console.log(request.body);
    response.send(request.body);
});

app.listen(3000, ()=>{
    console.log('server starting 3000 port');
});