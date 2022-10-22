export function mppmLongClick(node) {

  let hadLong = false;
  let longPressTimer;

  function fire(type: string) {
    node.dispatchEvent(new CustomEvent(type));
  }

  function event(down: boolean) {
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

    return false;
  }

  const listeners: [string, () => void][] = [
    ['mousedown', () => event(true)],
    ['mouseup', () => event(false)],
    ['touchstart', () => event(true)],
    ['touchend', () => event(false)]
  ];

  listeners.forEach(([type, f]) => node.addEventListener(type, f, true));

  return {
    destroy() {
      listeners.forEach(([type, f]) => node.removeEventListener(type, f, true));
    }
  };
}
