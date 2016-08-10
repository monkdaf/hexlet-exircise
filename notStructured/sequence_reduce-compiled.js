/**
 * Created by daf on 01.07.2016.
 */

/**
 * Задание
 Реализуйте и экспортируйте функцию reduce для библиотеки html-tags:

 import { node, append, make, reduce } from 'hexlet-html-tags';

 const html1 = append(make(), node('h1', 'header1'));
 const html2 = append(html1, node('h1', 'header2'));
 const html3 = append(html2, node('p', 'content'));

 reduce((element, acc) => {
  return is('h1', element) ? acc + 1 : acc;
}, 0, html3); // 2
 Реализуйте и экспортируйте функцию emptyTagsCount, которая считает количество пустых тегов. Тип тега задается первым параметром функции.

 import { toString } from 'hexlet-pairs-data';
 import { make, append, node } from 'hexlet-html-tags';

 const html1 = make();
 const html2 = append(html1, node('h1', 'scheme'));
 const html3 = append(html2, node('p', 'is a lisp'));
 const html4 = append(html3, node('blockquote', ''));
 const html5 = append(html4, node('blockquote', ''));
 const html6 = append(html5, node('blockquote', 'quote'));

 headersCount('blockquote', html6); //2
 */

/**
 * Решение учителя
 *
 // BEGIN
 export const reduce = (func, acc, elements) => {
  const iter = (items, result) => {
    if (isEmpty(items)) {
      return result;
    }

    return iter(tail(items), func(head(items), result));
  };
  return iter(elements, acc);
};

 export const emptyTagsCount = (tagName, elements) => {
  const predicate = element => is(tagName, element) && value(element) === '';
  const filtered = filter(predicate, elements);
  return reduce((element, acc) => acc + 1, 0, filtered);
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

var _hexletHtmlTags = require('hexlet-html-tags');

// BEGIN (write your solution here)
var reduce = function reduce(func, startVal, elements) {
  var iter = function iter(_x, _x2) {
    var _again = true;

    _function: while (_again) {
      var currElements = _x,
          val = _x2;
      _again = false;

      if ((0, _hexletPairsData.isEmpty)(currElements)) return val;
      _x = (0, _hexletPairsData.tail)(currElements);
      _x2 = func((0, _hexletPairsData.head)(currElements), val);
      _again = true;
      continue _function;
    }
  };
  return iter(elements, startVal);
};

exports.reduce = reduce;
var emptyTagsCount = function emptyTagsCount(tag, dom) {
  return reduce(function (element, acc) {
    var lAcc = acc;
    if ((0, _hexletHtmlTags.name)(element) === tag && (0, _hexletHtmlTags.value)(element) === '') {
      lAcc += 1;
    }
    return lAcc;
  }, 0, dom);
};
exports.emptyTagsCount = emptyTagsCount;
// END

var headersCount = function headersCount(tagName, elements) {
  var iter = function iter(_x3, _x4) {
    var _again2 = true;

    _function2: while (_again2) {
      var items = _x3,
          acc = _x4;
      _again2 = false;

      if ((0, _hexletPairsData.isEmpty)(items)) {
        return acc;
      }

      var item = (0, _hexletPairsData.head)(items);
      var newAcc = (0, _hexletHtmlTags.is)(tagName, item) ? acc + 1 : acc;
      _x3 = (0, _hexletPairsData.tail)(items);
      _x4 = newAcc;
      _again2 = true;
      item = newAcc = undefined;
      continue _function2;
    }
  };
  return iter(elements, 0);
};
exports.headersCount = headersCount;

//# sourceMappingURL=sequence_reduce-compiled.js.map