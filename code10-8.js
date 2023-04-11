let express = require('express');

let app = express();

// 정적파일제공하는 폴더
app.use(express.static('public'));

app.get('*', (request, response) => {
    response.send('정적 파일을 활용합니다. /public 폴더활용');
});

app.listen(3000, ()=> {
    console.log('server stating 3000 port');
});