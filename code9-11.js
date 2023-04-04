const { error } = require('console');
const fs = require('fs');

const async = require('async');

// fs.readFile('textinput.txt', (error, file) => {
//     console.log(file);
//     console.log(file.toString());
// });

async.parallel([
    (callback) => {fs.readFile('a.txt', callback);},
    (callback) => {fs.readFile('b.txt', callback);},
    (callback) => {fs.readFile('c.txt', callback);}
], (err,result) => {
    console.log(results);
});