/**
 * Created by daf on 25.06.2016.
 */

/**
 * Задание
 * Реализуйте функцию filter для библиотеки html-tags, используя итеративный процесс:

 import { node, append, make, filter } from 'hexlet-html-tags';

 const html1 = append(make(), node('h1', 'header1'));
 const html2 = append(html1, node('h1', 'header2'));
 const html3 = append(html2, node('p', 'content'));

 const processedHtml = filter((element) =>
 !is('h1', element), html3);

 //<p>content</p>
 toString(processedHtml);
 Реализуйте функцию quotes, которая извлекает из html тексты цитат и возвращает список цитат.

 import { toString } from 'hexlet-pairs-data';
 import { make, append, node } from 'hexlet-html-tags';

 const dom1 = make();
 const dom2 = append(dom1, node('h1', 'scheme'));
 const dom3 = append(dom2, node('p', 'is a lisp'));
 const dom4 = append(dom3, node('blockquote', 'live is live'));
 const dom5 = append(dom4, node('blockquote', 'i am sexy, and i know it'));

 toString(quotes(dom5)); // ('i am sexy, and i know it', 'live is live');
 */

/**
 * Решение учителя
 * // BEGIN
 export const filter = (func, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    const item = head(items);
    const newAcc = func(item) ? cons(item, acc) : acc;
    return iter(tail(items), newAcc);
  };

  return iter(elements, l());
};

 export const quotes = (elements) => {
  const filtered = filter(element => name(element) === 'blockquote', elements);
  return map(element => value(element), filtered);
};
 // END
 */

/**
 * Моё решение
 *
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hexletPairsData = require('hexlet-pairs-data');

var _hexletHtmlTags = require('hexlet-html-tags');

// BEGIN (write your solution here)
var filter = function filter(func, dom) {

  var iter = function iter(_x, _x2) {
    var _again = true;

    _function: while (_again) {
      var domCurr = _x,
          domNew = _x2;
      _again = false;

      if ((0, _hexletPairsData.isEmpty)(domCurr)) return (0, _hexletPairsData.reverse)(domNew);
      if (func((0, _hexletPairsData.head)(domCurr))) {
        _x = (0, _hexletPairsData.tail)(domCurr);
        _x2 = (0, _hexletPairsData.cons)((0, _hexletPairsData.head)(domCurr), domNew);
        _again = true;
        continue _function;
      } else {
        _x = (0, _hexletPairsData.tail)(domCurr);
        _x2 = domNew;
        _again = true;
        continue _function;
      }
    }
  };

  return iter(dom, (0, _hexletPairsData.l)());
};

exports.filter = filter;
var quotes = function quotes(dom) {

  return (0, _hexletHtmlTags.map)(function (element) {
    return (0, _hexletHtmlTags.value)(element);
  }, filter(function (element) {
    return (0, _hexletHtmlTags.is)('blockquote', element);
  }, dom));
};
exports.quotes = quotes;
// END

var removeHeaders = function removeHeaders(_x3) {
  var _again2 = true;

  _function2: while (_again2) {
    var elements = _x3;
    _again2 = false;

    if ((0, _hexletPairsData.isEmpty)(elements)) {
      return (0, _hexletPairsData.l)();
    }

    var element = (0, _hexletPairsData.head)(elements);
    var tailElements = (0, _hexletPairsData.tail)(elements);
    if ((0, _hexletHtmlTags.is)('h1', element)) {
      _x3 = tailElements;
      _again2 = true;
      element = tailElements = undefined;
      continue _function2;
    }
    return (0, _hexletPairsData.cons)(element, removeHeaders(tailElements));
  }
};
exports.removeHeaders = removeHeaders;

//# sourceMappingURL=sequence_filter-compiled.js.map