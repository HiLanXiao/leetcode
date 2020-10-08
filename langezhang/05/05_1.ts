export function replaceSpace(s: string): string {
  s = s.split(' ').join('%20');
  return s;
}
