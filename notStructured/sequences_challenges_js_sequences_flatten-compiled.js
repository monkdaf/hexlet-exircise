/**
 * Created by daf on 11.07.2016.
 */

/**
 * Задание
 *
 Реализуйте и экспортируйте функцию flatten, которая делает плоским вложенный список.

 const list = l(1, 2, l(3, 5), l(l(4, 3), 2));

 // (1, 2, 3, 5, 4, 3, 2)
 flatten(list);
 */

/**
 * Решение учителя
 solution.js
 // BEGIN
 export const flatten = (list) => {
  if (!isList(list)) {
    return list;
  }
  const newList = reduce((element, result) => {
    if (isList(element)) {
      const flattenedList = flatten(element);
      return reduce((item, acc) => cons(item, acc), result, flattenedList);
    }
    return cons(element, result);
  }, l(), list);

  return reverse(newList);
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
var flatten = function flatten(lists) {
  var iter = function iter(list, acc) {
    return (0, _hexletPairsData.reduce)(function (item, accItem) {
      return (0, _hexletPairsData.isList)(item) ? iter(item, accItem) : (0, _hexletPairsData.cons)(item, accItem);
    }, acc, list);
  };
  return (0, _hexletPairsData.reverse)(iter(lists, (0, _hexletPairsData.l)()));
};
exports.flatten = flatten;
// END

//# sourceMappingURL=sequences_challenges_js_sequences_flatten-compiled.js.map