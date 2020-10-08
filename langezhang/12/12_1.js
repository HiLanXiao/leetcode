"use strict";
exports.__esModule = true;
exports.goToNext = exports.findNext = exports.exist = void 0;
function exist(board, word) {
    var _a, _b, _c;
    var pre = [0, 0], preLetterNumber = 0, cur = [0, 0], letterNum = 0, history = [], curX = -1, curY = -1;
    while ((cur = goToNext(curX + 1, curY + 1, word[letterNum], board))) {
        letterNum++;
        if (letterNum === word.length) {
            console.log(letterNum);
            return true;
        }
        _a = cur, curX = _a[0], curY = _a[1];
        history.push(curX + "-" + curY);
        var findNextResult = [], preFindNextResult = [];
        while (preFindNextResult.length > 0 ||
            (findNextResult = findNext(curX, curY, word[letterNum], board, history))) {
            letterNum++;
            pre = [curX, curY];
            if (preFindNextResult.length === 0) {
                _b = findNextResult.pop(), curX = _b[0], curY = _b[1];
                history.push(curX + "-" + curY);
                preFindNextResult = [];
            }
            else {
                _c = preFindNextResult.pop(), curX = _c[0], curY = _c[1];
                history.push(curX + "-" + curY);
                findNextResult = [];
            }
            if (findNextResult.length > 0) {
                preFindNextResult = findNextResult;
            }
            if (letterNum === word.length) {
                console.log(444, letterNum);
                return true;
            }
        }
        curX = pre[0], curY = pre[1];
        letterNum--;
        history.pop();
    }
    console.log(curX, curY, letterNum, history);
    return false;
}
exports.exist = exist;
function findNext(curX, curY, letter, board, history) {
    var temp = [], result = [];
    temp.push([curX, curY - 1], [curX - 1, curY], [curX, curY + 1], [curX + 1, curY]);
    for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
        var i = temp_1[_i];
        var x = i[0], y = i[1];
        if (board[y] && board[y][x] === letter && history.indexOf(x + "-" + y) === -1) {
            result.push([x, y]);
        }
    }
    return result.length > 0 ? result : false;
}
exports.findNext = findNext;
function goToNext(curX, curY, letter, board) {
    while (curY < board.length) {
        while (board[curY] && curX < board[curY].length) {
            if (board[curY][curX] === letter) {
                return [curX, curY];
            }
            curX++;
        }
        curY++;
        curX = 0;
    }
    return false;
}
exports.goToNext = goToNext;
console.log(exist([
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
], 'ABCB'));
