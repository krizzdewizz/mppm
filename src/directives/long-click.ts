export function mppmLongClick(node) {

  let hadLong = false;
  let longPressTimer;

  function fire(type: string) {
    node.dispatchEvent(new CustomEvent(type));
  }

  function event(e: MouseEvent, down: boolean) {
    if (down) {
      hadLong = false;
      longPressTimer = setTimeout((() => {
        hadLong = true;
        fire('mppmClickLong');
      }), 500);
    } else {
      clearTimeout(longPressTimer);
      if (!hadLong) {
        fire('mppmClick');
      }
      fire('mppmClickEnd');
    }

    e.preventDefault();

    return false;
  }

  const listeners: [string, (e: MouseEvent) => boolean][] = [
    ['mousedown', e => event(e, true)],
    ['mouseup', e => event(e, false)],
    ['touchstart', e => event(e, true)],
    ['touchend', e => event(e, false)]
  ];

  listeners.forEach(([type, f]) => node.addEventListener(type, f, true));

  return {
    destroy() {
      listeners.forEach(([type, f]) => node.removeEventListener(type, f, true));
    }
  };
}
