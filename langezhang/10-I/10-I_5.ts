export function fib(n: number): number {
  let array: number[] = [0, 1];
  function fibna(num: number): number {
    if (array[num] === undefined) {
      array[num] = (fibna(num - 1) + fibna(num - 2)) % 1000000007;
    }
    return array[num];
  }
  return fibna(n);
}

console.log(fib(4));
