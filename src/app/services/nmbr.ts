export function nmbr(n: number): string {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2 });
}
