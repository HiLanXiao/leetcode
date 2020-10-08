Function.prototype.myBind = function (context, ...parameters) {
  let originFunc = this;
  return function () {
    originFunc.call(context, ...parameters);
  };
};

// 思考一个问题，当这个函数是个构造函数的时候，bind 函数会忽略传入的 this

Function.prototype.myBindNew = function (context, ...firstParameters) {
  let originFunc = this;
  return function (secondParameters) {
    originFunc.call(
      context instanceof originFunc ? originFunc : context,
      ...firstParameters,
      ...secondParameters,
    );
  };
};

// 上面这段代码存在两个问题，新返回的这个函数并未跟 originFunc 构造函数的原型对象一致
// 而且作为构造函数时 this 绑错了。。 this 不应该是指向调用函数，而是应该用函数调用时 new 赋予的新实例对象。。
// 再思考一个问题，为什么这里要用 “context instanceof originFunc” 来判断是做构造函数的调用呢，那必然是因为写错了... 显然应该用 this 的指向来判断，构造函数在 new 调用时的时候，特别的点就是 this 的指向被绑到了一个新的实例对象上。。
// 顺手实现一个 instanceof
function myInstanceof(instacneObject, constructorFunc) {
  let instanceConstructorFunc = instacneObject.__proto__;
  while (instanceConstructorFunc !== null) {
    if (instanceConstructorFunc === constructorFunc.prototype) {
      return true;
    }
    instanceConstructorFunc = instanceConstructorFunc.__proto__;
  }
}

Function.prototype.myBindNewFixed = function (context, ...firstParameters) {
  let originFunc = this;
  let resultFunc = function (secondParameters) {
    originFunc.call(
      this instanceof resultFunc ? this : context,
      ...firstParameters,
      ...secondParameters,
    );
  };
  Object.setPrototypeOf(resultFunc, originFunc.prototype);
};
