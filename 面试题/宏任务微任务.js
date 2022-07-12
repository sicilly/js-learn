// 1 9 7 8 2 3 10 11 12 13

console.log(1)  // 同步
setTimeout(function() {
  console.log(2) // 加入宏任务
}, 0);
const intervalId = setInterval(function() {
  console.log(3) // 加入宏任务
}, 0)
setTimeout(function() {  // 加入宏任务
  console.log(10)  // 同步
  new Promise(function(resolve) {
    console.log(11)  // 同步
    resolve()
  })
  .then(function() {
    console.log(12)   // 加入微任务
  })
  .then(function() {
    console.log(13)  // 加入微任务
    clearInterval(intervalId)
  })
}, 0);

//promise2
Promise.resolve()
  .then(function() {  // 加入微任务
    console.log(7)
  })
  .then(function() { // 加入微任务
    console.log(8)
  })
console.log(9)  // 同步
