export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reversePrint(head: ListNode | null): number[] {
  let result: number[] = [];
  if (head) {
    if (head.next) {
      result = reversePrint(head.next);
    }
    result.push(head.val);
  }
  return result;
}
