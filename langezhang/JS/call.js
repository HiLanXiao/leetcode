let testObj = {
  a: 1,
};
function testFunc() {
  console.log(111);
  1;
}

// 注意传入上下文如果是 null 或者 undefined 要绑成 window
Function.prototype.myCall = function (context = window, ...params) {
  let originFunc = this;

  context.originFunc = originFunc;
  context.originFunc(...params);
  delete context.originFunc;
};
