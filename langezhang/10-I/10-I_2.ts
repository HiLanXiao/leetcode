export function fib(n: number): number {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let pre: number = 0,
    cur: number = 1,
    temp: number = 1;
  for (let i = 0; i < n - 1; i++) {
    temp = cur;
    cur = (pre + cur) % 1000000007;
    pre = temp;
  }
  return cur;
}

console.log(fib(81));
