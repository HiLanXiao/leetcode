export function fib(n: number): number {
  let pre: number = 0,
    cur: number = 1,
    temp: number = 1;
  for (let i = 0; i < n; i++) {
    temp = cur;
    cur = (pre + cur) % 1000000007;
    pre = temp;
  }
  return pre;
}

console.log(fib(81));
