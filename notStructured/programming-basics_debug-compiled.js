/**
 * Created by daf on 29.06.2016.
 */

/**
 * Задание
 */

/**
 * Решение учителя
 *
 const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

 export default gcd;
 */

/**
 * моё решение
 */

// BEGIN (write your solution here)

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (a, b) {

  // Реализуем алгоритм рекурсия и остатки
  var gcdRecursionRemains = function gcdRecursionRemains(_x, _x2) {
    var _again = true;

    _function: while (_again) {
      var m = _x,
          n = _x2;
      _again = false;

      if (n === 0) {
        return m < 0 ? m * -1 : m;
      }
      _x = n;
      _x2 = m % n;
      _again = true;
      continue _function;
    }
  };

  // Реализуем бинарный алгоритм
  var gcdBin = function gcdBin(_x3, _x4) {
    var _again2 = true;

    _function2: while (_again2) {
      var m = _x3,
          n = _x4;
      _again2 = false;

      console.log("m=" + m + " n=" + n);
      if (m === 0) {
        console.log(1);
        return n;
      }
      if (n === 0) {
        console.log(2);
        return m;
      }
      if (m === n) {
        console.log(3);
        return m;
      }
      if (isEven(m) && isEven(n)) {
        console.log(4);
        return 2 * gcdBin(m / 2, n / 2);
      }
      if (isEven(m) && !isEven(n)) {
        console.log(5);
        _x3 = m / 2;
        _x4 = n;
        _again2 = true;
        continue _function2;
      }
      if (!isEven(m) && isEven(n)) {
        console.log(5.1);
        _x3 = m;
        _x4 = n / 2;
        _again2 = true;
        continue _function2;
      }
      if (!isEven(m) && !isEven(n) && n > m) {
        console.log(6);
        _x3 = m;
        _x4 = (n - m) / 2;
        _again2 = true;
        continue _function2;
      }
      if (!isEven(m) && !isEven(n) && n < m) {
        console.log(7);
        _x3 = (m - n) / 2;
        _x4 = n;
        _again2 = true;
        continue _function2;
      }
    }
  };
  var isEven = function isEven(n) {
    return n % 2 === 0;
  };

  //return gcdBin(a,b);
  return gcdRecursionRemains(a, b);
};

// END
module.exports = exports["default"];

//# sourceMappingURL=programming-basics_debug-compiled.js.map