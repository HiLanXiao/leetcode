export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = head,
    cur: ListNode | null = head && head.next,
    next: ListNode | null = cur && cur.next;
  while (cur) {
    cur.next = pre;
    pre = cur;
    cur = next;
    next = next && next.next;
  }
  if (head) {
    head.next = null;
  }
  return pre;
}
