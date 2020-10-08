export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let node = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return node;
}
