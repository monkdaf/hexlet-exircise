/**
 * Created by daf on 29.06.2016.
 */

/**
 * Задание
 * Реализуйте и экспортируйте функцию extractHeaders, которая извлекает все заголовки h2 из html и возвращает новый html, в котором заголовки заменены на p. Тело при этом остается тем же.

 import { node, append, make, reduce } from 'hexlet-html-tags';

 const html1 = append(make(), node('h2', 'header1'));
 const html2 = append(html1, node('h2', 'header2'));
 const html3 = append(html2, node('p', 'content'));

 // <p>header1</p><p>header2</p>
 toString(extractHeaders(html3));
 Реализуйте и экспортируйте функцию wordsCount, которая считает вхождения слова в определенный тег. Для подсчета слов в тексте одного тега воспользуйтесь вспомогательной функцией wc, которая уже импортирована в модуль solution.

 import { make, append, node } from 'hexlet-html-tags';

 const html1 = append(make(), node('h2', 'header1 lisp'));
 const html2 = append(html2, node('p', 'content'));
 const html3 = append(html3, node('h2', 'lisp header2 lisp'));
 const html4 = append(html4, node('p', 'content lisp'));

 wordsCount('h2', 'lisp', dom); // 3
 */

/**
 * Решение учителя
 *
 export const extractHeaders = (elements) => {
  const filtered = filter(element => is('h2', element), elements);
  return map(element => node('p', value(element)), filtered);
};

 export const wordsCount = (tagName, word, elements) => {
  const filtered = filter(element => is(tagName, element), elements);
  const values = map(element => value(element), filtered);
  return reduce((text, acc) => wc(word, text) + acc, 0, values);
};
 */

/**
 * моё решение
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hexletPairsData = require('hexlet-pairs-data');

var _hexletHtmlTags = require('hexlet-html-tags');

var _utils = require('./utils');

// BEGIN (write your solution here)
var extractHeaders = function extractHeaders(elements) {
  var elementsFiltered = (0, _hexletHtmlTags.filter)(function (element) {
    return (0, _hexletHtmlTags.is)('h2', element);
  }, elements);
  var elementsMapped = (0, _hexletHtmlTags.map)(function (element) {
    return (0, _hexletHtmlTags.node)('p', (0, _hexletHtmlTags.value)(element));
  }, elementsFiltered);
  return elementsMapped;
};

exports.extractHeaders = extractHeaders;
var wordsCount = function wordsCount(tag, word, elements) {
  var elementsFiltered = (0, _hexletHtmlTags.filter)(function (element) {
    return (0, _hexletHtmlTags.is)(tag, element);
  }, elements);
  var count = (0, _hexletPairsData.reduce)(function (element, acc) {
    return acc + (0, _utils.wc)(word, (0, _hexletHtmlTags.value)(element));
  }, 0, elementsFiltered);
  return count;
};
exports.wordsCount = wordsCount;
// END

//# sourceMappingURL=sequences_conventional_interfaces-compiled.js.map