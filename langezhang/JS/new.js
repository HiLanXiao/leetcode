// 先思考一下 new 的过程
// 首先是创建一个实例对象
// 将构造函数的 this 指到这个实例对象上
// 执行构造函数
// 将这个实例对象的原型对象指到构造函数的原型对象
function myNew(constructor, ...params) {
  let targetObj = new Object();
  let funcResultObj = constructor.call(targetObj, ...params);
  let finalResult = typeof funcResultObj === 'object' ? funcResultObj : targetObj;
  Object.setPrototypeOf(finalResult, constructor.prototype);
  return finalResult;
}

function testConstructor(a) {
  this.a = a;
  return {};
}

testConstructor.prototype.b = 2;

let a = myNew(testConstructor, 1);
console.log(a, a.b);

// 如果构造函数并没有返回一个对象，那么用 Object.create 可以同时实现 “创建实例对象” 和 “绑定原型对象”
