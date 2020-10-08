"use strict";
exports.__esModule = true;
exports.exist = void 0;
function exist(board, word) {
    function dfs(curX, curY, letterNum) {
        var result = true;
        if (curX < 0 ||
            curX >= board[0].length ||
            curY < 0 ||
            curY >= board.length ||
            word[letterNum] !== board[curY][curX]) {
            return false;
        }
        var temp = board[curY][curX];
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
    for (var y = 0; y < board.length; y++) {
        for (var x = 0; x < board[0].length; x++) {
            if (dfs(x, y, 0)) {
                return true;
            }
        }
    }
    return false;
}
exports.exist = exist;
console.log(exist([['a', 'a']], 'aaa'));
