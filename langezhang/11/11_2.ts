export function minArray(numbers: number[]): number {
  let left: number = 0,
    right: number = numbers.length;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (numbers[mid] < numbers[right]) {
      right = mid;
    } else if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else {
      right--;
    }
  }
  return numbers[left];
}
console.log(minArray([4, 5, 6, 7, 1, 2]));
