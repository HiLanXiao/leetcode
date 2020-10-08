"use strict";
exports.__esModule = true;
exports.reverseList = exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
function reverseList(head) {
    var pre = head, cur = head && head.next, next = cur && cur.next;
    while (cur) {
        cur.next = pre;
        pre = cur;
        cur = next;
        next = next && next.next;
    }
    if (head) {
        head.next = null;
    }
    return cur;
}
exports.reverseList = reverseList;
