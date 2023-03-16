/*
2장 모듈 호출
더하기 함수를 모듈로 분리한 calc.js 파일을 불러들임
exports가 불러들인 객체
*/
// 1번 방식 exports
var calc = require('./calc');
console.log('모듈 분리후 - calc.add 함수 호출 결과 %d', calc.add(10, 10));
// 2번 방식 exports
var calc2 = require('./calc2');
console.log('모듈 분리후 - calc2.add 함수 호출 결과 %d', calc2.add(10, 10));

var os = require('os');
console.log('시스템의 hostname: %s', os.hostname());
console.log('시스템의 메모리: %d / %d', os.freemem(), os.totalmem());
console.log('시스템의CPU 정보\n');
console.dir(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보\n');
console.dir(os.networkInterfaces());

var path = require('path');
// 디렉터리 이름 합치기
var directories = ["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉터리: %s', docsDirectory);
// 디렉터리 이름과 파일 이름 합치기
var curPath = path.join('/Users/mike', 'notepad.exe');
console.log('파일 패스: %s', curPath);