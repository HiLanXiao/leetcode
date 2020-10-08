export function minArray(numbers: number[]): number {
  if (numbers.length === 1) {
    return numbers[0];
  }
  let pre = 0,
    cur = 1;
  while (numbers[pre] <= numbers[cur]) {
    pre++;
    cur++;
    if (numbers[cur] === undefined) {
      return numbers[0];
    }
  }
  return numbers[cur];
}
