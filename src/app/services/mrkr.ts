export const mrkr = (secs: number): string => {
  if (secs === undefined || secs === null) {
    return secs as any;
  }
  const m = Math.floor(secs / 60);
  let s: any = Math.floor(secs % 60);
  if (s < 10) {
    s = `0${s}`;
  }
  return `${m}:${s}`;
}
