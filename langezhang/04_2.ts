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
