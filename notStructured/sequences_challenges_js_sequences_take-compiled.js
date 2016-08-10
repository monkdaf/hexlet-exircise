/**
 * Created by daf on 11.07.2016.
 */

/**
 * Задание
 *
 Реализуйте и экспортируйте функцию take, которая возвращает первые n элементов списка.

 take(3, l()); // ()
 take(3, l(1, 2)); // (1, 2)
 take(1, l(7, 2)); // (7)
 */

/**
 * Решение учителя
 *
 // BEGIN
 export const take = (count, list) => {
  if (isEmpty(list) || count === 0) {
    return l();
  }

  return cons(head(list), take(count - 1, tail(list)));
};
 // END
 */

/**
 * Моё решение
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hexletPairsData = require('hexlet-pairs-data');

// BEGIN (write your solution here)
var take = function take(n, list) {
  var reverse = function reverse(list) {
    var reverseIter = function reverseIter(_x, _x2) {
      var _again = true;

      _function: while (_again) {
        var subList = _x,
            acc = _x2;
        _again = false;

        if ((0, _hexletPairsData.isEmpty)(subList)) return acc;
        _x = (0, _hexletPairsData.tail)(subList);
        _x2 = (0, _hexletPairsData.cons)((0, _hexletPairsData.head)(subList), acc);
        _again = true;
        continue _function;
      }
    };
    return reverseIter(list, (0, _hexletPairsData.l)());
  };

  var iter = function iter(_x3, _x4, _x5) {
    var _again2 = true;

    _function2: while (_again2) {
      var count = _x3,
          tailList = _x4,
          acc = _x5;
      _again2 = false;

      if (count >= n || (0, _hexletPairsData.isEmpty)(tailList)) {
        return acc;
      }
      count++;
      var newAcc = (0, _hexletPairsData.cons)((0, _hexletPairsData.head)(tailList), acc);
      _x3 = count;
      _x4 = (0, _hexletPairsData.tail)(tailList);
      _x5 = newAcc;
      _again2 = true;
      newAcc = undefined;
      continue _function2;
    }
  };
  return reverse(iter(0, list, (0, _hexletPairsData.l)()));
};
exports.take = take;
// END

//# sourceMappingURL=sequences_challenges_js_sequences_take-compiled.js.map