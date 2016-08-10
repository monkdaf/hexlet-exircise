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
import { reduce } from 'hexlet-pairs-data';
import { value, is, toString, filter, node, map } from 'hexlet-html-tags';

import { wc } from './utils';

// BEGIN (write your solution here)
export const extractHeaders = (elements) => {
  const elementsFiltered = filter(
    element => is('h2', element),
    elements);
  const elementsMapped = map(
    element => node('p', value(element)),
    elementsFiltered);
  return elementsMapped;
};

export const wordsCount = (tag, word, elements) => {
  const elementsFiltered = filter(
    element => is(tag, element),
    elements);
  const count = reduce(
    (element, acc) => acc + wc(word, value(element)),
    0,
    elementsFiltered);
  return count;
};
// END

