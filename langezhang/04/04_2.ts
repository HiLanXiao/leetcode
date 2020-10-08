export let iii: number = 0;
export function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  for (let nums of matrix) {
    if (nums[nums.length - 1] < target || nums[0] > target) {
      continue;
    }
    if (bs(nums, target)) {
      return true;
    }
  }
  return false;
}

export function bs(nums: number[], target: number): boolean {
  let i: number = 0,
    y: number = nums.length;
  while (i < y) {
    iii++;
    let temp = nums[(y + i) >> 1];
    if (temp === target) {
      return true;
    } else if (temp < target) {
      i = ((y + i) >> 1) + 1;
    } else {
      y = (y + i) >> 1;
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
