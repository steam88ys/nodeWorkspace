const request = require('request');

let url = 'https://www.e-mirim.hs.kr/main.do';
request(url, (err, response, body) => {
    if(err) {
        console.log("request error~");
        console.log(err);
    }else {
        console.log(body);
    }
   
});

