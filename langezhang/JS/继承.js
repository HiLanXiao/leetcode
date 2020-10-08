function Parent(name) {
  this.name = name;
}

Parent.prototype.sayHello = () => {
  console.log('sayHello');
};

function Child(name, gender) {
  Parent.call(this, name);
  this.gender = gender;
}

Object.setPrototypeOf(Child, Parent);

let child = new Child('langeZhang', 'male');
console.log(child.constructor === Child, child.constructor === Parent);
