// console.log('script start');

// async function async1() {
//   await async2();
//   console.log('async1 end');
// }

// async function async2() {
//   console.log('async2 end');
// }
// async1();

// setTimeout(function () {
//   console.log('setTimeout');
// }, 0);

// new Promise((resolve) => {
//   console.log('Promise');
//   resolve();
// })
//   .then(function () {
//     console.log('promise1');
//   })
//   .then(function () {
//     console.log('promise2');
//   });

// console.log('script end');

// // 我的判断：script start -> async2 end -> Promise -> script end -> async1 end -> promise1 -> promise2 -> setTimeout
// // 旧版输出如下：
// //          script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout
// // 新版符合自己的判断
// // 旧版里面实际效果相当于
// async function async1() {
//   new Promise((resolve) => {
//     resolve(async2());
//   }).then((res) => {
//     console.log('async1 end');
//   });
// }
// // 因为 async2() 返回 promsie，所以进一步转化就是
// async function async1() {
//   new Promise((resolve) => {
//     Promise.resolve().then(() => {
//       async2().then(resolve);
//     });
//   }).then((res) => {
//     console.log('async1 end');
//   });
// }

// 而在新版本里， async1 会被解析成：
// async function async1() {
//   console.log('a');
//   Promise.resolve(async2()).then((res) => {
//     console.log('b');
//   });
// }
// 可以看出 async2 不是在 new Promsie 的 resolve 中执行了，而是在 Promise.resolve 中传入执行的
// 因为 Promise.resolve 在接收到一个 Promise 对象的时候，会直接返回这个 Promise 对象，相当于针对 async2 这种情况减少了一个 trick

// output: 666 -> numebr;
// 如果 resolve 的是一个 promise，那么会先等待这个 promise 完成之后，再进行后面的操作，其中会有一个 promise
// --------------------------
// new Promise((resolve) => {
//   resolve(
//     new Promise((resolve) => {
//       resolve(1);
//     }),
//   );
// }).then((res) => {
//   console.log(typeof res);
// });
// new Promise((resolve) => {
//   resolve();
// }).then((res) => {
//   console.log(666);
// });

// 如果 Promise.prototype.then 接收的不是两个函数，而是其他的东东（比如一行代码 console.log(666)）
// 算了直接套官方的解释吧
// “注意：如果忽略针对某个状态的回调函数参数，或者提供非函数 (nonfunction) 参数
// 那么 then 方法将会丢失关于该状态的回调函数信息，但是并不会产生错误。
// 如果调用 then 的 Promise 的状态（fulfillment 或 rejection）发生改变，但是 then 中并没有关于这种状态的回调函数，
// 那么 then 将创建一个没有经过回调函数处理的新 Promise 对象，
// 这个新 Promise 只是简单地接受调用这个 then 的原 Promise 的终态作为它的终态”
// 大概就是，你传一行代码进去，状态变了，引擎帮你新建一个 Promise 对象，状态跟前面的 promise 对象一致，如果是一行代码，绝壁就是在 new 这个新的 Promise 对象的过程中执行了
// 如果你 return 的是个 Promise 对象，那么这个引擎帮忙建的 Promise 的状态同步对象是 return 这个 Promise
// 正因为有这种引擎帮忙创建 Promise 的过程，才能使这条 Promise 对象链延续不断
// --------------------------
// output: 777 -> 666 -> 888
// new Promise((resolve) => {
//   resolve();
// }).then((res) => {
//   console.log(666);
// });
// Promise.resolve().then(console.log(777));
// Promise.resolve().then(() => {
//   console.log(888);
// });

// .then 不能按放入回调函数数组来理解，因为它实际上是在新创建 Promise
//（如果这个过程中有函数返回的 Promise，可以按 “插入自动生成的 Promise 链中间的 Promise 理解”），
// --------------------------
// output: false
// let a = Promise.resolve();
// let b = a.then(() => {});
// console.log(a === b);

