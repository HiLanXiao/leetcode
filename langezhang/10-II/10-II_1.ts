export function numWays(n: number): number {
  let store: number[] = [1, 1, 2];
  function countNumWays(n: number): number {
    if (store[n] === undefined) {
      store[n] = countNumWays(n - 1) + countNumWays(n - 2);
    }
    return store[n];
  }
  return countNumWays(n);
}
console.log(numWays(3));
