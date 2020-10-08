"use strict";
exports.__esModule = true;
exports.reverseList = exports.flip = exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
function flip(head, result) {
    if (head !== null && head.next !== null) {
        var node = flip(head.next, result);
        node.next = head;
        return node.next;
    }
    else {
        if (result) {
            result.next = head;
        }
        return head;
    }
}
exports.flip = flip;
function reverseList(head) {
    var nextTemp = head && head.next, result = new ListNode();
    if (head) {
        if (!head.next) {
            return head;
        }
        head.next = null;
    }
    var flipRes = flip(nextTemp, result);
    if (flipRes) {
        flipRes.next = head;
    }
    return result.next;
}
exports.reverseList = reverseList;
var a = new ListNode(1);
var b = new ListNode(2, a);
var c = new ListNode(3, b);
// let d = new ListNode(4, c);
console.log(reverseList(c));