// new Promise((resolve) => {
//   resolve();
// })
//   .then(() => {})
//   .then((res) => {
//     console.log(666);
//   });
// Promise.resolve().then(console.log(777));
// Promise.resolve().then(() => {
//   console.log(888);
// });

// new Promise((resolve) => {
//   resolve();
// }).then(() => {
//   console.log(111);
// });

// 注解一下
// resolve 一个 promise 的时候发生了什么

// new Promise((resolve) => {
//   resolve(
//     new Promise((resolve) => {
//       resolve(1);
//     }).then((res) => {
//       console.log(res);
//       return 2;
//     }),
//   );
// }).then((res) => {
//   console.log(res);
// });

// Promise.resolve()
//   .then(() => {
//     console.log(666);
//   })
//   .then(() => {
//     console.log(666);
//   });
// console.log(0);

// Promise.resolve 接收一个 thenable 对象时的情况
// output: 111 -> test
// let testObj = {
//   then: function () {
//     console.log('test');
//   },
// };
// console.log(Promise.resolve(testObj));
// console.log(111);

// 实现一个 allSettled
// function myAllSettled(...promises) {
//   return new Promise((resolve, reject) => {
//     let promiseNum = promises.length,
//       result = 0;
//     for (let promise of promises) {
//       promise
//         .then(() => {
//           if (++result === promiseNum) {
//             resolve();
//           }
//         })
//         .catch(() => {
//           if (++result === promiseNum) {
//             resolve();
//           }
//         });
//     }
//   });
// }

// let promiseA = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('promiseA');
//     resolve();
//   }, 5000);
// });

// let promiseB = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('promiseB');
//     resolve();
//   }, 5000);
// });

// Promise.allSettled([promiseA, promiseB])
//   .then(() => {
//     console.log(111);
//   })
//   .catch(() => {
//     console.log(222);
//   });

// 对比下箭头函数与 function 声明的函数
// let b = this;
// let a = {
//   a: 1,
//   testFuncA: () => {
//     console.log(this === b);
//   },
//   testFuncB: function () {
//     console.log(this.a);
//   },
// };

// a.testFuncA();
// a.testFuncB();

// Promise.prototype.myCatch = function (callback) {
//   return this.then(null, callback);
// };

// 第一版有漏洞的 finally 实现
// Promise.prototype.myFinally = function (callback) {
//   return this.then(callback, callback);
// };

// let promiseA = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('promiseA');
//     resolve(2);
//   }, 2000);
// });

// let promiseB = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('promiseB');
//     resolve();
//   }, 5000);
// });

// promiseA
//   .myFinally((res) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log(res);
//         resolve(1);
//       }, 2000);
//     });
//   })
//   .then((res) => {
//     console.log(res);
//   });

// promiseB.myFinally(() => {
//   console.log('promiseB finished');
// });

// 从这里我们可以发现直接调用 then 方法的话，接收不到 promise 链式传递的 result，所以得改进下
// Promise.resolve(2)
//   .myFinally(() => {})
//   .then((res) => {
//     console.log(res);
//   });

// output 都是: 2，证明 finally 不会影响 promise 链的 result 和 err 传递，他只是起个在中间执行一段代码的媒介作用
// Promise.resolve(2)
//   .finally(() => Promise.resolve(1))
//   // .finally(() => 1)
//   .then((res) => {
//     console.log(res);
//   });

// output: Error gg
// Promise.reject(new Error('dd'))
//   .finally(() => {
//     throw new Error('gg');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// output: Error gg
// new Promise((resolve, reject) => {
//   let a = c;
// })
//   .finally(() => {
//     throw new Error('gg');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 利用 Promise.resolve 在一个新的 Promise 对象中执行 callback，并把这个 Promise 对象返回，然后接上之前的 Promise 链
// Promise.prototype.myFinally = function (callback) {
//   return this.then(
//     (res) => {
//       return Promise.resolve(callback()).then(() => res);
//     },
//     (err) => {
//       return Promise.resolve(callback()).then(() => {
//         throw err;
//       });
//     },
//   );
// };
