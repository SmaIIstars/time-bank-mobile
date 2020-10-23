export function debounce(func, delay = 500) {
  var timer = null;

  return function(...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
