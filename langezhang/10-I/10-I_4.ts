export function fib(n: number): number {
  let array: number[] = [];
  array[0] = 0;
  array[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    array[i] = (array[i - 1] + array[i - 2]) % 1000000007;
  }
  return array[n];
}

console.log(fib(81));
