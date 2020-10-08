export function replaceSpace(s: string): string {
  return s.replace(new RegExp(' ', 'g'), '%20');
}
