"use strict";
exports.__esModule = true;
exports.buildTree = void 0;
var TreeNode_1 = require("./TreeNode");
function buildTree(preorder, inorder) {
    var head = new TreeNode_1.TreeNode(preorder[0]);
    var mid = inorder.indexOf(head.val);
    if (preorder.length > 1 || inorder.length > 1) {
        head.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
        head.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    }
    return head;
}
exports.buildTree = buildTree;
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
