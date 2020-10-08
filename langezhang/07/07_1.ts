import { TreeNode } from './TreeNode';

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }
  let head: TreeNode = new TreeNode(preorder[0]);
  let mid: number = inorder.indexOf(head.val);
  if (preorder.length > 1 || inorder.length > 1) {
    head.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    head.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  }
  return head;
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
