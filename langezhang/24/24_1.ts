export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function flip(head: ListNode | null, result: ListNode | null): ListNode | null {
  if (head !== null && head.next !== null) {
    let node = <ListNode>flip(head.next, result);
    node.next = head;
    return node.next;
  } else {
    if (result) {
      result.next = head;
    }
    return head;
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  let nextTemp: ListNode | null = head && head.next,
    result: ListNode = new ListNode();
  if (head) {
    if (!head.next) {
      return head;
    }
    head.next = null;
  }
  let flipRes = flip(nextTemp, result);
  if (flipRes) {
    flipRes.next = head;
  }
  return result.next;
}

let a = new ListNode(1);
let b = new ListNode(2, a);
let c = new ListNode(3, b);
// let d = new ListNode(4, c);
console.log(reverseList(c));
