// 14.3.2
// function countdown(seconds) {
//   return new Promise(function(onFulfilled, onRejected) {
//     for(let i=seconds; i>=0; i--) {
//       setTimeout(function() {
//         if (i>0) {
//           console.log(i + '...');
//         } else {
//           onFulfilled(console.log("GO!"));
//         }
//       }, (seconds-i)*1000);
//     }  
//   });
// }
  
// countdown(5).then(
//   function() {
//     console.log("カウントダウン成功");
//   },
//   function(err) {
//     console.log("カウントダウンでエラーが起こった:" + err.message);
//   }
// );

// const p = countdown(5);
// p.then(function() {
//   console.log("カウントダウン成功");
// });
// p.catch(function(err) {
//   console.log("カウントダウンでエラーが起こった:" + err.message);
// });


// function countdown(seconds) {
//   return new Promise(function(onFulfilled, onRejected) {
//     for(let i=seconds; i>=0; i--) {
//       setTimeout(function() {
//         if (i === 13) {
//           return onRejected(new Error("この数は不吉過ぎます"));
//         }

//         if (i>0) {
//           console.log(i + '...');
//         } else {
//           onFulfilled(console.log("GO!"));
//         }
//       }, (seconds-i)*1000);
//     }  
//   });
// }

// countdown(15).then(
//   function() {
//     console.log("カウントダウン成功");
//   },
//   function(err) {
//     console.log("カウントダウンでエラーが起こった:" + err.message);
//   }
// );

// function countdown(seconds) {
//   return new Promise(function(onFulfilled, onRejected) {
//     const timeoutIds = [];
//     for(let i=seconds; i>=0; i--) {
//       timeoutIds.push(setTimeout(
//         function() {
//           if (i === 13) {
//             timeoutIds.forEach(clearTimeout);
//             onRejected(new Error(`${i}という数は不吉過ぎます`));
//           } else if (i>0) {
//             console.log(i + '...');
//           } else {
//             console.log("GO!");
//             onFulfilled();
//           }
//         },
//         (seconds-i)*1000))
//     }
//   });
// }

// countdown(15).then(
//   function() {
//     console.log("カウントダウン成功");
//   },
//   function(err) {
//     console.log("カウントダウンでエラーが起こった:" + err.message);
//   }
// );


// 14.3.4
// function countdown(seconds) {
//   return new Promise(function(onFulfilled, onRejected) {
//     const timeoutIds = [];
//     for(let i=seconds; i>=0; i--) {
//       timeoutIds.push(setTimeout(function() {
//         if (i === 13) {
//           timeoutIds.forEach(clearTimeout);
//           return onRejected(new Error(`${i}という数は不吉過ぎます`));
//         }

//         if (i>0) {
//           console.log(i + '...');
//         } else {
//           onFulfilled(console.log("GO!"));
//         }
//       }, (seconds-i)*1000))
//     }
//   });
// }

// function launch() {
//   return new Promise(function(onFulfilled, onRejected) {
//     console.log("発射!");
//     setTimeout(function() {
//       onFulfilled("周回軌道に乗った!");
//     }, 2*1000);
//   });
// }

// countdown(15)
//   .then(launch)
//   .then(function(msg) {
//     console.log(msg);
//   })
//   .catch(function(err) {
//     console.log("管制塔、管制塔。トラブル発生..." + err);
//   });


// 'user strict';
// const fs = require('fs');

// function readFile(fileName) {
//   return new Promise((onFulfilled, onRejected) => {
//     fs.readFile(fileName, "utf-8", (err, data) => {
//       // console.log(data);
//       if (err) {
//         // console.error("readFile error:" + filenName + err);
//         onRejected(err);
//       }
//       onFulfilled(data);
//     });
//   });
// }

// function writeFile(fileName, data) {
//   return new Promise((onFulfilled, onRejected) => {
//     fs.writeFile(fileName, data, err => {
//       if (err) {
//         // console.error("writeFile error:" + fileName + err);
//         onRejected(err);
//       }
//       onFulfilled("OK");
//     });
//   });
// }

// let allData = "";
// readFile("a.txt")
//   .then(function(fileData) {
//     allData += fileData;
//      return readFile("b.txt");
//   })
//   .then(function(fileData) {
//     allData += fileData;
//     return readFile("c.txt");
//   })
//   .then(function(fileData) {
//     allData += fileData;
//     return writeFile("d.txt", allData);
//   })
//   .then(function(mes) {
//     console.log("ファイルの合体に成功しました。");
//   })
//   .catch(err => {
//     console.error("エラーが起こりました:" + err);
//   });


// 14.3.5

// Promise.all([readFile("a.txt"), readFile("b.txt"), readFile("c.txt")])
//   .then(function(results) {
//     const allData = results[0] + results[1] + results[2];
//     return writeFile("d.txt", allData);
//   })
//   .then(function(mes) {
//     console.log("ファイルの合体に成功しました。");
//   })
//   .catch(err => {
//     console.log("エラーが起こりました:" + err);
//   });

// const fs = require('fs');

// function writeFile(fileName, data) {
//   return new Promise((onFulfilled, onRejected) => {
//     fs.writeFile(fileName, data, err => {
//       err ? onRejected(err) : onFulfilled('OK');
//     });
//   });
// }

// function readFile(fileName) {
//   return new Promise((onFulfilled, onRejected) => {
//     const period = Math.random()*1000;
//     console.log(`${fileName}: ${period}`);

//     setTimeout(() => {
//       fs.readFile(fileName, "utf-8", (err, data) => {
//         err ? onRejected(err) : onFulfilled([fileName, data]);
//       });
//     }, period);
//   });
// }

// let selected;
// Promise.race([readFile("a.txt"), readFile("b.txt"), readFile("c.txt")])
//   .then(function(results) {
//     selected = results[0];
//     return writeFile("d.txt", results[1]);
//   })
//   .then(function(mes) {
//     console.log(`ファイル${selected}の内容が書き込まれました。\n---`);
//   })
//   .catch(err => {
//     console.log("エラーが起こりました:" + err);
//   })


// 14.3.6

function countdown(seconds) {
  return new Promise(function(onFulfilled, onRejected) {
    const timeoutIds = [];
    for(let i=seconds; i>=0; i--) {
      timeoutIds.push(setTimeout(
        function() {
          if (i === 13) {
            timeoutIds.forEach(clearTimeout);
            onRejected(new Error(`${i}という数は不吉過ぎます`));
          } else if (i>0) {
            console.log(i + '...');
          } else {
            console.log("GO!");
            onFulfilled();
          }
        },
        (seconds-i)*1000))
    }
  });
}

function launch() {
  return new Promise(function(onFulfilled, onRejected) {
    if (Math.random() < 0.5) return;

    console.log("発射!");
    setTimeout(function() {
      onFulfilled("周回軌道に乗った!");
    }, 2*1000);
  });
}

function addTimeout(fn, period) {
  if (period === undefined) {
    period = 1000;
  }

  return function(...args) {
    return new Promise(function(onFulfilled, onRejected) {
      const timeoutId = setTimeout(onRejected, period, new Error("プロミス タイムアウト"));
      fn(...args)
        .then(function(...args) {
          clearTimeout(timeoutId);
          onFulfilled(...args);
        })
        .catch(function(...args) {
          clearTimeout(timeoutId);
          onRejected(...args);
        });
    });
  }
}

countdown(3)
  .then(addTimeout(launch, 4*1000))
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.error("管制塔、管制塔。トラブル発生... " + err.message);
  });