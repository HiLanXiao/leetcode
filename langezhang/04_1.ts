export function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  for (let nums of matrix) {
    if (nums[nums.length - 1] < target || nums[0] > target) {
      continue;
    }
    for (let num of nums) {
      if (num === target) {
        return true;
      }
    }
  }
  return false;
}
