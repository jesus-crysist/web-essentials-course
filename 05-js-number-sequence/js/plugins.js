// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
// https://en.wikipedia.org/wiki/Binary_GCD_algorithm
function gcd(u, v) {

  if (u === v) {
    return u;
  }

  if (u === 0) {
    return v;
  }

  if (v === 0) {
    return u;
  }

  if (~u & 1) { // a is even

    if (v & 1) { // b is odd
      return gcd(u >> 1, v);
    } else { // both u and v are even
      return gcd(u >> 1, v >> 1) << 1;
    }
  }

  if (~v & 1) { // a is odd, b is even
    return gcd(u, v >> 1);
  }

  // reduce larger argument
  if (u > v) {
    return gcd((u - v) >> 1, v);
  }

  return gcd((v - u) >> 1, u);
}
