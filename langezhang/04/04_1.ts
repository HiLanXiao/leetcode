export let iii: number = 0;
export function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  for (let nums of matrix) {
    if (nums[nums.length - 1] < target || nums[0] > target) {
      continue;
    }
    for (let num of nums) {
      iii++;
      if (num === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(
  findNumberIn2DArray(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5,
  ),
  iii,
);
