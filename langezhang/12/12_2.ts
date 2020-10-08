export function exist(board: string[][], word: string): boolean {
  function dfs(curX: number, curY: number, letterNum: number): boolean {
    let result: boolean = true;
    if (
      curX < 0 ||
      curX >= board[0].length ||
      curY < 0 ||
      curY >= board.length ||
      word[letterNum] !== board[curY][curX]
    ) {
      return false;
    }
    let temp: string = board[curY][curX];
    board[curY][curX] = '...';
    if (letterNum !== word.length - 1) {
      result =
        dfs(curX + 1, curY, letterNum + 1) ||
        dfs(curX, curY + 1, letterNum + 1) ||
        dfs(curX - 1, curY, letterNum + 1) ||
        dfs(curX, curY - 1, letterNum + 1);
    }
    board[curY][curX] = temp;
    return result;
  }
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (dfs(x, y, 0)) {
        return true;
      }
    }
  }
  return false;
}
console.log(exist([['a', 'a']], 'aaa'));
