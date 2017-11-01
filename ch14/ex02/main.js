// 14.2
// console.log("setTimeoutの前: " + new Date());
// function f() {
//   console.log("これは関数fの中: " + new Date());
// }
// setTimeout(f, 5*1000);
// console.log("setTimeoutの後");
// console.log("これもsetTimeoutの後");


// console.log("setTimeoutの前: " + new Date());
// setTimeout(
//   function () {
//     console.log("setTimeoutに指定された無名関数の中: " + new Date());
//   }, 5*1000
// );
// console.log("setTimeoutの後");
// console.log("これもsetTimeoutの後");


// console.log("setTimeoutの前: " + new Date());
// setTimeout( () => console.log("アロー関数の中: " + new Date()), 5*1000);
// console.log("setTimeoutの後");
// console.log("これもsetTimeoutの後");


// 14.2.1
// const start = new Date();
// let i = 0;
// const intervalId = setInterval(function () {
//   let now = new Date();
//   if (now.getMinutes() !== start.getMinutes() || ++i > 10) {
//     return clearInterval(intervalId);
//   }
//   console.log(`${i}: ${now}`);
// }, 5*1000);


// 14.2.2
// function countdown() {
//   console.log("カウントダウン:");
//   for(let i=5; i>=0; i--) {
//     setTimeout(function() {
//       console.log(i === 0 ? "GO!" : i);
//     }, (5-i)*1000);
//   }
// }
// countdown();


// 14.2.3
const fs = require('fs');
const fname = 'xxx';
fs.readFile(fname, function(err, data) {
  if (err) {
    return console.error(`ファイル読み込み時のエラー ${fname}: ${err.message}`);
  }
  console.log(`ファイル「${fname}」の内容を表示します:\n${data}`);
})
