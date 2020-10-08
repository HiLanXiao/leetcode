class CQueue {
  private main: number[];
  private sub: number[];
  constructor() {
    this.main = [];
    this.sub = [];
  }

  appendTail(value: number): void {
    this.main.push(value);
  }

  deleteHead(): number {
    if (this.sub.length > 0) {
      return <number>this.sub.pop();
    }
    while (this.main.length > 0) {
      this.sub.push(<number>this.main.pop());
    }
    if (this.sub.length > 0) {
      return <number>this.sub.pop();
    }
    return -1;
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
