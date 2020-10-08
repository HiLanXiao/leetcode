export class CQueue {
  stack: number[];
  constructor() {
    this.stack = [];
  }

  appendTail(value: number): void {
    this.stack.push(value);
  }

  deleteHead(): number {
    if (this.stack.length > 0) {
      return <number>this.stack.shift();
    } else {
      return -1;
    }
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
