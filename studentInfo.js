let express = require('express');

let app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('*', (req, res)=> {
    console.log('/ get start');
});

app.post('*', (req, res)=> {
    
    console.log(req.body);
    console.log(req.body.hakbun);
    console.log(req.body.name);
    console.log(req.body.phone);
    console.log(req.body.email);
    res.send(req.body);
});

app.listen(3000, ()=> {
    console.log("server starting 3000");
});